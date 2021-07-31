export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'.+\\.svg$': 'jest-transform-stub',
	},
}
