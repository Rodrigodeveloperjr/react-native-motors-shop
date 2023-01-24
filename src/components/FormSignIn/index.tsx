import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Input } from "../Input";

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

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    paddingBottom: 44,
    paddingLeft: 28,
    paddingRight: 28,
    maxWidth: 343,
    height: 542,
    backgroundColor: "#FDFDFD",
    borderRadius: 4,
  },
  title: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 30,
    paddingBottom: 12.5,
  },
  linkMyPassword: {
    color: "#495057",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    textAlign: "right",
    paddingTop: 10,
    paddingBottom: 25,
    textDecorationLine: "underline",
  },
  buttonBlue: {
    backgroundColor: "#4529E6",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 28,
    paddingRight: 28,
    width: 286.09,
    height: 48,
    borderWidth: 1.5,
    borderColor: "#4529E6",
    borderRadius: 4,
  },
  buttonBlueText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  textAccount: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    color: "#495057",
    textAlign: "center",
  },
  buttonWhite: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 28,
    paddingRight: 28,
    width: 286.09,
    height: 48,
    borderWidth: 1.5,
    borderColor: "#ADB5BD",
    borderRadius: 4,
  },
  buttonWhiteText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#0B0D0D",
    textAlign: "center",
  },
  viewButtons: {
    height: 168,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
