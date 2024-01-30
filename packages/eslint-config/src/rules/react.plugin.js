module.exports = {
	"react/boolean-prop-naming": ["error", {
		rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
	}],
	"react/jsx-boolean-value": "error",
	"react/jsx-no-duplicate-props": "error",
	"react/jsx-no-undef": "error",
	"react/jsx-uses-react": "error",
	"react/jsx-uses-vars": "error",
	"react/prefer-stateless-function": "error",
	"react/prop-types": "error",
	"react/sort-comp": ["error", {
		order: [
			"type-annotations",
			"static-methods",
			"lifecycle",
			"everything-else",
			"/^render.+$/",
			"render",
		],
	}],
};
