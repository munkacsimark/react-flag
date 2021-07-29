import React from 'react'
import { render } from '@testing-library/react'
import Flag from '../src/Flag'

describe('<Flag />', () => {
	test('it should render and have the ul element', async () => {
		const { findByTestId } = render(<Flag testProp />)
		const ulElement = await findByTestId('testid')
		expect(ulElement).toBeTruthy()
	})
})
