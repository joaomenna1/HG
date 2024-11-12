import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import Typography from "../../../components/Typography";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0px 16px;
  background-color: ${({ theme }) => theme.colors.base.white};
`;

export const CloseKeyboard = styled.Pressable`
  flex: 1;
`;

export const Content = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  flex: 1;
`;

export const ContentInne = styled.View`
  flex: 1;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const AreaText = styled.View`
  width: 100%;
  gap: 4px;
  margin-top: 30px;
`;

export const Title = styled(Typography).attrs(() => ({
  fontSize: "title_2xl",
  lineHeight: "2xl",
  fontFamily: "inter_bold",
}))``;

export const SubTitle = styled(Typography).attrs(() => ({
  fontSize: "body_md",
  fontFamily: "inter_semiBold",
}))``;

export const Form = styled.View`
  width: 100%;
`;

export const RecoverPasswordButton = styled.TouchableOpacity`
  margin: 15px 0px;
  padding-right: 5px;
  align-items: flex-end;
`;

export const RecoverPasswordButtonText = styled(Typography).attrs(() => ({
  fontSize: "body_sm",
  color: "gray_2",
}))`
  font-style: italic;
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.View`
  flex: 1;
  height: 1px;
  margin: 0px 10px;
  background-color: ${({ theme }) => theme.colors.base.gray_6};
`;

export const IfNot = styled(Typography).attrs(() => ({
  fontFamily: "inter_semiBold",
  color: "gray_2",
}))``;

export const FooterText = styled(Typography).attrs(() => ({
  fontSize: "body_md",
  fontFamily: "inter_regular",
}))``;

export const SigninButton = styled.TouchableOpacity``;

export const SigninButtonText = styled(Typography).attrs(() => ({
  fontSize: "body_md",
  fontFamily: "inter_semiBold",
  color: "primary",
}))``;
