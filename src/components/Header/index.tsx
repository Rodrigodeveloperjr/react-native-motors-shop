import { Image, Text, View } from "react-native";
import { useState } from "react";
import { styles } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { IRoutes } from "../../routes";
import { Link, useNavigation } from "@react-navigation/native";

type IHome = StackNavigationProp<IRoutes, "Home">;

const Header = () => {
  const navigation = useNavigation<IHome>();

  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <View style={styles.container}>
        <Link
          style={styles.link}
          to={{ screen: "Home" }}
          onPress={() => setMenu(false)}
        >
          <Image
            style={styles.logo}
            source={require("../../../assets/Motors_shop.png")}
          />
        </Link>
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
            <Link
              to={{ screen: "Home" }}
              style={styles.textLink}
              onPress={() => setMenu(false)}
            >
              Carros
            </Link>
            <Link
              to={{ screen: "Home" }}
              style={styles.textLink}
              onPress={() => setMenu(false)}
            >
              Motos
            </Link>
            <Link
              to={{ screen: "Home" }}
              style={styles.textLink}
              onPress={() => setMenu(false)}
            >
              Leiloẽs
            </Link>
          </View>
          <View style={styles.viewDivNotLogged}>
            <Link
              to={{ screen: "SignIn" }}
              style={styles.textLink}
              onPress={() => setMenu(false)}
            >
              Fazer login
            </Link>

            <Link
              to={{ screen: "SignUp" }}
              style={styles.buttonWhite}
              onPress={() => setMenu(false)}
            >
              Cadastrar
            </Link>
          </View>
        </View>
      )}
    </>
  );
};

export { Header };
