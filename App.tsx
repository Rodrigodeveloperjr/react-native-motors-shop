import { Header } from "./src/components/Header";
import { StyleSheet, View } from "react-native";
import { Footer } from "./src/components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
