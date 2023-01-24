import { Image, Text, View } from "react-native";
import { useState } from "react";
import { styles } from "./style";

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/Motors_shop.png")}
        />
        <Text
          style={styles.menu}
          onPress={() => (menu ? setMenu(false) : setMenu(true))}
        >
          <Image
            source={
              menu
                ? require("../../../assets/xmark.png")
                : require("../../../assets/bars.png")
            }
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
