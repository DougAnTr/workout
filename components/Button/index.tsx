import { PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native";

export function Button({ children }: PropsWithChildren) {

  return (
    <TouchableOpacity>{children}</TouchableOpacity>
  )
}
