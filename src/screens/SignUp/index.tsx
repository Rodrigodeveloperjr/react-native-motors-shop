import { FormSignUp } from "../../components/FormSignUp";
import { Header } from "../../../src/components/Header";
import { Footer } from "../../../src/components/Footer";
import { ScrollView, View } from "react-native";
import { styles } from "../SignIn/style";

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
