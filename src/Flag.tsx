import * as React from 'react'
import countryData from './countryData'

const Flag = () => {
	return (
		<ul>
			{countryData.map((c) => (
				<li>{c.emoji}</li>
			))}
		</ul>
	)
}

export default Flag
