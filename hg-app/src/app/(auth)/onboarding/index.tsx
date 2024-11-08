import React from "react";
import { Animated, Image, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import { StatusBar } from "react-native";
import { Backdrop } from "./components/BackDrop";
import { Square } from "./components/Square";
import { Indicator } from "./components/indicator";
import DataTextOnboarding from "./components/Data/DataTextOnboarding";
import { BackDropButton } from "./components/BackDropButton";
import {
  Container,
  ItemContainer,
  ImageContainer,
  TextContainer,
  Title,
  Description,
} from "./styles";

const OnBoarding = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const DATA = DataTextOnboarding();
  const { width } = Dimensions.get("screen");

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        pagingEnabled
        renderItem={({ item }) => (
          <ItemContainer>
            <ImageContainer>
              {item.animation ? (
                <LottieView
                  source={item.animation}
                  autoPlay
                  loop
                  style={{ width: width / 2, height: width / 2 }}
                />
              ) : (
                <Image
                  source={
                    typeof item.image === "string"
                      ? { uri: item.image }
                      : item.image
                  }
                  style={{
                    width: width / 2,
                    height: width / 2,
                    resizeMode: "contain",
                  }}
                />
              )}
            </ImageContainer>
            <TextContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </TextContainer>
          </ItemContainer>
        )}
      />
      <BackDropButton scrollX={scrollX} />
      <Indicator scrollX={scrollX} />
    </Container>
  );
};

export default OnBoarding;
