import { TitleComponents } from "../TitleComponents";
import { Image, View } from "react-native";
import { styles } from "./style";
import React from "react";

const Gallery = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TitleComponents>Fotos</TitleComponents>

        <View style={styles.viewGallery}>
          <View style={styles.containerOfViews}>
            <View style={styles.contentOfViews}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/originals/05/02/da/0502da25d3a9640ad861574a516a4611.png",
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.contentOfViews}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/originals/05/02/da/0502da25d3a9640ad861574a516a4611.png",
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.contentOfViews}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/originals/05/02/da/0502da25d3a9640ad861574a516a4611.png",
                }}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.containerOfViews}>
            <View style={styles.contentOfViews}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/originals/05/02/da/0502da25d3a9640ad861574a516a4611.png",
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.contentOfViews}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/originals/05/02/da/0502da25d3a9640ad861574a516a4611.png",
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.contentOfViews}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/originals/05/02/da/0502da25d3a9640ad861574a516a4611.png",
                }}
                style={styles.image}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export { Gallery };
