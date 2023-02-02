import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 351,
    height: 398,

    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 28,
    paddingRight: 28,

    backgroundColor: "#FDFDFD",
    borderRadius: 4,

    marginTop: 50,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: 295,
    height: 294,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circle: {
    width: "100%",
    maxWidth: 77,
    height: 77,

    backgroundColor: "#4529E6",
    borderRadius: 150,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circleName: {
    fontWeight: "500",
    fontSize: 26.6538,
    lineHeight: 39,
    color: "#FFFFFF",
  },
  description: {
    width: "100%",
    maxWidth: 295,
    height: 84,

    fontWeight: "400",
    fontSize: 16,
    lineHeight: 28,

    color: "#495057",
    textAlign: "center",
  },
  button: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 28,
    paddingRight: 28,

    width: "100%",
    maxWidth: 206,
    height: 48,

    backgroundColor: "#0B0D0D",
    borderWidth: 1.5,
    borderColor: "#0B0D0D",
    borderRadius: 4,

    fontWeight: "600",
    fontSize: 16,
    color: "#FFFFFF",

    textAlign: "center",
  },
});

export { styles };
