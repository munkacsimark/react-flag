import * as React from 'react';
import { Alpha2CountryCode, Alpha3CountryCode, CountryTLD, NumericCountryCode } from './Country';
interface Props extends React.HTMLAttributes<HTMLElement> {
    alpha2?: Alpha2CountryCode;
    alpha3?: Alpha3CountryCode;
    numeric?: NumericCountryCode;
    tld?: CountryTLD;
    size?: 'xs' | 'sm' | 'lg' | 'xl';
    useEmoji?: boolean;
    disableLabel?: boolean;
}
declare const Flag: React.FunctionComponent<Props>;
export default Flag;
export { Props };
