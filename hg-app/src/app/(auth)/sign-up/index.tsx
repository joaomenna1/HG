import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import Button from "../../../components/Button";
import HeaderBack from "../../../components/HeaderBack";
import { useRouter } from "expo-router";
import { IUserReq } from "./types/IUserReq";
import { schemaUserReq } from "./Validation/schemaUserReq";
import InputCustom from "../../../components/Input/InputCustom";
import {
  Container,
  ContainerInner,
  Content,
  AreaText,
  Title,
  SubTitle,
  Form,
  HStack,
  Line,
  IfNot,
  FooterText,
  SignupButton,
  SignupButtonText,
} from "./styles";
import { useUserStore } from "../../../store/userStore";

export default function Signup() {
  const router = useRouter();
  const { loading, error, success, createUser } = useUserStore();
  

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserReq>({
    resolver: yupResolver(schemaUserReq),
  });

  const handleCreateUser = async (data: IUserReq) => {
    await createUser(data);
    if (success) {
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      router.push("(auth)/sign-in");
    } else if (error) {
      Alert.alert("Erro", error);
    }
  };

  return (
    <Container>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ContainerInner
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <HeaderBack onPress={() => router.back()} />
          <Content>
            <AreaText>
              <Title>{"Vamos iniciar!"}</Title>
              <SubTitle>{"Crie sua conta para continuar!"}</SubTitle>
            </AreaText>

            <Form>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <InputCustom
                    value={value}
                    onChangeText={onChange}
                    placeholder={"Nome"}
                    error={errors.name && errors.name.message}
                  />
                )}
              />

              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <InputCustom
                    value={value}
                    onChangeText={onChange}
                    placeholder={"Email"}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    containerStyle={{ marginTop: 20 }}
                    error={errors.email && errors.email.message}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <InputCustom
                    value={value}
                    onChangeText={onChange}
                    placeholder={"Senha"}
                    secureTextEntry
                    containerStyle={{ marginTop: 20 }}
                    error={errors.password && errors.password.message}
                  />
                )}
              />

              <Button
                title={"Cadastrar"}
                onPress={handleSubmit(handleCreateUser)}
                isLoading={loading}
                style={{ marginTop: 40 }}
              />
            </Form>

            <HStack style={{ marginVertical: 15 }}>
              <Line />
              <IfNot>{"Ou"}</IfNot>
              <Line />
            </HStack>

            <HStack>
              <FooterText>{"Voce ja tem a conta?"}</FooterText>

              <SignupButton onPress={() => router.push("(auth)/sign-in")}>
                <SignupButtonText>{"Login"}</SignupButtonText>
              </SignupButton>
            </HStack>
          </Content>
        </ContainerInner>
      </KeyboardAvoidingView>
    </Container>
  );
}
