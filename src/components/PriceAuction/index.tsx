import { Text } from "react-native";
import { styles } from "./style";
import React from "react";

interface IPriceProduct {
  price: string;
}

const PriceAuction = ({ price }: IPriceProduct) => (
  <Text style={styles.price}>
    {price.includes("R$") ? price : `R$ ${price}`}
  </Text>
);

export { PriceAuction };
