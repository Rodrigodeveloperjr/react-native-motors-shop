import { View } from "react-native";
import React, { FC, ReactNode } from "react";
import { styles } from "./style"

interface IModalBackground {
  children: ReactNode;
}

const ModalBackground: FC<IModalBackground> = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export { ModalBackground };
