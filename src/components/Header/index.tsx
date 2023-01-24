import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/Motors_shop.png")}
        />
        <Text style={styles.menu} onPress={() => menu ? setMenu(false) : setMenu(true)}>
          <Image
            source={menu ? require("../../../assets/xmark.png") : require("../../../assets/bars.png")}
          />
        </Text>
      </View>
      {menu && (
        <View style={styles.navBarNotLogged}>
          <View style={styles.vieNavwNotLogged}>
            <Text style={styles.textLink}>Carros</Text>
            <Text style={styles.textLink}>Motos</Text>
            <Text style={styles.textLink}>Leiloẽs</Text>
          </View>
          <View style={styles.viewDivNotLogged}>
            <Text style={styles.textLink}>Fazer login</Text>

            <View style={styles.buttonWhite}>
              <Text style={styles.buttonWhiteText}>Cadastrar</Text>
            </View>
          </View>
        </View>
      )}
    </>
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
    width: 20,
    height: 20,
  },
  navBarNotLogged: {
    width: 374,
    height: 420,
    position: "absolute",
    backgroundColor: "#FFFFFF",
    zIndex: 10,
    elevation: 10,
    marginTop: 105
  },
  vieNavwNotLogged: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingRight: 16,
    paddingLeft: 16,
    borderBottomColor: "#DEE2E6",
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: 236,
  },
  viewDivNotLogged: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingRight: 12,
    paddingLeft: 12,
    height: 184,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  textLink: {
    color: "#495057",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 28,
  },
  buttonWhite: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 28,
    paddingRight: 28,
    width: 335,
    height: 48,
    borderWidth: 1.5,
    borderColor: "#ADB5BD",
    borderRadius: 4,
  },
  buttonWhiteText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#0B0D0D",
    textAlign: "center",
  },
});
