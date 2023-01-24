import { Header } from "./src/components/Header";
import { ScrollView, StyleSheet, View } from "react-native";
import { Footer } from "./src/components/Footer";
import { FormSignIn } from "./src/components/FormSignIn";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.main}>
        <FormSignIn />
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
