import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 283,
    height: 212,

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    marginTop: 20,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 4,
    height: 4,
    borderRadius: 150,

    marginLeft: 8,
    marginRight: 10,
    backgroundColor: "#ADB5BD",
  },
  text: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 24,

    color: "#868E96",
  },
  description: {
    width: "100%",
    maxWidth: 283,
    height: 168,

    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,

    color: "#495057",
    textAlign: "left",
  },
});

export { styles };
