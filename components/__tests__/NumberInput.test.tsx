import { useState } from "react";
import { cleanup, fireEvent, render, screen } from "../../utils/test-utils"
import { NumberInput } from "../NumberInput"

function RenderNumberInput() {
  const [value, setValue] = useState('');

  return <NumberInput min={5} max={124} value={value} onChangeText={setValue} />
}

describe('NumberInput', () => {
  beforeEach(() => {
    render(<RenderNumberInput />)
  })

  afterEach(() => {
    cleanup();
  });

  describe('render ->', () => {
    it('should render an input', () => {
      expect(screen.getByTestId('input')).toBeTruthy();
    })

    it('should render a button to decrease number', () => {
      expect(screen.getByTestId('decrease-button')).toBeTruthy();
      expect(screen.getByTestId('decrease-icon')).toBeTruthy();
    })

    it('should render a button to increase number', () => {
      expect(screen.getByTestId('increase-button')).toBeTruthy();
      expect(screen.getByTestId('increase-icon')).toBeTruthy();
    })
  })

  describe('functionality ->', () => {
    async function getNumberValue() {
      return await screen.findByDisplayValue('123');
    }

    it('should only accept numbers as value', async () => {
      const input = screen.getByTestId('input');

      fireEvent.changeText(input, '123');
      const numberValue = await getNumberValue();
      expect(numberValue).toBeTruthy();

      fireEvent.changeText(input, 'abc123');
      const removedLetters = await getNumberValue();
      expect(removedLetters).toBeTruthy();

      fireEvent.changeText(input, '!@#123');
      const removedSpecialCharacters = await getNumberValue();
      expect(removedSpecialCharacters).toBeTruthy();

      fireEvent.changeText(input, '12a3b');
      const removedLettersBetweenNumbers = await getNumberValue();
      expect(removedLettersBetweenNumbers).toBeTruthy();
    });

    it('should increase number when increase button is pressed', async () => {
      const input = screen.getByTestId('input');
      const increaseButton = screen.getByTestId('increase-button');
      fireEvent.changeText(input, '123');
      fireEvent.press(increaseButton);
      const increasedValue = await screen.findByDisplayValue('124');
      expect(increasedValue).toBeTruthy();
    });

    it('should decrease number when decrease button is pressed', async () => {
      const input = screen.getByTestId('input');
      const decreaseButton = screen.getByTestId('decrease-button');
      fireEvent.changeText(input, '123');
      fireEvent.press(decreaseButton);
      const decreasedValue = await screen.findByDisplayValue('122');
      expect(decreasedValue).toBeTruthy();
    });

    it('should not decrease beyond the minimum set value', async () => {
      const decreaseButton = screen.getByTestId('decrease-button');
      fireEvent.press(decreaseButton);

      const decreasedValue = await screen.findByDisplayValue('5');
      expect(decreasedValue).toBeTruthy();
    })

    it('should not increase beyond the maximum set value', async () => {
      const input = screen.getByTestId('input');
      fireEvent.changeText(input, '123');

      const increaseButton = screen.getByTestId('increase-button');
      fireEvent.press(increaseButton);
      fireEvent.press(increaseButton);

      const increasedValue = await screen.findByDisplayValue('124');
      expect(increasedValue).toBeTruthy();
    })

    it('should call onChangeText when input is changed', () => {
      const mockOnChangeText = jest.fn();
      const { getByTestId } = render(<NumberInput value="" onChangeText={mockOnChangeText} />);

      const input = getByTestId('input');
      fireEvent.changeText(input, '456');

      expect(mockOnChangeText).toHaveBeenCalledWith('456');
    });

    it('should start from the minimum when pressing increase button', async () => {
      const increaseButton = screen.getByTestId('increase-button');

      fireEvent.press(increaseButton);
      fireEvent.press(increaseButton);

      const increasedValue = await screen.findByDisplayValue('6');
      expect(increasedValue).toBeTruthy();
    })
  })
})
