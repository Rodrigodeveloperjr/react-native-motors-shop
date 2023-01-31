import { Text, View } from "react-native";
import React from "react";
import { KmProduct } from "../KmProduct";
import { YearProduct } from "../YearProduct";
import { PriceProduct } from "../PriceProduct";
import { styles } from "./style";

const DetailsProduct = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Text style={styles.title} numberOfLines={3}>
        Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
      </Text>

      <View style={styles.viewKmYearAndPrice}>
        <View style={styles.viewKmAndYear}>
          <KmProduct km={0} />
          <YearProduct year={2013} />
        </View>

        <PriceProduct price="00.000,00" />
      </View>
      </View>
    </View>
  );
};

export { DetailsProduct };
