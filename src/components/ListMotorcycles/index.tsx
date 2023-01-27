import { ScrollView, Text, View } from "react-native";
import { EmptyMessage } from "../EmptyMessage";
import { styles } from "../ListCars/style";
import { Product } from "../Product";

const ListMotorcycles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Motos</Text>
      <ScrollView horizontal={true} style={styles.menu}>
        <Product />
        <Product />
        <Product />
      </ScrollView>
    </View>
  );
};

export { ListMotorcycles };
