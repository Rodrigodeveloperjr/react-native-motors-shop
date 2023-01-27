import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: 312,
    height: 350,
    marginRight: 12,
  },
  image: {
    width: 312,
    height: 152,
    backgroundColor: "#E9ECEF",
    borderWidth: 2,
    borderColor: "#E9ECEF",
    resizeMode: "contain",
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,
    color: "#212529",
    paddingTop: 15,
    paddingBottom: 15,
  },
  description: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    color: "#495057",
    height: 48,
  },
  viewKmYearAndPrice: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewKmAndYear: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  kmAndYear: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#EDEAFD",
    borderRadius: 4,
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    color: "#4529E6",
    marginRight: 10,
  },
  price: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,
    color: "#212529",
  },
});

export { styles };
