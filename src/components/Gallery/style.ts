import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 351,
    height: 359,

    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 28,
    paddingRight: 28,

    backgroundColor: "#FDFDFD",
    borderRadius: 4,

    marginTop: 15,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  content: {
    height: 280,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  viewGallery: {
    width: "100%",
    maxWidth: 281,
    height: 230,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerOfViews: {
    width: "100%",
    maxWidth: 281,
    height: 90,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentOfViews: {
    width: "100%",
    maxWidth: 90,
    height: 90,

    paddingTop: 27,
    paddingBottom: 27,
    paddingLeft: 7,
    paddingRight: 7,

    backgroundColor: "#E9ECEF",
    borderRadius: 4,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginRight: 5,
  },
  image: {
    width: "100%",
    maxWidth: 94.22,
    height: 54.05,

    resizeMode: "contain",
  },
});

export { styles };
