import { ScrollView, View } from "react-native";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListCars } from "../../components/ListCars";
import { ListMotorcycles } from "../../components/ListMotorcycles";
import { styles } from "./style";
import { useRef } from "react";



const Home = () => {
  const ref  = useRef<ScrollView>(null)
  function scroll() {
    ref.current?.scrollTo({
      y: 0,
      animated: true,
    })
  }
  return (
    <>
      <Header />
      <ScrollView ref={ref}>
        <Banner />

        <View style={styles.main}>
          <ListCars />
          <ListMotorcycles />
        </View>

        <Footer buttonScroll={scroll}/>
      </ScrollView>
    </>
  );
};

export { Home };
