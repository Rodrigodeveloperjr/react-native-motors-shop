import { FormSignUp } from "../../components/FormSignUp";
import { Header } from "../../../src/components/Header";
import { Footer } from "../../../src/components/Footer";
import { ScrollView, View } from "react-native";

const SignUp = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.main}>
        <FormSignUp />
      </View>

      <Footer />
    </ScrollView>
  );
};

export { SignUp };
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    fontFamily: "Lexend",
  },
  main: {
    backgroundColor: "#E9ECEF",
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export { styles };
