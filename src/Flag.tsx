import * as React from 'react'
import Emoji from 'a11y-react-emoji'
import Country, {
	Alpha2CountryCode,
	Alpha3CountryCode,
	CountryFlagEmoji,
	CountryTLD,
	NumericCountryCode,
} from './Country'
import countryData from './countryData'
import flags from './flags'

interface Props extends React.HTMLAttributes<HTMLElement> {
	alpha2?: Alpha2CountryCode
	alpha3?: Alpha3CountryCode
	numeric?: NumericCountryCode
	tld?: CountryTLD
	useEmoji?: boolean
	disableLabel?: boolean
}

const atLeastOnePropDefined = ({
	alpha2,
	alpha3,
	numeric,
	tld,
}: Props): boolean =>
	alpha2 !== undefined ||
	alpha3 !== undefined ||
	numeric !== undefined ||
	tld !== undefined

const getCountryDataByProps = ({
	alpha2,
	alpha3,
	numeric,
	tld,
}: Props): Country => {
	if (!!alpha2) {
		const data = countryData.find((data) => data.alpha2 === alpha2)
		if (!data) throw Error(`Invalid aplha-2 code: "${alpha2}"`)
		return data
	}
	if (!!alpha3) {
		const data = countryData.find((data) => data.alpha3 === alpha3)
		if (!data) throw Error(`Invalid aplha-3 code: "${alpha3}"`)
		return data
	}
	if (!!numeric) {
		const data = countryData.find((data) => data.numeric === numeric)
		if (!data) throw Error(`Invalid numeric code: "${numeric}"`)
		return data
	}
	if (!!tld) {
		const data = countryData.find((data) => data.tld === tld)
		if (!data) throw Error(`Invalid tld: "${tld}"`)
		return data
	}
	throw Error("County don't exists with given props.")
}

const Flag: React.FunctionComponent<Props> = (props) => {
	const { alpha2, alpha3, numeric, tld, useEmoji, disableLabel } = props
	const countryData = getCountryDataByProps({ alpha2, alpha3, numeric, tld })

	const flag = useEmoji ? (
		<Emoji
			symbol={countryData.emoji}
			label={disableLabel ? undefined : `Flag of ${countryData.name}`}
		/>
	) : (
		<span>
			<img src={flags[`flag${alpha2}`]} alt={`Flag of ${countryData.name}`} />
		</span>
	)
	return atLeastOnePropDefined(props) ? flag : null
}

export default Flag
export { Props }
