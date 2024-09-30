import React, { ComponentProps, ComponentRef, forwardRef } from "react";
import { View } from "react-native";
import { Input } from "../Input";
import { Button } from "../Button";
import Icon from 'react-native-vector-icons/FontAwesome';

type NumberInputProps = Omit<ComponentProps<typeof Input>, 'inputMode' | 'keyboardType'> & {
  min?: number;
  max?: number;
};

export const NumberInput = forwardRef<ComponentRef<typeof Input>, NumberInputProps>(({ testID, onChangeText, value, min, max, ...props }, ref) => {
  const [inputValue, setInputValue] = React.useState(value || '');

  const handleChangeText = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setInputValue(numericValue);
    if (onChangeText) {
      onChangeText(numericValue);
    }
  };

  const handleIncrease = () => {
    const currentValue = parseInt(inputValue) || 0;

    if (!currentValue && min !== undefined) {
      handleChangeText(min.toString());
      return;
    }

    if (max !== undefined && currentValue >= max) {
      return;
    }

    const newValue = (currentValue + 1).toString();
    handleChangeText(newValue);
  };

  const handleDecrease = () => {
    const currentValue = parseInt(inputValue) || 0;

    if (!currentValue && min !== undefined) {
      handleChangeText(min.toString());
      return;
    }

    if (min !== undefined && currentValue <= min) {
      return;
    }

    const newValue = (currentValue - 1).toString();
    handleChangeText(newValue);
  };


  return (
    <View testID={testID}>
      <Input {...props} inputMode="numeric" keyboardType="number-pad" ref={ref} value={inputValue} onChangeText={handleChangeText} />

      <Button testID="decrease-button" onPress={handleDecrease}>
        <Icon testID="decrease-icon" name="caret-down" size={8} />
      </Button>
      <Button testID="increase-button" onPress={handleIncrease}>
        <Icon testID="increase-icon" name="caret-up" size={8} />
      </Button>
    </View>
  );
});

NumberInput.displayName = 'NumberInput';
