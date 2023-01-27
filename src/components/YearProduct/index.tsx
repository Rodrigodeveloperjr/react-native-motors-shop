import { Text } from "react-native";
import { styles } from "./style";
import React from "react";

interface IYearProduct {
  year: number;
}

const YearProduct = ({ year }: IYearProduct) => (
  <Text style={styles.year}>{year}</Text>
);

export { YearProduct };
