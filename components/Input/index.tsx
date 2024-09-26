import React, { ComponentProps, forwardRef } from "react";
import { TextInput } from "react-native";

type InputProps = Omit<ComponentProps<typeof TextInput>, 'ref'>;

const Input = forwardRef<TextInput, InputProps>(
  (props, ref) => {
    return (
      <TextInput
        {...props}
        ref={ref}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input }
