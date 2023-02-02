import React, { FC, ReactNode } from "react";
import { Text } from "react-native";
import { styles } from "./style";

interface ITitleComponents {
  children: ReactNode;
}

const TitleComponents: FC<ITitleComponents> = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

export { TitleComponents };
