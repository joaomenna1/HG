import React from "react";
import { ViewStyle } from "react-native";
import { Container, Content, ButtonMenu, Icon, Title } from "./styles";

type Iprops = {
  title?: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  headerButton?: React.JSX.Element;
};

const HeaderBack = ({
  title,
  onPress,
  containerStyle,
  headerButton,
}: Iprops) => {
  return (
    <Container style={[containerStyle, {width: 'auto'}]}>
      <Content style={{ flexDirection: "row", alignItems: "center" }}>
        <ButtonMenu onPress={onPress}>
          <Icon />
        </ButtonMenu>
        {title && <Title>{title}</Title>}
      </Content>
      {headerButton && headerButton}
    </Container>
  );
};

export default HeaderBack;
