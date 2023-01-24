import { Text, TextInput } from "react-native";
import { styles } from "./style";

const TextArea = () => {
  return (
    <>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        placeholder="Digitar descrição"
        keyboardType="default"
        style={styles.input}
        placeholderTextColor="#868E96"
      />
    </>
  );
};

export { TextArea };
