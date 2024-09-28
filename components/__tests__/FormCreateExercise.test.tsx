import { fireEvent, render, screen, within } from "../../utils/test-utils";
import { FormCreateExercise } from "../FormCreateExercise";

describe('FormCreateExercise', () => {

  beforeEach(() => {
    render(<FormCreateExercise />);
  });

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
      fireEvent.press(screen.getByText('Create exercise'));

      const nameError = await screen.findByText('Name is required');
      const setsError = await screen.findByText('Number of sets is required');
      const repetitionsError = await screen.findByText('Number of repetitions is required');
      const loadError = await screen.findByText('Load is required');
      const restMinutesError = await screen.findByText('Rest minutes is required');

      expect(nameError).toBeTruthy();
      expect(setsError).toBeTruthy();
      expect(repetitionsError).toBeTruthy();
      expect(loadError).toBeTruthy();
      expect(restMinutesError).toBeTruthy();
    })
  })
});
