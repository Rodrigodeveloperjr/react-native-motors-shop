import { FormSignIn } from "../../../src/components/FormSignIn";
import { Header } from "../../../src/components/Header";
import { Footer } from "../../../src/components/Footer";
import { ScrollView, View } from "react-native";
import { styles } from "./style";

const SignIn = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.main}>
        <FormSignIn />
      </View>

      <Footer />
    </ScrollView>
  );
};

export { SignIn };
