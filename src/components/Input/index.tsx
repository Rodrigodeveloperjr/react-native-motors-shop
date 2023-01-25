import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

const Input = ({ label, error, ...inputProps }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
        {!!error && <Text style={styles.errorMessage}> - {error.message}</Text>}
      </Text>

      <TextInput
        style={styles.input}
        placeholderTextColor={"#868E96"}
        {...inputProps}
      />
    </View>
  );
};

export { Input };
