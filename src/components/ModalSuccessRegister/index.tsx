import { HeaderModal } from "../HeaderModal";
import { Pressable, Text, View } from "react-native";
import { styles } from "./style";
import React from "react";

const ModalSuccessRegister = () => {
  return (
    <View style={styles.container}>
      <HeaderModal title="Sucesso!" />

      <View style={styles.content}>
        <Text style={styles.title}>Sua conta foi criada com sucesso!</Text>

        <Text style={styles.text}>
          Agora você poderá ver seus negócios crescendo em grande escala
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ir para o login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export { ModalSuccessRegister };
