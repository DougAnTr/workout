import { createExercise } from "../../api/modules/exercises/services/createExercise.service";
import { act, cleanup, fireEvent, render, screen, within } from "../../utils/test-utils";
import { FormCreateExercise } from "../FormCreateExercise";

jest.mock('../../api/modules/exercises/services/createExercise.service', () => ({
  createExercise: jest.fn(),
}))

describe('FormCreateExercise', () => {

  beforeEach(() => {
    render(<FormCreateExercise />);
  });

  afterEach(() => {
    cleanup();
  })

  describe('screen elements', () => {
    it('should render an input for name', () => {
      const inputLabel = screen.getByTestId('name-field');
      const input = within(inputLabel).getByTestId('input');
      expect(input).toBeTruthy();
    });

    it('should render an input for number of sets', () => {
      const inputLabel = screen.getByTestId('sets-field');
      const input = within(inputLabel).getByTestId('input');
      expect(input).toBeTruthy();
    });

    it('should render an input for number of repetitions', () => {
      const inputLabel = screen.getByTestId('repetitions-field');
      const input = within(inputLabel).getByTestId('input');
      expect(input).toBeTruthy();
    });

    it('should render an input for load (KG)', () => {
      const inputLabel = screen.getByTestId('load-field');
      const input = within(inputLabel).getByTestId('input');
      expect(input).toBeTruthy();
    });

    it('should render an input for rest minutes', () => {
      const inputLabel = screen.getByTestId('rest-minutes-field');
      const input = within(inputLabel).getByTestId('input');
      expect(input).toBeTruthy();
    });

    it('should render a button to confirm and create the exercise', () => {
      const createButton = screen.getByTestId('create-exercise-button');
      const buttonText = within(createButton).getByText('Create exercise');
      expect(buttonText).toBeTruthy();
    });
  });

  describe('field validations', () => {
    it('should show an error message if required fields are submitted empty', async () => {
      const nameInput = within(screen.getByTestId('name-field')).getByTestId('input');
      const setsInput = within(screen.getByTestId('sets-field')).getByTestId('input');
      const repetitionsInput = within(screen.getByTestId('repetitions-field')).getByTestId('input');
      const loadInput = within(screen.getByTestId('load-field')).getByTestId('input');
      const restMinutesInput = within(screen.getByTestId('rest-minutes-field')).getByTestId('input');

      fireEvent.changeText(nameInput, '');
      fireEvent.changeText(setsInput, '');
      fireEvent.changeText(repetitionsInput, '');
      fireEvent.changeText(loadInput, '');
      fireEvent.changeText(restMinutesInput, '');
      fireEvent.press(screen.getByText('Create exercise'));

      expect(await screen.findByText('Name is required')).toBeTruthy();
      expect(await screen.findByText('Number of sets should be more or equal to 1')).toBeTruthy();
      expect(await screen.findByText('Number of repetitions should be more or equal to 1')).toBeTruthy();
      expect(await screen.findByText('Load should be more or equal to 1')).toBeTruthy();
      expect(await screen.findByText('Rest minutes should be more or equal to 1')).toBeTruthy();
    })

    it('should not allow number inputs with value < 1', async () => {
      const nameInput = within(screen.getByTestId('name-field')).getByTestId('input');
      const setsInput = within(screen.getByTestId('sets-field')).getByTestId('input');
      const repetitionsInput = within(screen.getByTestId('repetitions-field')).getByTestId('input');
      const loadInput = within(screen.getByTestId('load-field')).getByTestId('input');
      const restMinutesInput = within(screen.getByTestId('rest-minutes-field')).getByTestId('input');

      fireEvent.changeText(nameInput, 'Test Exercise');
      fireEvent.changeText(setsInput, '0');
      fireEvent.changeText(repetitionsInput, '0');
      fireEvent.changeText(loadInput, '0');
      fireEvent.changeText(restMinutesInput, '0');

      fireEvent.press(screen.getByText('Create exercise'));
      expect(await screen.findByText('Number of sets should be more or equal to 1')).toBeTruthy();
      expect(await screen.findByText('Number of repetitions should be more or equal to 1')).toBeTruthy();
      expect(await screen.findByText('Load should be more or equal to 1')).toBeTruthy();
      expect(await screen.findByText('Rest minutes should be more or equal to 1')).toBeTruthy();
    })
  })

  describe('form submission', () => {
    it('should call createExercise service with the form data', async () => {
      const nameInput = within(screen.getByTestId('name-field')).getByTestId('input');
      const setsInput = within(screen.getByTestId('sets-field')).getByTestId('input');
      const repetitionsInput = within(screen.getByTestId('repetitions-field')).getByTestId('input');
      const loadInput = within(screen.getByTestId('load-field')).getByTestId('input');
      const restMinutesInput = within(screen.getByTestId('rest-minutes-field')).getByTestId('input');

      await act(() => {
        fireEvent.changeText(nameInput, 'name');
        fireEvent.changeText(setsInput, '2');
        fireEvent.changeText(repetitionsInput, '2');
        fireEvent.changeText(loadInput, '2');
        fireEvent.changeText(restMinutesInput, '2');
        fireEvent.press(screen.getByText('Create exercise'));
      });

      expect(createExercise).toHaveBeenCalledWith({
        name: 'name',
        sets: 2,
        repetitions: 2,
        load: 2,
        restMinutes: 2
      });
    })
  })
});
