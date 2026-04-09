/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		files: ["**/*.{js,mjs,cjs,ts}"]
	}, {
		rules: {
			semi: ["warn", "always"],
			indent: ["error", "tab", { SwitchCase: 1 }],
			quotes: ["error", "double", { avoidEscape: true }],
			"no-unused-vars": "error",
			"prefer-const": "error",
			"object-curly-spacing": ["error", "always"],
		},
		ignores: ["node_modules/", "dist/", "build/", "public/"],
	},
];
