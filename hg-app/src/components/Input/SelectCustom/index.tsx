import React, { useState } from "react";
import { Animated, ViewStyle, TextInputProps, Modal } from "react-native";
import {
  Container,
  Content,
  Select,
  Label,
  Icon,
  ErrorText,
} from "./styles";

import { Controller } from "react-hook-form";
import Item from "./Item";

type ISelectProps = {
  name: string;
  control: any;
  placeholder?: string;
  containerStyle?: ViewStyle;
  error?: string | undefined;
  options: {
    label: string;
  }[]
};

const SelectCustom = ({
  name,
  control,
  placeholder,
  error,
  options,
  containerStyle,
}: ISelectProps) => {
  const [isModal, setIsModal] = useState(false)
  
  return (
    <Container style={containerStyle}>
      <Controller
        control={control}
        name={name}

        render={({ field: { onChange, value } }) => (
          <Content error={!!error}>
            <Select onPress={() => setIsModal(true)}>
              <Label numberOfLines={1} isLabel={value ? true : false} error={!!error}>
                {value ? value : placeholder}
              </Label>

              <Icon isDown={isModal} error={!!error}/>

            </Select>

            <Modal visible={isModal} animationType="fade" transparent={true} onRequestClose={() => setIsModal(false)}>
              <Item list={options} close={() => setIsModal(false)} onChange={onChange} />
            </Modal>

          </Content>
        )}

      />

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default SelectCustom;
