import styled from "styled-components/native";
import { Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "../../../components/Typography";

const { width } = Dimensions.get('screen');

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  align-items: center;
  justify-content: center;
`;

export const ItemContainer = styled.View`
  width: ${width}px;
  align-items: center;
  padding: 20px;
`;

export const ImageContainer = styled.View`
  flex: 0.7;
  justify-content: center;
`;

export const TextContainer = styled.View`
  flex: 0.3;
`;

export const Title = styled(Typography).attrs(() => ({
  fontSize: "title_2xl",
  fontFamily: "inter_bold",
  color: "white"
}))`
  padding-top: 15px;
  text-align: center;
`;
export const Description = styled(Typography).attrs(() => ({
  fontSize: "body_lg",
  fontFamily: "inter_regular",
  color: "white",
}))`
  text-align: justify;
  line-height: 28px;
  margin-top: 10px;
`;
