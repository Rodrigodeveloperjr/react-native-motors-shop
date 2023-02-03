import { Text, View } from "react-native";
import { Input } from "../Input";
import { styles } from "./style";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRoutes } from "../../routes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type ISignIn = StackNavigationProp<IRoutes, "SignIn">;

const FormSignIn = () => {
  const navigation = useNavigation<ISignIn>();

  const fieldsValidationSchema = yup.object().shape({
    email: yup.string().required("Usuário obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
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

  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Input
        label="Usuário"
        placeholder="Digitar usuário"
        keyboardType="default"
        onChangeText={(text: string) => setValue("email", text)}
        error={errors?.email}
        required={true}
      />
      <Input
        label="Senha"
        placeholder="Digitar senha"
        keyboardType="default"
        onChangeText={(text: string) => setValue("password", text)}
        error={errors?.password}
        required={true}
        secureTextEntry={true}
      />

      <Text style={styles.linkMyPassword}>Esqueci minha senha</Text>

      <View style={styles.viewButtons}>
        <Text style={styles.buttonBlue} onPress={handleSubmit(onSubmit)}>
          Entrar
        </Text>

        <Text style={styles.textAccount}>Ainda não possui conta?</Text>

        <Text
          style={styles.buttonWhite}
          onPress={() => navigation.navigate("SignUp")}
        >
          Cadastrar
        </Text>
      </View>
    </View>
  );
};

export { FormSignIn };
