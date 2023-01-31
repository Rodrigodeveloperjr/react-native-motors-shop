import { Text, View } from "react-native";
import { styles } from "./style";

interface IAvatarUserProps {
  username: string;
}

const AvatarUserAuction = ({ username }: IAvatarUserProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {username.split(" ").length == 1 ? (
          <Text style={styles.letter}>{username[0]}</Text>
        ) : (
          <>
            <Text style={styles.letter}>{username[0]}</Text>
            <Text style={styles.letter}>{username.split(" ")[1][0]}</Text>
          </>
        )}
      </View>

      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

export { AvatarUserAuction };
