import { render, RenderOptions } from '@testing-library/react-native'
import { PropsWithChildren, ReactElement } from 'react'

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
    </>
  )
}

const customRender = (ui: ReactElement<any>, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react-native'

// override render method
export { customRender as render }
