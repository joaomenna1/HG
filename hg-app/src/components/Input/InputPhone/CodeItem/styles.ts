import styled from "styled-components/native";
import Typography from "../../../Typography";

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  gap: 10px;
  padding: 12px 20px;
  align-items: center;
`;

export const ContainerImage = styled.Image`
  height: 20px;
  width: 30px;
`;

export const ContainerText = styled(Typography).attrs(() => ({
  color: "white",
}))`
  flex: 1;
`;
