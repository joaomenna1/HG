import * as React from 'react';
import { Animated, Dimensions } from 'react-native';
import { ButtonContainer, Button, ButtonText } from './styles';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('screen');

const buttonColors = ['#063ABA', '#1548e3', '#0c5fb1', '#31caab'];

interface AnimatedButtonProps {
  scrollX: Animated.Value;
}

export const BackDropButton: React.FC<AnimatedButtonProps> = ({ scrollX }) => {
  const router = useRouter();

  const backgroundColor = scrollX.interpolate({
    inputRange: buttonColors.map((_, i) => i * width),
    outputRange: buttonColors,
  });

  return (
    <ButtonContainer>
      <Button
        style={{ backgroundColor }}
        onPress={() => router.push('/(auth)/sign-in')}
      >
        <ButtonText>Log in</ButtonText>
      </Button>

      <Button
        style={{ backgroundColor }}
        onPress={() => router.push('/(auth)/sign-up')}
      >
        <ButtonText>Join Now</ButtonText>
      </Button>
    </ButtonContainer>
  );
};
