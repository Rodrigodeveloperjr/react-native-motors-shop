import { ScrollView, Text, View } from "react-native";
import { EmptyMessage } from "../EmptyMessage";
import { Product } from "../Product";
import { styles } from "./style";

const ListCars = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Carros</Text>
      <ScrollView horizontal={true} style={styles.menu}>
        <Product />
        <Product />
        <Product />
      </ScrollView>
    </View>
  );
};

export { ListCars };
