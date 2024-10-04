import { render } from '../../utils/test-utils';
import { Button } from '../Button';

describe('Button', () => {
  it('should render the children', () => {
    const buttonText = 'test button';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const button = getByText(buttonText);

    expect(button).toBeTruthy();
  });
});
