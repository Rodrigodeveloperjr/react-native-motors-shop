import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 16,

    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 56,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderTopRadius: 8,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,

    color: "#212529",
    textAlign: "left",
  },
});

export { styles };
