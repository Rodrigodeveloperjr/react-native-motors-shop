import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 36,
    paddingLeft: 26,
    paddingRight: 26,

    width: "100%",
    maxWidth: 351,
    height: 414,

    backgroundColor: "#FDFDFD",
    borderRadius: 4,

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    marginTop: 50,
  },
  content: {
    height: 72,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    marginTop: 30,
  },
  input: {
    width: "100%",
    maxWidth: 284,
    height: 128,

    borderWidth: 1.5,
    borderColor: "#E9ECEF",
    borderRadius: 4,

    padding: 20,
  },
  button: {
    width: 108,
    height: 42,

    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,

    backgroundColor: "#4529E6",
    borderWidth: 1.5,
    borderColor: "#4529E6",
    borderRadius: 4,

    marginTop: 25,
    textAlign: "center",
    
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {

    fontWeight: "600",
    fontSize: 14,
    color: "#FFFFFF",
  },
  viewTexts: {
    width: 175,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    backgroundColor: "#E9ECEF",
    borderRadius: 24,

    paddingLeft: 12,
    paddingRight: 12,

    fontWeight: "500",
    fontSize: 12,
    lineHeight: 24,

    color: "#868E96",
  },
});

export { styles };
