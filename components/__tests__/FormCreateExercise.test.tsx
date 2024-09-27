import { render, screen, within } from "../../utils/test-utils";
import { FormCreateExercise } from "../FormCreateExercise";

describe('FormCreateExercise', () => {

  beforeEach(() => {
    render(<FormCreateExercise />);
  });

  describe('elements', () => {
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
});
