import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Flag from '../src/Flag'
import countryData from '../src/countryData'
import '@testing-library/jest-dom'

describe('countryData', () => {
	test('it should have names filled', () => {
		expect(countryData.find((data) => !data.name)).toBeUndefined()
	})

	test('it should have alpa-2 codes filled', () => {
		expect(countryData.find((data) => !data.alpha2)).toBeUndefined()
	})

	test('it should have alpha-3 codes filled', () => {
		expect(countryData.find((data) => !data.alpha3)).toBeUndefined()
	})

	test('it should have numeric values filled', () => {
		expect(countryData.find((data) => !data.numeric)).toBeUndefined()
	})

	test('it should have emojis filled', () => {
		expect(countryData.find((data) => !data.emoji)).toBeUndefined()
	})
})

describe('<Flag />', () => {
	test('it should throw an error if there is no prop defined', () => {
		const mockConsoleError = jest.spyOn(console, 'error')
		mockConsoleError.mockImplementation(() => {})
		expect(() => {
			render(<Flag />)
		}).toThrow()
		mockConsoleError.mockRestore()
	})

	test('it should work with alpha-2 prop', () => {
		const { container } = render(<Flag alpha2='US' />)
		expect(container.firstChild).toBeTruthy()
	})

	test('it should work with alpha-3 prop', () => {
		const { container } = render(<Flag alpha3='USA' />)
		expect(container.firstChild).toBeTruthy()
	})

	test('it should work with numeric code prop', () => {
		const { container } = render(<Flag numeric='840' />)
		expect(container.firstChild).toBeTruthy()
	})

	test('it should work with tld prop', () => {
		const { container } = render(<Flag tld='.us' />)
		expect(container.firstChild).toBeTruthy()
	})

	test('it renders correct size without size prop', () => {
		const { container } = render(<Flag alpha2='US' />)
		expect(container.firstChild).toHaveStyle('width: 24px')
		expect(container.firstChild).toHaveStyle('height: 16px')
	})

	test('it renders correct size with "xs" size prop', () => {
		const { container } = render(<Flag alpha2='US' size='xs' />)
		expect(container.firstChild).toHaveStyle('width: 18px')
		expect(container.firstChild).toHaveStyle('height: 12px')
	})

	test('it renders correct size with "sm" size prop', () => {
		const { container } = render(<Flag alpha2='US' size='sm' />)
		expect(container.firstChild).toHaveStyle('width: 24px')
		expect(container.firstChild).toHaveStyle('height: 16px')
	})

	test('it renders correct size with "lg" size prop', () => {
		const { container } = render(<Flag alpha2='US' size='lg' />)
		expect(container.firstChild).toHaveStyle('width: 36px')
		expect(container.firstChild).toHaveStyle('height: 24px')
	})

	test('it renders correct size with "xl" size prop', () => {
		const { container } = render(<Flag alpha2='US' size='xl' />)
		expect(container.firstChild).toHaveStyle('width: 48px')
		expect(container.firstChild).toHaveStyle('height: 32px')
	})

	test('it renders emoji correctly with useEmoji prop', () => {
		render(<Flag alpha2='US' useEmoji />)
		expect(screen.getByRole('img')).toHaveTextContent('🇺🇸')
		expect(screen.getByRole('img')).toHaveAttribute('aria-label')
	})

	test('it handles disableLabel correctly', () => {
		render(<Flag alpha2='US' useEmoji disableLabel />)
		expect(screen.getByText('🇺🇸')).toHaveAttribute('aria-hidden')
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
