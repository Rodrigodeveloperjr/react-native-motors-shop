import { Text, View } from "react-native";
import { styles } from "./style";

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Velocidade e experiência em um lugar feito para você
        </Text>
        <Text style={styles.subtitle}>
          Um ambiente feito para você explorar o seu melhor
        </Text>

        <View style={styles.viewButtons}>
          <Text style={styles.button}>Carros</Text>
          <Text style={styles.button}>Motos</Text>
        </View>
      </View>
    </View>
  );
};

export { Banner };
