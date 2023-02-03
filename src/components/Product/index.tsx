import { DescriptionProduct } from "../DescriptionProduct";
import { AvatarUserProduct } from "../AvatarUserProduct";
import { TitleProduct } from "../TitleProduct";
import { PriceProduct } from "../PriceProduct";
import { ImageProduct } from "../ImageProduct";
import { YearProduct } from "../YearProduct";
import { KmProduct } from "../KmProduct";
import { TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { IRoutes } from "../../routes";
import { useNavigation } from "@react-navigation/native";

type IPageProductDetails = StackNavigationProp<IRoutes, "ProductDetails">;

const Product = () => {
  const navigation = useNavigation<IPageProductDetails>();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("ProductDetails")}
    >
      <View style={styles.container}>
        <ImageProduct
          url="https://i.pinimg.com/originals/05/02/da/0502da25d3a9640ad861574a516a4611.png"
          alt="Product title stays here - max 1 line Product title stays here -
          maximum 1 line"
        />

        <View>
          <TitleProduct
            title="Product title stays here - max 1 line Product title stays here -
          maximum 1 line"
          />
          <DescriptionProduct
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem..."
          />

          <AvatarUserProduct username="Samuel Leão" />

          <View style={styles.viewKmYearAndPrice}>
            <View style={styles.viewKmAndYear}>
              <KmProduct km={0} />
              <YearProduct year={2019} />
            </View>

            <PriceProduct price="R$ 00.000,00" />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { Product };
