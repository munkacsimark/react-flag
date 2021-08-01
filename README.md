# React Flag

This package is based on [ISO-3166 country codes](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes), contains 245 flags. It comes with minimum styling for easier use in your project. Flags are in `svg` format but you can use them with [emojis](https://emojipedia.org/flags/) as well.

## Installation

```bash
npm install @munkacsimark/react-flags --save
```

## Usage

```javascript
import Flag from '@munkacsimark/flags'
```

## Properties

| Key          | Value   | Required | Default | Format                                                                          |
| ------------ | ------- | -------- | ------- | ------------------------------------------------------------------------------- |
| alpha2       | String  | false\*  | -       | [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)          |
| alpha3       | String  | false\*  | -       | [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)          |
| numeric      | String  | false\*  | -       | [ISO 3166-1 numeric](https://en.wikipedia.org/wiki/ISO_3166-1_numeric)          |
| tld          | String  | false\*  | -       | [Country code TLD](https://en.wikipedia.org/wiki/Country_code_top-level_domain) |
| size         | String  | false    | 'sm'    | 'xs', 'sm', 'lg', 'xl'                                                          |
| useEmoji     | Boolean | false    | false   | -                                                                               |
| disableLabel | Boolean | false    | false   | -                                                                               |

\* For identifying the country **one of the following properties needs to be defined**: **alpha2**, **alpha3**, **numeric**, **tld**. The order of property precedence is the same.

**alpha2** and **alpha3** should be upper-case letters (e.g. `'US'`), **numeric code**s as string (e.g `'840'`) and **tld**s starting with a period (e.g. `'.us'`).

There are predefined **size**s of container width: `'xs'`=`18px`, `'sm'`=`24px`, `'lg'`=`36px` and `'xl'`=`48px`. Each is using 1.5 ratio for calculating height of container (e.g height of `'sm'`=24/1.5=16px).

You can use `useEmoji` property for using only emojis in accessible way. This feature is based on [a11y-react-emoji](https://github.com/SeanMcP/a11y-react-emoji). `disableLabel` property makes sense only for emojis, it disables `aria-label` and sets `aria-hidden` to `true`.

## Examples

### Simple usage

```jsx
<Flag alpha2={'US'} />
```

### Usage with emojis

```jsx
<Flag alpha2={'US'} useEmoji />
```

### Styling

#### CSS Modules

Since it uses inline styles for now, you need to define `width` and `height` with `!important`.

```css
.flag {
	width: 100px !important;
	height: 50px !important;
	border: 1px solid black;
}
```

```jsx
<Flag alpha2={'US'} className={style.flag} />
```

#### Inline styles

```jsx
<Flag alpha2={'US'} style={{ width: '100px' }} />
```

#### Examples

You can set styles of child img tag as following:

```css
.flag img {
	object-fit: cover !important;
}
```

For making circle flags, use styles like below. Note that, you can align images with `object-position` rule.

```css
.flag {
	width: 62px !important;
	height: 62px !important;
	border-radius: 50%;
}
.flag img {
	object-fit: cover !important;
	object-position: -10px center;
}
```

When you are using emojis with `useEmoji` property, you can set the size simply with:

```css
.flag {
	font-size: 64px;
}
```
