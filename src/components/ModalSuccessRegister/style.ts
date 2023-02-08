import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 347,
    height: 287,

    backgroundColor: "#FFFFFF",
    borderRadius: 8,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    paddingBottom: 30,
    paddingLeft: 24,
    paddingRight: 24,
  },
  content: {
    width: "100%",
    maxWidth: 297,
    height: 149,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,

    color: "#212529",
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 28,

    color: "#495057",
  },
  button: {
    width: "100%",
    maxWidth: 132,
    height: 38,

    backgroundColor: "#4529E6",
    borderWidth: 1.5,
    borderColor: "#4529E6",

    borderRadius: 4,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#FFFFFF",
  },
});

export { styles };
