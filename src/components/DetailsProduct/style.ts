import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 351,
    height: 326.91,
    backgroundColor: "#FDFDFD",
    borderRadius: 4,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 15,
  },
  content: {
    width: "100%",
    maxWidth: 295,
    height: 224.91,

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 25,

    color: "#212529",
  },
  viewKmYearAndPrice: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 89.91,
    justifyContent: "space-between"
  },
  viewKmAndYear: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export { styles };
