import '@testing-library/jest-dom/extend-expect'

import { act, cleanup, fireEvent, render } from '@testing-library/react'
import React from 'react'

import ButtonLoading from '.'

afterEach(cleanup)

describe('components/ButtonLoading', () => {
  const text = 'Click me'
  it('renders', () => {
    const { getByText } = render(<ButtonLoading submitting={false} />)

    // toHaveTextContent is not in basic types so we would have to declare jest d.ts which is bit overkill for test coding
    //@ts-ignore
    expect(getByText(text)).toHaveTextContent(text)
  })

  it('can click on button', () => {
    const text = 'Click me'
    const action = jest.fn()
    const { getByText } = render(<ButtonLoading submitting={false} onClick={action} />)

    const button = getByText(text)

    act(() => {
      fireEvent.click(button)
    })
    //@ts-ignore
    expect(button).toHaveTextContent(text)
    expect(action).toBeCalledTimes(1)
  })

  it('can not click on disabled button', () => {
    const text = 'Click me'
    const action = jest.fn()
    const { getByText } = render(<ButtonLoading submitting={false} disabled={true} onClick={action} />)

    const button = getByText(text)

    act(() => {
      fireEvent.click(button)
    })
    // @ts-ignore
    expect(button).toHaveTextContent(text)
    expect(action).toBeCalledTimes(0)
  })
})
