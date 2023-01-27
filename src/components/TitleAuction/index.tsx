import { Text } from "react-native";
import { styles } from "./style";
import React from "react";

interface ITitleProduct {
  title: string;
}

const TitleAuction = ({ title }: ITitleProduct) => (
  <Text style={styles.title} numberOfLines={2}>
    {title}
  </Text>
);

export { TitleAuction };
