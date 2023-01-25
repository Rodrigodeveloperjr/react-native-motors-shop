import { Text, View } from "react-native";
import { EmptyMessage } from "../EmptyMessage";
import { styles } from "../ListCars/style";

const ListMotorcycles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Motos</Text>
      <View style={styles.menu}>
        <EmptyMessage message="Não há motos" />
      </View>
    </View>
  );
};

export { ListMotorcycles };
