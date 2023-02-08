import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2000,
    width: "100%",
    height: "100%",
    
    paddingTop: 120,
    paddingRight: 15,
    paddingLeft: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
})

export { styles }
