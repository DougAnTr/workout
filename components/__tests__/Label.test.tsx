import { View } from "react-native";
import { render } from "../../utils/test-utils"
import { Label } from "../Label";

describe('Label', () => {
  it('should render the text prop', () => {
    const labelText = 'test label';
    const { getByText } = render(<Label text={labelText} />)

    const lable = getByText(labelText);
    expect(lable).toBeTruthy();
  });

  it('should render the children', () => {
    const labelChildId = 'label child';

    const { getByTestId } = render(<Label text={'test'}><View testID={labelChildId} /></Label>)

    const labelChild = getByTestId(labelChildId);
    expect(labelChild).toBeTruthy();
  })
})
