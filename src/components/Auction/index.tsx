import { DescriptionAuction } from "../DescriptionAuction";
import { AvatarUserAuction } from "../AvatarUserAuction";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { PriceAuction } from "../PriceAuction";
import { TitleAuction } from "../TitleAuction";
import { YearProduct } from "../YearProduct";
import { KmProduct } from "../KmProduct";
import { styles } from "./style";
import React from "react";

const Auction = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.pinimg.com/originals/05/02/da/0502da25d3a9640ad861574a516a4611.png",
        }}
      />
      <View style={styles.background}>
        <View style={styles.viewClock}>
          <Image source={require("../../../assets/Group_13.png")} />

          <Text style={styles.clockText}>01:58:00</Text>
        </View>

        <View style={styles.viewDescription}>
          <TitleAuction title="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes" />

          <DescriptionAuction description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..." />

          <AvatarUserAuction username="Rodrigo Silva" />

          <View style={styles.viewYearAndKm}>
            <KmProduct km={100} />
            <YearProduct year={2019} />
          </View>

          <PriceAuction price="78.500,00" />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar página do leilão</Text>

        <Image source={require("../../../assets/Group_29.png")} />
      </TouchableOpacity>
    </View>
  );
};

export { Auction };
