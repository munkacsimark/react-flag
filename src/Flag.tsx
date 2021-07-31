import * as React from 'react'
import Emoji from 'a11y-react-emoji'
import Country, {
	Alpha2CountryCode,
	Alpha3CountryCode,
	CountryTLD,
	NumericCountryCode,
} from './Country'
import countryData from './countryData'
import flags from './flags'

const FLAG_RATIO = 1.5
interface Props extends React.HTMLAttributes<HTMLElement> {
	alpha2?: Alpha2CountryCode
	alpha3?: Alpha3CountryCode
	numeric?: NumericCountryCode
	tld?: CountryTLD
	size?: 'xs' | 'sm' | 'lg' | 'xl'
	useEmoji?: boolean
	disableLabel?: boolean
}

const getCountryDataByProps = ({
	alpha2,
	alpha3,
	numeric,
	tld,
}: Props): Country | null => {
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
	return null
}

const sizeMap = {
	xs: 18,
	sm: 24,
	lg: 36,
	xl: 48,
}

const Flag: React.FunctionComponent<Props> = (props) => {
	const {
		alpha2,
		alpha3,
		numeric,
		tld,
		size = 'sm',
		useEmoji = false,
		disableLabel = false,
		...rest
	} = props
	const countryData = getCountryDataByProps({
		alpha2,
		alpha3,
		numeric,
		tld,
	})
	if (!countryData) throw Error("Country doesn't exist with given props.")

	return useEmoji ? (
		<Emoji
			symbol={countryData.emoji}
			label={disableLabel ? undefined : `Flag of ${countryData.name}`}
			{...rest}
		/>
	) : (
		<span
			style={{
				display: 'inline-block',
				overflow: 'hidden',
				height: `${sizeMap[size] / FLAG_RATIO}px`,
				width: `${sizeMap[size]}px`,
			}}
			{...rest}>
			<img
				style={{
					objectFit: 'cover',
					display: 'block',
					maxWidth: '100%',
					maxHeight: '100%',
				}}
				src={flags[`flag${countryData.alpha2}`]}
				alt={`Flag of ${countryData.name}`}
			/>
		</span>
	)
}

export default Flag
export { Props }
