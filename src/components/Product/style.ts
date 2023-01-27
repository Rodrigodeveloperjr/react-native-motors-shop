import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: 312,
    height: 350,
    marginRight: 12,
  },
  viewKmYearAndPrice: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewKmAndYear: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export { styles };
