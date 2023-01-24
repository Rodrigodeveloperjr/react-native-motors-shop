import { Image, Text, View } from "react-native";
import { styles } from "./style";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/Motors_shop_footer.png")}
      />
      <Text style={styles.text}>© 2022 - Todos os direitos reservados.</Text>
      <Text style={styles.link} onPress={() => (window.scrollY = 0)}>
        ^
      </Text>
    </View>
  );
};

export { Footer };
