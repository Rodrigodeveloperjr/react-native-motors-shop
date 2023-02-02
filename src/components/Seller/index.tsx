import { TitleComponents } from "../TitleComponents";
import { Text, View } from "react-native";
import { styles } from "./style";
import React from "react";

const Seller = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.circle}>
          <Text style={styles.circleName}>RS</Text>
        </View>

        <TitleComponents>Rodrigo Silva</TitleComponents>

        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>

        <Text style={styles.button}>Ver todos anuncios</Text>
      </View>
    </View>
  );
};

export { Seller };
