import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Auction } from "../Auction";
import { styles } from "../ListCars/style";

const ListAuctions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Leilão</Text>
      <ScrollView horizontal={true} style={styles.menu}>
        <Auction />
        <Auction />
        <Auction />
      </ScrollView>
    </View>
  );
};

export { ListAuctions };
