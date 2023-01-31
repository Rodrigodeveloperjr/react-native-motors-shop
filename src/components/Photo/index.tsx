import { Image, View } from "react-native";
import { styles } from "./style";
import React from "react";

const Photo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/05/02/da/0502da25d3a9640ad861574a516a4611.png",
        }}
        style={styles.image}
      />
    </View>
  );
};

export { Photo };
