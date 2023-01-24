import { Alert, Text, View } from "react-native";
import { Input } from "../Input";
import { styles } from "./style";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FormSignIn = () => {
  const fieldsValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required("O email não pode ser vazio")
      .email("Email inválido"),
    password: yup
      .string()
      .required("A senha não pode ser vazia")
      .min(6, "Mínimo 8 dígitos"),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(fieldsValidationSchema) });

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  const onSubmit = (data: any) => Alert.alert(data.email, data.password);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Input
        label="Usuário"
        placeholder="Digitar usuário"
        keyboardType="default"
        onChangeText={(text: any) => setValue("email", text)}
        error={errors?.email}
        required={true}
      />
      <Input
        label="Senha"
        placeholder="Digitar senha"
        keyboardType="visible-password"
        onChangeText={(text: any) => setValue("password", text)}
        error={errors?.password}
        required={true}
      />

      <Text style={styles.linkMyPassword}>Esqueci minha senha</Text>

      <View style={styles.viewButtons}>
        <View style={styles.buttonBlue}>
          <Text style={styles.buttonBlueText} onPress={handleSubmit(onSubmit)}>
            Entrar
          </Text>
        </View>

        <Text style={styles.textAccount}>Ainda não possui conta?</Text>

        <View style={styles.buttonWhite}>
          <Text style={styles.buttonWhiteText}>Cadastrar</Text>
        </View>
      </View>
    </View>
  );
};

export { FormSignIn };
