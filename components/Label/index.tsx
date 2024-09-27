import React, { PropsWithChildren } from "react";
import { Text, View } from "react-native";

type TLabel = {
  text: string;
}

export const Label: React.FC<PropsWithChildren<TLabel>> = ({ children, text }: PropsWithChildren<TLabel>) => {

  return (
    <View>
      <Text>{text}</Text>
      {children}
    </View>
  )
}
