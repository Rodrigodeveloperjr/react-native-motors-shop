import { Text } from "react-native";
import { styles } from "./style";
import React from "react";

interface IDescriptionAuction {
  description: string;
}

const DescriptionAuction = ({ description }: IDescriptionAuction) => (
  <Text style={styles.description} numberOfLines={2}>
    {description}
  </Text>
);

export { DescriptionAuction };
