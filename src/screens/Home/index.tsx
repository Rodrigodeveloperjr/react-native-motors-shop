import { ListMotorcycles } from "../../components/ListMotorcycles";
import { ListAuctions } from "../../components/ListAuctions";
import { ListCars } from "../../components/ListCars";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ScrollView, View } from "react-native";
import { styles } from "./style";
import { useRef } from "react";
import { ModalBackground } from "../../components/ModalBackground";
import { ModalSuccessRegister } from "../../components/ModalSuccessRegister";

const Home = () => {
  const ref = useRef<ScrollView>(null);
  function scroll() {
    ref.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }
  return (
    <>
      <Header />
      <ScrollView ref={ref}>
        <Banner />

        <View style={styles.main}>
          <ListAuctions />
          <ListCars />
          <ListMotorcycles />
        </View>

        <Footer buttonScroll={scroll} />
      </ScrollView>
    </>
  );
};

export { Home };
