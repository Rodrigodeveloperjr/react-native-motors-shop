import { StyleSheet, Text, View } from "react-native";
import { TextArea } from "../TextArea/inde";
import { useState } from "react";
import { Input } from "../Input";
import { styles } from "./style";

const FormSignUp = () => {
  const [colorBlue, setColorBlue] = useState<boolean>(true);
  const [colorWhite, setColorWhite] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <Text style={styles.subtitle}>Infomações pessoais</Text>

      <Input
        label="Nome"
        placeholder="Ex: Rodrigo Silva"
        keyboardType="default"
      />
      <Input
        label="Email"
        placeholder="Ex: rodrigo@gmail.com"
        keyboardType="email-address"
      />
      <Input label="CPF" placeholder="000.000.000-00" keyboardType="numeric" />
      <Input
        label="Celular"
        placeholder="(DDD) 90000-0000"
        keyboardType="default"
      />
      <Input
        label="Data de nascimento"
        placeholder="00/00/0000"
        keyboardType="default"
      />
      <TextArea />

      <Text style={styles.subtitle}>Infomações de endereço</Text>

      <Input label="CEP" placeholder="00000-000" keyboardType="default" />
      <Input
        label="Estado"
        placeholder="Digitar estado"
        keyboardType="default"
      />
      <Input
        label="Cidade"
        placeholder="Digitar cidade"
        keyboardType="default"
      />
      <Input label="Rua" placeholder="Digitar rua" keyboardType="default" />
      <Input
        label="Número"
        placeholder="Digitar número"
        keyboardType="default"
      />
      <Input
        label="Complemento"
        placeholder="Ex: Apart 307"
        keyboardType="default"
      />

      <Text style={styles.subtitle}>Tipo de conta</Text>

      <View style={styles.viewButtons}>
        <View style={colorBlue ? styles.buttonBlue : styles.buttonWhite}>
          <Text
            style={colorBlue ? styles.buttonBlueText : styles.buttonWhiteText}
            onPress={() => {
              setColorBlue(true);
              setColorWhite(true);
            }}
          >
            Comprador
          </Text>
        </View>

        <View style={colorWhite ? styles.buttonWhite : styles.buttonBlue}>
          <Text
            style={colorWhite ? styles.buttonWhiteText : styles.buttonBlueText}
            onPress={() => {
              setColorWhite(false);
              setColorBlue(false);
            }}
          >
            Anúnciante
          </Text>
        </View>
      </View>

      <Input label="Senha" placeholder="Digitar senha" keyboardType="default" />
      <Input
        label="Confirmar senha"
        placeholder="Digitar senha"
        keyboardType="default"
      />

      <View style={styles.buttonBlueFinally}>
        <Text style={styles.buttonBlueText}>Finalizar cadastro</Text>
      </View>
    </View>
  );
};

export { FormSignUp };
