import { StyleSheet } from "react-native";

const colors = [
  "#E34D8C",
  "#C04277",
  "#7D2A4D",
  "#7000FF",
  "#6200E3",
  "#36007D",
  "#349974",
  "#2A7D5F",
  "#153D2E",
  "#6100FF",
  "#5700E3",
  "#30007D",
];

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
  },
  content: {
    width: 32,
    height: 32,
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    borderRadius: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  letter: {
    fontWeight: "500",
    fontSize: 14,
    color: "#FFFFFF",
  },
  username: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    color: "#FFFFFF",
    paddingLeft: 10,
  },
});

export { styles };
