import { Image, StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/Motors_shop.png")}
      />
      <Image
        style={styles.menu}
        source={require("../../../assets/bars.png")}
      />
    </View>
  );
};

export { Header };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDFDFD",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#DEE2E6",
    paddingLeft: 16,
    paddingRight: 16,
    height: 80,
    marginTop: 25,
  },
  logo: {
    width: 153.02,
    height: 26.34,
  },
  menu: {
    width: 16,
    height: 16,
  },
});
