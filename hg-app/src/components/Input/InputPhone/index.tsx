import React, { useRef, useState, useEffect } from "react";
import theme from "../../../theme";
import CodesModal from "./CodesModal";
import { ModalCustom } from "../../Modal";
import { Animated, ViewStyle } from "react-native";
import { Container, Content, AnimatedText, ErrorText } from "./styles";
import PhoneInput, {
  ReactNativePhoneInputProps,
} from "react-native-phone-input";

type InputPhoneProps = {
  containerStyle?: ViewStyle;
  placeholder?: string;
  initialValue?: string;
  onChangeText: (text: string) => void;
  error?: string | undefined;
};

export type InputProps = ReactNativePhoneInputProps & InputPhoneProps;

export type ICodes = {
  code: string;
  name: string;
  callingCode: string;
  flag: string;
};

type ICodesProps = {
  name: string;
  topLevelDomain: [string];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: [string];
  capital: string;
  altSpellings: [string, string, string, string];
  subregion: string;
  region: string;
  population: number;
  latlng: [number, number];
  demonym: string;
  area: number;
  gini: number;
  timezones: [string, string, string, string];
  borders: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies: [
    {
      code: string;
      name: string;
      symbol: string;
    }
  ];
  languages: [
    {
      iso639_1: string;
      iso639_2: string;
      name: string;
      nativeName: string;
    }
  ];
  translations: {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
  };
  flag: string;
  regionalBlocs: [
    {
      acronym: string;
      name: string;
      otherAcronyms: [string, string, string];
      otherNames: [string, string, string, string];
    }
  ];
  cioc: string;
  independent: boolean;
};

const InputPhone = ({
  containerStyle,
  placeholder,
  initialValue,
  onChangeText,
  error,
  ...props
}: InputProps) => {
  const [areas, setAreas] = useState<ICodes[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const phoneInputRef = useRef<PhoneInput | null>(null);
  const labelPosition = useRef(new Animated.Value(0)).current;

  // fectch codes from rescountries api
  useEffect(() => {
    handleFocus();
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        let areaData = data.map((item: ICodesProps) => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://flagcdn.com/w320/${item.alpha2Code.toLocaleLowerCase()}.png`,
          };
        });

        setAreas(areaData);
      });
  }, []);

  const handleFocus = () => {
    animatedLabel(1);
  };

  const animatedLabel = (toValue: number) => {
    Animated.timing(labelPosition, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const labelStyle = {
    left: 12,
    top: labelPosition.interpolate({
      inputRange: [0, 0.6],
      outputRange: [14.5, 0],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 5],
      outputRange: [theme.colors.base.gray_4, theme.colors.base.gray_5],
    }),
  };

  const headleFlag = () => {
    setModalVisible(true);
  };

  const selectCountry = (country: ICodes) => {
    setModalVisible(false);
    phoneInputRef.current?.selectCountry(country.code.toLocaleLowerCase());
  };

  const handleLimitTextPhone = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '');
  
    if (digitsOnly.length > 13) {
      const limitedPhone = digitsOnly.slice(0, 13);
      phoneInputRef.current?.setValue(limitedPhone); 
      onChangeText(limitedPhone); 
    } else {
      onChangeText(phone); 
    }
  };

  return (
    <React.Fragment>
      <Container style={containerStyle}>
        <Content error={!!error}>
          <AnimatedText
            style={[labelStyle, !!error && { color: theme.colors.brand.red }]}
          >
            {placeholder}
          </AnimatedText>
          <PhoneInput
            {...props}
            ref={(ref) => {
              phoneInputRef.current = ref;
            }}
            initialValue={initialValue}
            initialCountry={"br"}
            onPressFlag={headleFlag}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 12,
            }}
            textStyle={{ fontSize: 16 }}
            accessibilityLabel="Phone"
            onChangePhoneNumber={(phone) => handleLimitTextPhone(phone)}
          />
        </Content>
        {error && <ErrorText>{error}</ErrorText>}
      </Container>

      <ModalCustom
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <CodesModal
          data={areas as ICodes[]}
          setModalVisible={setModalVisible}
          setSelectedArea={(country) => {
            selectCountry(country);
          }}
        />
      </ModalCustom>
    </React.Fragment>
  );
};

export default InputPhone;
