import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5126EA",
    height: 623,
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    height: 396,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "600",
    fontSize: 32,
    lineHeight: 40,
    textAlign: "center",
    color: "#FDFDFD",
  },
  subtitle: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 28,
    textAlign: "center",
    color: "#F8F9FA",
  },
  viewButtons: {
    height: 117,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 28,
    paddingRight: 28,
    width: "100%",
    height: 48,
    borderWidth: 1.5,
    borderColor: "#FDFDFD",
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
    color: "#FDFDFD",
  },
  buttonTextBlack: {
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
    color: "#212529",
  },
});

export { styles };
