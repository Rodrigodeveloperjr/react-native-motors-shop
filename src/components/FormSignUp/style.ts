import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    paddingBottom: 44,
    paddingLeft: 28,
    paddingRight: 28,
    maxWidth: 343,
    backgroundColor: "#FDFDFD",
    borderRadius: 4,
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 30,
  },
  subtitle: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    paddingTop: 30,
    paddingBottom: 10,
  },
  viewButtons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 105,
  },
  buttonBlue: {
    backgroundColor: "#4529E6",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 28,
    paddingRight: 28,
    height: 48,
    borderWidth: 1.5,
    borderColor: "#4529E6",
    borderRadius: 4,
  },
  buttonBlueFinally: {
    backgroundColor: "#4529E6",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 28,
    paddingRight: 28,
    height: 48,
    borderWidth: 1.5,
    borderColor: "#4529E6",
    borderRadius: 4,
    marginTop: 15,
  },
  buttonBlueText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  buttonWhite: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 28,
    paddingRight: 28,
    height: 48,
    borderWidth: 1.5,
    borderColor: "#ADB5BD",
    borderRadius: 4,
  },
  buttonWhiteText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#0B0D0D",
    textAlign: "center",
  },
});

export { styles };
