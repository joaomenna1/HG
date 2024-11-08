import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as T from "./type";

import selectColor from "./selectColor";

type IProps = {
  w?: string;
  minW?: string;
  maxW?: string;
  h?: string;
  minH?: string;
  maxH?: string;
  p?: string;
  m?: string;
  gap?: string;
  flex?: number;
  flexD?: T.Direction;
  justifyC?: T.Content;
  alignI?: T.Content;
  bg?: T.Colors;
  borderW?: string
  borderR?: string;
  borderC?: T.Colors;
  position?: T.Position;
  positionTop?: string;
  positionLeft?: string;
  positionBottom?: string;
  positionRight?: string;
}

export const Container = styled(SafeAreaView) <IProps>`
  width: ${({ w = 'auto' }) => w};
  max-width:${({ maxW = 'none' }) => maxW};
  min-width:${({ minW = 'none' }) => minW};

  height: ${({ h = 'auto' }) => h};
  max-height:${({ maxH = 'none' }) => maxH};
  min-height:${({ maxH = 'none' }) => maxH};
    
  padding:${({ p = '0px' }) => p};
  margin:${({ m = '0px' }) => m};
  
  gap: ${({ gap = 'unset' }) => gap};
  flex:${({ flex = 'auto' }) => flex};
  flex-direction: ${({ flexD = 'unset' }) => flexD};
  justify-content: ${({ justifyC = 'start' }) => justifyC};
  align-items: ${({ alignI = 'start' }) => alignI};

  border-width: ${({ borderW = '0px' }) => borderW};
  border-radius: ${({ borderR = '0px' }) => borderR};

  position: ${({ position = 'unset' }) => position};
  top: ${({ positionTop = 'auto' }) => positionTop};
  left: ${({ positionLeft = 'auto' }) => positionLeft};
  bottom: ${({ positionBottom = 'auto' }) => positionBottom};
  right: ${({ positionRight = 'auto' }) => positionRight};

  background-color:  ${({ bg }) => selectColor(bg)};
  border-color: ${({ borderC }) => selectColor(borderC)};
`;

export const Section = styled.View<IProps>`
  width: ${({ w = 'auto' }) => w};
  max-width:${({ maxW = 'none' }) => maxW};
  min-width:${({ minW = 'none' }) => minW};

  height: ${({ h = 'auto' }) => h};
  max-height:${({ maxH = 'none' }) => maxH};
  min-height:${({ maxH = 'none' }) => maxH};
    
  padding:${({ p = '0px' }) => p};
  margin:${({ m = '0px' }) => m};
  
  gap: ${({ gap = 'unset' }) => gap};
  flex:${({ flex = 'auto' }) => flex};
  flex-direction: ${({ flexD = 'unset' }) => flexD};
  justify-content: ${({ justifyC = 'start' }) => justifyC};
  align-items: ${({ alignI = 'start' }) => alignI};

  border-width: ${({ borderW = '0px' }) => borderW};
  border-radius: ${({ borderR = '0px' }) => borderR};

  position: ${({ position = 'unset' }) => position};
  top: ${({ positionTop = 'auto' }) => positionTop};
  left: ${({ positionLeft = 'auto' }) => positionLeft};
  bottom: ${({ positionBottom = 'auto' }) => positionBottom};
  right: ${({ positionRight = 'auto' }) => positionRight};

  background-color:  ${({ bg }) => selectColor(bg)};
  border-color: ${({ borderC }) => selectColor(borderC)};
`;
