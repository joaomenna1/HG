import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const image1 = require('./assets/imagesWelcome/image1.png');
const image2 = require('./assets/imagesWelcome/image2.png');
const image3 = require('./assets/imagesWelcome/image3.png');
const image4 = require('./assets/imagesWelcome/image4.png');

const { width, height } = Dimensions.get('screen');

const bgs = ['#A5BBFF', '#f65a5a', '#FF63ED', '#8e9fff'];

interface DataType {
  key: string;
  title: string;
  description: string;
  image: string;
}

const DATA: DataType[] = [
  {
    key: '3571572',
    title: 'Análise de Dados Vitais',
    description: "Monitore o estado do coração com precisão e segurança, sempre atualizado.",
    image: image1,
  },
  {
    key: '3571747',
    title: 'Prevenção de Doenças Cardíacas',
    description: 'Utilize tecnologia para prevenir problemas cardíacos e melhorar a qualidade de vida.',
    image: image3,
  },
  {
    key: '3571680',
    title: 'Relatórios para Diagnósticos Precoces',
    description: 'Obtenha insights detalhados para diagnósticos rápidos e precisos.',
    image: image2,
  },
  {
    key: '3571603',
    title: 'Monitoramento Cardíaco Inteligente',
    description: 'Analise dados vitais e detecte sinais precoces de problemas cardíacos.',
    image: image4,
  },
];

interface IndicatorProps {
  scrollX: Animated.Value;
}

const Indicator: React.FC<IndicatorProps> = ({ scrollX }) => {
  return (
    <IndicatorContainer>
      {DATA.map((_, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: 'clamp',
        });
        return (
          <AnimatedIndicator
            key={`indicator-${index}`}
            style={{
              opacity,
              transform: [{ scale }],
            }}
          />
        );
      })}
    </IndicatorContainer>
  );
};

interface BackdropProps {
  scrollX: Animated.Value;
}

const Backdrop: React.FC<BackdropProps> = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs,
  });

  return <AnimatedBackground style={{ backgroundColor }} />;
};

interface SquareProps {
  scrollX: Animated.Value;
}

const Square: React.FC<SquareProps> = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '0deg', '35deg'],
  });

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });

  return (
    <AnimatedSquare
      style={{
        transform: [{ rotate }],
      }}
    />
  );
};

const App: React.FC = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        contentContainerStyle={{ paddingBottom: 100 }}
        pagingEnabled
        renderItem={({ item }) => (
          <ItemContainer>
            <ImageContainer>
              <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={{ width: width / 2, height: width / 2, resizeMode: 'contain' }} />
            </ImageContainer>
            <TextContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </TextContainer>
          </ItemContainer>
        )}
      />
      <ButtonContainer>
        <Button>
          <ButtonText>Login</ButtonText>
        </Button>
        <CreateAccountButton>
          <ButtonText style={{ color: '#000' }}>Criar conta</ButtonText>
        </CreateAccountButton>
      </ButtonContainer>
      <Indicator scrollX={scrollX} />
    </Container>
  );
};

// Styled Components
const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const IndicatorContainer = styled.View`
  position: absolute;
  bottom: 50px;
  flex-direction: row;
`;

const AnimatedIndicator = styled(Animated.View)`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: #fff;
  margin: 10px;
`;

const AnimatedBackground = styled(Animated.View)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const AnimatedSquare = styled(Animated.View)`
  width: ${height}px;
  height: ${height}px;
  background-color: #fff;
  border-radius: 86px;
  position: absolute;
  top: -${height * 0.6}px;
  left: -${height * 0.3}px;
`;

const ItemContainer = styled.View`
  width: ${width}px;
  align-items: center;
  padding: 20px;
`;

const ImageContainer = styled.View`
  flex: 0.7;
  justify-content: center;
`;

const TextContainer = styled.View`
  flex: 0.3;
`;

const Title = styled.Text`
  color: #fff;
  font-weight: 800;
  font-size: 28px;
  margin-bottom: 10px;
`;

const Description = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 18px;
`;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 130px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding-horizontal: 20px;
`;

const Button = styled.TouchableOpacity`
  background-color: #fff;
  padding-vertical: 15px;
  padding-horizontal: 40px;
  border-radius: 25px;
`;

const CreateAccountButton = styled(Button)`
  background-color: #e1f4ff;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;

export default App;
