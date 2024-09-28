import { renderHook } from '@testing-library/react-native';
import { useFormContext } from 'react-hook-form';
import { useFormField } from '../useFormField';

jest.mock('react-hook-form', () => ({
  useFormContext: jest.fn(),
}));

describe('useFormField', () => {
  const originalConsoleError = console.error;

  beforeAll(() => {
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  it('should return formContext when inside a Form component', () => {
    const mockContextValue = { register: jest.fn(), formState: {} };
    (useFormContext as jest.Mock).mockReturnValue(mockContextValue);

    const { result } = renderHook(() => useFormField());
    expect(result.current).toBe(mockContextValue);
  })

  it('should throw if not used inside a Form component', () => {
    (useFormContext as jest.Mock).mockReturnValue(null);

    let error: Error | undefined;

    try {
      renderHook(() => useFormField());
    } catch (e) {
      error = e as Error;
    }

    // Expect the hook to throw the specified error
    expect(error).toEqual(new Error('FormField must be used inside a Form component'));
  })
})
