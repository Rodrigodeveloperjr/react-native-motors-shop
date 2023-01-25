import { Text, View } from "react-native";
import { styles } from "./style";

interface IEmptyMessage {
  message: string;
}

const EmptyMessage = ({ message }: IEmptyMessage) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export { EmptyMessage };
