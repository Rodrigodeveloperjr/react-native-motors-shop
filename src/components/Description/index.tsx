import { TitleComponents } from "../TitleComponents";
import { Text, View } from "react-native";
import { styles } from "./style";
import React from "react";

const Description = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TitleComponents>Description</TitleComponents>

        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>
    </View>
  );
};

export { Description };
