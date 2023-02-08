import { Image, Text, View } from "react-native";
import { styles } from "./style";
import React from "react";

interface IHeaderModal {
  title: string;
}

const HeaderModal = ({ title }: IHeaderModal) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Image source={require("../../../assets/x.png")} />
    </View>
  );
};

export { HeaderModal };
