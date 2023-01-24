import { StyleSheet, Text, View } from "react-native";
import { Input } from "../Input";

const FormSignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
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
      <Input
        label="CPF"
        placeholder="000.000.000-00"
        keyboardType="numeric"
      />
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

      <View style={styles.buttonBlue}>
        <Text style={styles.buttonBlueText}>Entrar</Text>
      </View>
    </View>
  );
};

export { FormSignUp };

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    paddingBottom: 44,
    paddingLeft: 28,
    paddingRight: 28,
    maxWidth: 343,
    backgroundColor: "#FDFDFD",
    borderRadius: 4,
  },
  title: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 30,
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
});
