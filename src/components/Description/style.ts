import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 351,
    height: 325,
    backgroundColor: "#FDFDFD",
    borderRadius: 4,

    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 28,
    paddingRight: 28,

    marginTop: 25,
  },
  content: {
    height: 241,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  description: {
    width: "100%",
    maxWidth: 295,
    height: 196,

    fontWeight: "400",
    fontSize: 16,
    lineHeight: 28,

    color: "#495057",
  },
});

export { styles };
