import { render } from '../../utils/test-utils';
import { FormCreateWorkoutPlan } from '../FormCreateWorkoutPlan';

describe('<FormCreateWorkoutPlan/>', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should render correctly', () => {
    const snapshot = render(<FormCreateWorkoutPlan />).toJSON();

    expect(snapshot).toMatchSnapshot();
  })
})
