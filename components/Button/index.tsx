import { PropsWithChildren, forwardRef } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export const Button: React.FC<PropsWithChildren<TouchableOpacityProps>> = forwardRef<TouchableOpacity, PropsWithChildren<TouchableOpacityProps>>(
  ({ children, ...props }, ref) => {
    return (
      <TouchableOpacity ref={ref} {...props}>
        <Text>{children}</Text>
      </TouchableOpacity>
    );
  }
);

Button.displayName = 'Button';
