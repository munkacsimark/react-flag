import * as React from 'react'
import countryData from './countryData'
interface Props {
	testProp: boolean
}

const Flag = ({ testProp }: Props) => {
	return (
		<>
			<h1>{testProp}</h1>
			<ul data-testid='testid'>
				{countryData.map((c) => (
					<li key={c.alpha2}>{c.emoji}</li>
				))}
			</ul>
		</>
	)
}

export default Flag
export { Props }
