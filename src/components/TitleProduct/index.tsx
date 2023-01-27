import { Text } from "react-native";
import { styles } from "./style";
import React from "react";

interface ITitleProduct {
  title: string;
}

const TitleProduct = ({ title }: ITitleProduct) => (
  <Text style={styles.title} numberOfLines={1}>
    {title}
  </Text>
);

export { TitleProduct };
