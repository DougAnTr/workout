import { Button, Text, View } from 'react-native';
import { cleanup, fireEvent, render, screen } from '../../utils/test-utils';
import { IModalContext, ModalContext, ModalRoot } from '../Modal/Root';
import { ModalContent } from '../Modal/Content';
import { ModalTrigger } from '../Modal/Trigger';
import { useContext } from 'react';
import Modal from '../Modal';

const defaultModalContextValue = {
  open: false,
  toggle: jest.fn(),
} as IModalContext;

function TestModalRootContextConsumer() {
  const { open, toggle } = useContext(ModalContext);

  return (
    <>
      <Text>{open ? 'Open' : 'Closed'}</Text>
      <Button title='Toggle' onPress={toggle} />
    </>
  );
}

describe('Modal', () => {
  afterEach(() => {
    cleanup();
  });

  describe('renders', () => {
    it('should have a root, content and trigger components', () => {
      expect(Modal).toHaveProperty('Root');
      expect(Modal).toHaveProperty('Content');
      expect(Modal).toHaveProperty('Trigger');
    });
  });

  describe('ModalRoot', () => {
    it('should render the children', () => {
      render(
        <ModalRoot>
          <View testID='modal-root-children' />
        </ModalRoot>,
      );

      expect(screen.getByTestId('modal-root-children')).toBeTruthy();
    });

    it('should pass down ModalContext', () => {
      render(
        <ModalRoot>
          <TestModalRootContextConsumer />
        </ModalRoot>,
      );

      expect(screen.getByText('Closed')).toBeTruthy();
    });

    it('should change open state when toggle is called', () => {
      render(
        <ModalRoot>
          <TestModalRootContextConsumer />
        </ModalRoot>,
      );

      expect(screen.getByText('Closed')).toBeTruthy();

      fireEvent.press(screen.getByText('Toggle'));

      expect(screen.getByText('Open')).toBeTruthy();
    });
  });

  describe('ModalContent', () => {
    it('should render the children when modal open state is true', () => {
      render(
        <ModalContext.Provider
          value={{ ...defaultModalContextValue, open: true }}
        >
          <ModalContent>
            <View testID='modal-content-children' />
          </ModalContent>
        </ModalContext.Provider>,
      );

      expect(screen.getByTestId('modal-content-children')).toBeTruthy();
    });

    it('children should not be visible if modal open state is false', () => {
      render(
        <ModalContext.Provider value={defaultModalContextValue}>
          <ModalContent>
            <View testID='modal-content-children' />
          </ModalContent>
        </ModalContext.Provider>,
      );

      expect(screen.queryByTestId('modal-content-children')).not.toBeTruthy();
    });
  });

  describe('ModalTrigger', () => {
    it('should render the children', () => {
      render(
        <ModalTrigger>
          <View testID='modal-trigger-children' />
        </ModalTrigger>,
      );

      expect(screen.getByTestId('modal-trigger-children')).toBeTruthy();
    });

    it('should call toggle when pressed', () => {
      render(
        <ModalContext.Provider value={defaultModalContextValue}>
          <ModalTrigger testID='modal-trigger' />
        </ModalContext.Provider>,
      );

      fireEvent.press(screen.getByTestId('modal-trigger'));

      expect(defaultModalContextValue.toggle).toHaveBeenCalled();
    });
  });
});
