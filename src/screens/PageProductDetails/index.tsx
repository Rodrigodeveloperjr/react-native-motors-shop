import { Header } from "../../../src/components/Header";
import { Footer } from "../../../src/components/Footer";
import { ScrollView, View } from "react-native";
import { styles } from "./style";
import { Photo } from "../../components/Photo";
import { DetailsProduct } from "../../components/DetailsProduct";

const PageProductDetails = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.containerBlue}></View>

        <View style={styles.containerWhite}>
          <Photo />
          <DetailsProduct />
        </View>

        <Footer />
      </ScrollView>
    </>
  );
};

export { PageProductDetails };
