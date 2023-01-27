import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 328,
    height: 496,
    marginRight: 8,
  },
  image: {
    position: "absolute",
    left: 21,
    top: 116,
    width: 287,
    height: 155.4,
  },
  background: {
    backgroundColor:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%)",
    paddingLeft: 22.5,
    paddingRight: 22.5,
    paddingTop: 30,
    paddingBottom: 30,
    
  },
  viewClock: {
    width: 123,
    height: 36,
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  clockText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    color: "#212529",
  },
  viewDescription: {
    height: 298,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  button: {
    height: 61,
    backgroundColor: "#4529E6",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    paddingLeft: 18,
    paddingRight: 18,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#FFFFFF",
  },
  viewYearAndKm: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export { styles };
