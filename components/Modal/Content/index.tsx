import { PropsWithChildren, useContext } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { ModalContext } from '../Root';

export const ModalContent: React.FC<PropsWithChildren> = ({ children }) => {
  const { open, toggle } = useContext(ModalContext);

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={open}
      onRequestClose={toggle}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
