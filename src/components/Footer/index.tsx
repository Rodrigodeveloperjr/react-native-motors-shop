import { Image, StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/Motors_shop_footer.png")}
      />
      <Text style={styles.text}>© 2022 - Todos os direitos reservados.</Text>
      <Text style={styles.link} onPress={() => window.scrollY = 0}>^</Text>
    </View>
  );
};

export { Footer };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0D0D",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft: 20,
    paddingRight: 20,
    height: 310.34,
  },
  logo: {
    width: 153.02,
    height: 26.34,
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
  },
  link: {
    width: 53,
    height: 50,
    backgroundColor: "#212529",
    borderRadius: 4,
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
    lineHeight: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 20
  },
});
