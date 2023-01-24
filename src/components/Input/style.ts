import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 73,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 22.5,
  },
  label: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    color: "#212529",
  },
  input: {
    borderWidth: 2,
    borderColor: "#E9ECEF",
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4,
    height: 48,
    fontSize: 16,
  },
  borderError: {
    borderColor: "#CD2B31",
  },
  errorMessage: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    color: "#CD2B31",
  },
});

export { styles };
