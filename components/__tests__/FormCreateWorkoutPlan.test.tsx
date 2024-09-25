import { render } from '../../utils/test-utils';
import { FormCreateWorkoutPlan } from '../FormCreateWorkoutPlan';

describe('<FormCreateWorkoutPlan/>', () => {
  it('should render correctly', () => {
    const snapshot = render(<FormCreateWorkoutPlan />).toJSON();

    expect(snapshot).toMatchSnapshot();
  })
})
