import * as React from 'react'
import {
	Alpha2CountryCode,
	Alpha3CountryCode,
	CountryFlagEmoji,
	CountryTLD,
	NumericCountryCode,
} from './Country'
import countryData from './countryData'
interface Props extends React.HTMLAttributes<HTMLElement> {
	alpha2?: Alpha2CountryCode
	alpha3?: Alpha3CountryCode
	numeric?: NumericCountryCode
	tld?: CountryTLD
}

const atLeastOnePropDefined = (props: Props) => {
	const { alpha2, alpha3, numeric, tld } = props
	return (
		alpha2 !== undefined ||
		alpha3 !== undefined ||
		numeric !== undefined ||
		tld !== undefined
	)
}

const Flag: React.FunctionComponent<Props> = (props) => {
	const flag = <span {...props}></span>
	return atLeastOnePropDefined(props) ? flag : null
}

export default Flag
export { Props }
