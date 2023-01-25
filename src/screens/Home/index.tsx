import { ScrollView, View } from "react-native";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListCars } from "../../components/ListCars";
import { ListMotorcycles } from "../../components/ListMotorcycles";
import { styles } from "./style";

const Home = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <Banner />

        <View style={styles.main}>
          <ListCars />
          <ListMotorcycles />
        </View>

        <Footer />
      </ScrollView>
    </>
  );
};

export { Home };
