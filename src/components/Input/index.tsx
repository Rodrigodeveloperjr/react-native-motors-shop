import { KeyboardTypeOptions, Text, TextInput } from "react-native";
import { styles } from "./style";

interface InputProps {
  label: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions | undefined;
}

const Input = ({ label, placeholder, keyboardType }: InputProps) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={styles.input}
        placeholderTextColor="#868E96"
      />
    </>
  );
};

export { Input };
