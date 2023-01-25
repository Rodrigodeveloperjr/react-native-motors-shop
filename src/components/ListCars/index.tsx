import { ScrollView, Text, View } from "react-native";
import { styles } from "./style";

const ListCars = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Carros</Text>
      <View style={styles.menu}>
        <Text style={styles.text}>Não há carros</Text>
      </View>
    </View>
  );
};

export { ListCars };
