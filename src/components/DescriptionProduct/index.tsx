import { Text } from "react-native";
import { styles } from "./style";
import React from "react";

interface IDescriptionProduct {
  description: string;
}

const DescriptionProduct = ({ description }: IDescriptionProduct) => (
  <Text style={styles.description} numberOfLines={2}>
    {description}
  </Text>
);

export { DescriptionProduct };
