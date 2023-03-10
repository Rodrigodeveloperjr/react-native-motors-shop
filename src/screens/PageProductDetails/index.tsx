import { DetailsProduct } from "../../components/DetailsProduct";
import { Description } from "../../components/Description";
import { Header } from "../../../src/components/Header";
import { Footer } from "../../../src/components/Footer";
import { Gallery } from "../../components/Gallery";
import { Seller } from "../../components/Seller";
import { ScrollView, View } from "react-native";
import { Photo } from "../../components/Photo";
import { styles } from "./style";
import { ListComments } from "../../components/ListComments";
import { CreateComment } from "../../components/CreateComment";

const PageProductDetails = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.containerBlue}></View>

        <View style={styles.containerWhite}>
          <Photo />
          <DetailsProduct />
          <Description />
          <Gallery />
          <Seller />
          <ListComments />
          <CreateComment />
        </View>

        <Footer />
      </ScrollView>
    </>
  );
};

export { PageProductDetails };
