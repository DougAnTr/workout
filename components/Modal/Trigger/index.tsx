import { PropsWithChildren, useContext } from 'react';
import { ModalContext } from '../Root';
import { Pressable } from 'react-native';

type ModalTriggerProps = {
  testID?: string;
};

export const ModalTrigger: React.FC<PropsWithChildren<ModalTriggerProps>> = ({
  children,
  testID,
}) => {
  const { toggle } = useContext(ModalContext);

  return (
    <Pressable testID={testID} onPress={() => toggle()}>
      {children}
    </Pressable>
  );
};
