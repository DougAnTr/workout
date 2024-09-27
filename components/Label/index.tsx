import React, { ComponentProps, PropsWithChildren, forwardRef } from "react";
import { Text, View } from "react-native";

type TLabel = ComponentProps<typeof View> & {
  text: string;
}

export const Label = forwardRef<View, PropsWithChildren<TLabel>>(({ children, text, ...props }, ref) => {
  return (
    <View ref={ref} {...props}>
      <Text>{text}</Text>
      {children}
    </View>
  )
});

Label.displayName = 'Label';
