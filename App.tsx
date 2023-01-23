import { Header } from "./src/components/Header";
import { StyleSheet, View } from "react-native";
import { Footer } from "./src/components/Footer";
import { FormSignIn } from "./src/components/FormSignIn";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      
      <View style={styles.main}>
        <FormSignIn />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    backgroundColor: "#E9ECEF",
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 10,
    paddingRight: 10,
  }
});
