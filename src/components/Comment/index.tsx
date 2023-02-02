import React from "react";
import { Text, View } from "react-native";
import { AvatarUserProduct } from "../AvatarUserProduct";
import { styles } from "./style";

const Comment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AvatarUserProduct username="Rodrigo Silva" />
        <Text style={styles.circle}></Text>
        <Text style={styles.text}>há 3 dias</Text>
      </View>

      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </View>
  );
};

export { Comment };
