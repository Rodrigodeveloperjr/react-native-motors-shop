import { Text, View } from "react-native";
import { Input } from "../Input";
import { styles } from "./style";

const FormSignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Input
        label="Usuário"
        placeholder="Digitar usuário"
        keyboardType="default"
      />
      <Input
        label="Senha"
        placeholder="Digitar senha"
        keyboardType="visible-password"
      />

      <Text style={styles.linkMyPassword}>Esqueci minha senha</Text>

      <View style={styles.viewButtons}>
        <View style={styles.buttonBlue}>
          <Text style={styles.buttonBlueText}>Entrar</Text>
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
