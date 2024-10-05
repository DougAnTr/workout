import React, { createContext, PropsWithChildren, useState } from 'react';
import { StyleSheet, View } from 'react-native';

export interface IModalContext {
  open: boolean;
  toggle: () => void;
}

export const ModalContext = createContext({} as IModalContext);

export const ModalRoot: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(prev => !prev);

  return (
    <ModalContext.Provider value={{ open, toggle }}>
      <View style={styles.container}>{children}</View>
    </ModalContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
