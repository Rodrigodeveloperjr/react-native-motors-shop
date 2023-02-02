import { TitleComponents } from "../TitleComponents";
import { ScrollView, View } from "react-native";
import { Comment } from "../Comment";
import { styles } from "./style";

const ListComments = () => {
  return (
    <View style={styles.container}>
      <TitleComponents>Comentários</TitleComponents>
      <ScrollView style={styles.menu}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </ScrollView>
    </View>
  );
};

export { ListComments };
