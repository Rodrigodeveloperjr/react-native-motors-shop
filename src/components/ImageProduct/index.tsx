import { Image } from "react-native";
import { styles } from "./style";
import React from "react";

interface IimageProduct {
  url: string;
  alt: string;
}

const ImageProduct = ({ url, alt }: IimageProduct) => (
  <Image
    style={styles.image}
    source={{
      uri: url,
    }}
    accessibilityLabel={alt}
  />
);

export { ImageProduct };
