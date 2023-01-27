import { Image, Text, View } from "react-native";
import { AvatarUser } from "../AvatarUser";
import { styles } from "./style";

const Product = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.pinimg.com/originals/05/02/da/0502da25d3a9640ad861574a516a4611.png",
        }}
      />

      <View>
        <Text style={styles.title} numberOfLines={1}>
          Product title stays here - max 1 line Product title stays here -
          maximum 1 line
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </Text>

        <AvatarUser username="Samuel Leão" />

        <View style={styles.viewKmYearAndPrice}>
          <View style={styles.viewKmAndYear}>
            <Text style={styles.kmAndYear}>0 KM</Text>
            <Text style={styles.kmAndYear}>2019</Text>
          </View>

          <Text style={styles.price}>R$ 00.000,00</Text>
        </View>
      </View>
    </View>
  );
};

export { Product };
