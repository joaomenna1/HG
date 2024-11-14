import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputCustom } from "../../../components/Input";
import { useAuthStore } from "../../../store/authStore";
import { StatusBar } from "expo-status-bar";
import { Alert, Keyboard } from "react-native";
import Button from "../../../components/Button";
import { ISignInReq } from "./Types/ISignInReq";
import { schemaSignIn } from "./Validation/schemaSignIn";
import HeaderBack from "../../../components/HeaderBack";
import { useRouter } from "expo-router";
import {
  AreaText,
  CloseKeyboard,
  Container,
  Content,
  ContentInne,
  SubTitle,
  Title,
  Form,
  RecoverPasswordButton,
  RecoverPasswordButtonText,
  HStack,
  Line,
  IfNot,
  FooterText,
  SigninButtonText,
  SigninButton,
} from "./styles";

export default function Signin() {
  const router = useRouter();
  const { login, loading, error, isAuthenticated } = useAuthStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInReq>({
    resolver: yupResolver(schemaSignIn),
  });

  const handleLogin = async (data: ISignInReq) => {
    await login(data.email, data.password);
    if (isAuthenticated) {
      console.log("autenticado")
      router.push("/(app)/Home");
    } else if (error) {
      Alert.alert("Erro", error);
    }
  };


  return (
    <Container>
      <StatusBar style="dark" />
      <HeaderBack onPress={() => router.back()} />

      <CloseKeyboard onPress={() => Keyboard.dismiss()}>
        <Content>
          <ContentInne>
            <AreaText>
              <Title>Faça o login em nossa plataforma</Title>
              <SubTitle>Insira os dados para continuar</SubTitle>
            </AreaText>

            <Form>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <InputCustom
                    value={value}
                    autoCapitalize="none"
                    onChangeText={onChange}
                    placeholder="Email address"
                    keyboardType="email-address"
                    error={errors.email && errors.email.message}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <InputCustom
                    placeholder={"Senha"}
                    value={value}
                    secureTextEntry
                    onChangeText={onChange}
                    containerStyle={{ marginTop: 20 }}
                    error={errors.password && errors.password.message}
                  />
                )}
              />

              <RecoverPasswordButton
                onPress={() => router.push("/(auth)/password-recovery")}
              >
                <RecoverPasswordButtonText>
                  Esqueceu sua senha?
                </RecoverPasswordButtonText>
              </RecoverPasswordButton>

              <Button
                title="Login"
                onPress={handleSubmit(handleLogin)}
                isLoading={loading}
              />

              <HStack style={{ marginVertical: 15 }}>
                <Line />
                <IfNot>Ou</IfNot>
                <Line />
              </HStack>

              <HStack>
                <FooterText>Você não tem conta? </FooterText>
                <SigninButton onPress={() => router.push("/(auth)/sign-up")}>
                  <SigninButtonText>Cadastrar</SigninButtonText>
                </SigninButton>
              </HStack>
            </Form>
          </ContentInne>
        </Content>
      </CloseKeyboard>
    </Container>
  );
}
