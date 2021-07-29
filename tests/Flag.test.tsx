import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Flag from '../src/Flag'
import '@testing-library/jest-dom'

describe('<Flag />', () => {
	test('it should throw an error if there is no prop defined', () => {
		const { container } = render(<Flag />)
		expect(container.firstChild).toBeNull()
	})

	test('it passes other valid props', () => {
		const { container } = render(
			<Flag alpha2='US' className='meow' style={{ color: 'red' }} />
		)
		expect(container.firstChild).toHaveProperty('className')
		expect(container.firstChild).toHaveProperty('style')
	})

	test('it passes event props correctly', () => {
		const mockClickHandler = jest.fn()
		const { container } = render(
			<Flag alpha2='US' onClick={mockClickHandler} />
		)
		fireEvent.click(container.firstChild as HTMLElement)
		expect(mockClickHandler).toHaveBeenCalledTimes(1)
	})
})
