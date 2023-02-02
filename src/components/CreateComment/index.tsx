import { AvatarUserProduct } from "../AvatarUserProduct";
import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import React from "react";

const CreateComment = () => {
  return (
    <View style={styles.container}>
      <AvatarUserProduct username="Rodrigo Silva" />

      <TextInput style={styles.input} placeholder="Carro muito confortável, foi uma ótima experiência de compra..." placeholderTextColor="#868E96" />
      <Text style={styles.button}>
        <Text style={styles.textButton}>Comentar</Text>
      </Text>

      <View style={styles.content}>
        <View style={styles.viewTexts}>
          <Text style={styles.text}>Gostei muito!</Text>
          <Text style={styles.text}>Incrível</Text>
        </View>

        <Text style={styles.text}>Recomendarei para meus amigos!</Text>
      </View>
    </View>
  );
};

export { CreateComment };
