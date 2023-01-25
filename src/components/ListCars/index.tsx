import { Text, View } from "react-native";
import { EmptyMessage } from "../EmptyMessage";
import { styles } from "./style";

const ListCars = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Carros</Text>
      <View style={styles.menu}>
        <EmptyMessage message="Não há carros" />
      </View>
    </View>
  );
};

export { ListCars };
