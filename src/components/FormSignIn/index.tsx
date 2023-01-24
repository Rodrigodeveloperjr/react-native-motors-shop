import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const FormSignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text style={styles.labelUser}>Usuário</Text>
      <TextInput
        placeholder="Digitar usuário"
        keyboardType="default"
        style={styles.input}
        placeholderTextColor="#868E96"
      />
      <Text style={styles.labelPassword}>Senha</Text>
      <TextInput
        placeholder="Digitar senha"
        keyboardType="visible-password"
        style={styles.input}
        placeholderTextColor="#868E96"
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
  },
  labelUser: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    color: "#212529",
    paddingTop: 28,
    paddingBottom: 7,
  },
  labelPassword: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    color: "#212529",
    paddingTop: 22.5,
    paddingBottom: 7,
  },
  input: {
    borderWidth: 2,
    borderColor: "#E9ECEF",
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4,
    height: 48,
    fontSize: 16,
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
