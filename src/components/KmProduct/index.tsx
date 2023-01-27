import { Text } from "react-native";
import { styles } from "./style";
import React from "react";

interface IKmProduct {
  km: number;
}

const KmProduct = ({ km }: IKmProduct) => (
  <Text style={styles.km}>{km} KM</Text>
);

export { KmProduct };
