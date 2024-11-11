import styled from "styled-components/native";
import Typography from "../../../Typography";
import { MaterialIcons } from "@expo/vector-icons";

import { Dimensions } from "react-native"

const { height: HEIGHT } = Dimensions.get("window")

export const Container = styled.TouchableOpacity`
  flex:1;
  padding:16px;
  align-items:center;
  background-color: "rgba(0,0,0, 0.5)";
`;

export const Content = styled.View`
  width:100%;
  padding: 20px 10px;
  
  border-radius: 8px;
  
  position: absolute;
  top: ${HEIGHT / 3}px;
  
  background-color:${({ theme }) => theme.colors.base.white};
`;

export const Select = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 4px;
  background-color:${({ theme }) => theme.colors.base.gray_7};
`;

export const SelectText = styled(Typography).attrs(() => ({
  fontFamily: "inter_semiBold",
  fontSize: "body_sm"
}))`

`;


