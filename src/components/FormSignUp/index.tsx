import { TextArea } from "../TextArea/inde";
import { Text, View } from "react-native";
import { useState } from "react";
import { Input } from "../Input";
import { styles } from "./style";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FormSignUp = () => {
  const [colorBlue, setColorBlue] = useState<boolean>(true);
  const [colorWhite, setColorWhite] = useState<boolean>(true);
  const [isBuyerOrAdvertiser, setIsBuyerOrAdvertiser] =
    useState<boolean>(false);

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo 8 caracteres")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais"
      ),
    cpf: yup.string().required("CPF obrigatório"),
    cellphone: yup.string().required("Celular obrigatório"),
    birthdate: yup.string().required("Data obrigatória"),
    description: yup.string().required("Descrição obrigatória"),
    zip_code: yup
      .string()
      .required("CEP obrigatório")
      .max(8, "Máximo 8 caracteres"),
    country: yup.string().required("País obrigatório"),
    state: yup.string().required("Estado obrigatório"),
    city: yup.string().required("Cidade obrigatória"),
    district: yup.string().required("Bairro obrigatório"),
    street: yup.string().required("Rua obrigatória"),
    number: yup.number().required("Número obrigatório"),
    complement: yup.string().required("Complemento obrigatório"),
    repeat_password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo 8 caracteres")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais"
      )
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    register("name");
    register("email");
    register("cpf");
    register("cellphone");
    register("birthdate");
    register("zip_code");
    register("state");
    register("city");
    register("street");
    register("number");
    register("complement");
    register("password");
    register("repeat_password");
  }, [register]);

  const onSubmit = (data: any) => {
    isBuyerOrAdvertiser ? (data.is_seller = true) : (data.is_seller = false);

    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <Text style={styles.subtitle}>Infomações pessoais</Text>

      <Input
        label="Nome"
        placeholder="Ex: Rodrigo Silva"
        keyboardType="default"
        onChangeText={(text: string) => setValue("name", text)}
        error={errors?.name}
        required={true}
      />
      <Input
        label="Email"
        placeholder="Ex: rodrigo@gmail.com"
        keyboardType="email-address"
        onChangeText={(text: string) => setValue("email", text)}
        error={errors?.email}
        required={true}
      />
      <Input
        label="CPF"
        placeholder="000.000.000-00"
        keyboardType="numeric"
        onChangeText={(text: string) => setValue("cpf", text)}
        error={errors?.cpf}
        required={true}
      />
      <Input
        label="Celular"
        placeholder="(DDD) 90000-0000"
        keyboardType="default"
        onChangeText={(text: string) => setValue("cellphone", text)}
        error={errors?.cellphone}
        required={true}
      />
      <Input
        label="Data de nascimento"
        placeholder="00/00/0000"
        keyboardType="default"
        onChangeText={(text: string) => setValue("birthdate", text)}
        error={errors?.birthdate}
        required={true}
      />
      <TextArea />

      <Text style={styles.subtitle}>Infomações de endereço</Text>

      <Input
        label="CEP"
        placeholder="00000-000"
        keyboardType="default"
        onChangeText={(text: string) => setValue("zip_code", text)}
        error={errors?.cep}
        required={true}
      />
      <Input
        label="Estado"
        placeholder="Digitar estado"
        keyboardType="default"
        onChangeText={(text: string) => setValue("state", text)}
        error={errors?.state}
        required={true}
      />
      <Input
        label="Cidade"
        placeholder="Digitar cidade"
        keyboardType="default"
        onChangeText={(text: string) => setValue("city", text)}
        error={errors?.city}
        required={true}
      />
      <Input
        label="Rua"
        placeholder="Digitar rua"
        keyboardType="default"
        onChangeText={(text: string) => setValue("street", text)}
        error={errors?.street}
        required={true}
      />
      <Input
        label="Número"
        placeholder="Digitar número"
        keyboardType="default"
        onChangeText={(text: string) => setValue("number", text)}
        error={errors?.number}
        required={true}
      />
      <Input
        label="Complemento"
        placeholder="Ex: Apart 307"
        keyboardType="default"
        onChangeText={(text: string) => setValue("complement", text)}
        error={errors?.complement}
        required={true}
      />

      <Text style={styles.subtitle}>Tipo de conta</Text>

      <View style={styles.viewButtons}>
        <Text
          style={colorBlue ? styles.buttonBlue : styles.buttonWhite}
          onPress={() => {
            setColorBlue(true);
            setColorWhite(true);
            setIsBuyerOrAdvertiser(true);
          }}
        >
          Comprador
        </Text>

        <Text
          style={colorWhite ? styles.buttonWhite : styles.buttonBlue}
          onPress={() => {
            setColorWhite(false);
            setColorBlue(false);
            setIsBuyerOrAdvertiser(false);
          }}
        >
          Anúnciante
        </Text>
      </View>

      <Input
        label="Senha"
        placeholder="Digitar senha"
        keyboardType="default"
        onChangeText={(text: string) => setValue("password", text)}
        error={errors?.password}
        required={true}
        secureTextEntry={true}
      />
      <Input
        label="Confirmar senha"
        placeholder="Digitar senha"
        keyboardType="default"
        onChangeText={(text: string) => setValue("repeat_password", text)}
        error={errors?.repeat_password}
        required={true}
        secureTextEntry={true}
      />

      <Text style={styles.buttonBlueFinally} onPress={handleSubmit(onSubmit)}>
        Finalizar cadastro
      </Text>
    </View>
  );
};

export { FormSignUp };
