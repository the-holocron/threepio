module.exports = {
	"@stylistic/array-bracket-spacing": ["error", "never"],
	"@stylistic/arrow-parens": ["error", "as-needed"],
	"@stylistic/arrow-spacing": ["error", {
		before: true,
		after: true,
	}],
	"@stylistic/block-spacing": ["error", "always"],
	"@stylistic/brace-style": ["error", "1tbs", {
		allowSingleLine: true,
	}],
	"@stylistic/comma-dangle": ["error", "always-multiline"],
	"@stylistic/comma-spacing": ["error", {
		before: false,
		after: true,
	}],
	"@stylistic/comma-style": ["error", "last"],
	"@stylistic/dot-location": ["error", "property"],
	"@stylistic/eol-last": "error",
	"@stylistic/func-call-spacing": ["error", "never"],
	"@stylistic/generator-star-spacing": ["error", {
		before: true,
		after: true,
	}],
	"@stylistic/indent": ["error", "tab", {
		SwitchCase: 1,
	}],
	"@stylistic/jsx-closing-bracket-location": "warn",
	"@stylistic/jsx-closing-tag-location": "warn",
	"@stylistic/jsx-curly-spacing": ["error", "never"],
	"@stylistic/jsx-equals-spacing": ["error", "never"],
	"@stylistic/jsx-first-prop-new-line": ["warn", "multiline"],
	"@stylistic/jsx-indent": ["error", "tab"],
	"@stylistic/jsx-indent-props": ["error", "tab"],
	"@stylistic/jsx-max-props-per-line": "warn",
	"@stylistic/jsx-quotes": ["error", "prefer-double"],
	"@stylistic/jsx-tag-spacing": ["error"],
	"@stylistic/jsx-self-closing-comp": "error",
	"@stylistic/jsx-sort-props": ["error", {
		ignoreCase: true,
		shorthandFirst: true,
	}],
	"@stylistic/key-spacing": ["error", {
		beforeColon: false,
		afterColon: true,
	}],
	"@stylistic/keyword-spacing": ["error", {
		before: true,
		after: true,
	}],
	"@stylistic/new-parens": "error",
	"@stylistic/no-confusing-arrow": "off",
	"@stylistic/no-extra-parens": ["error", "functions"],
	"@stylistic/no-extra-semi": "error",
	"@stylistic/no-floating-decimal": "error",
	"@stylistic/no-mixed-operators": ["error", {
		groups: [
			["==", "!=", "===", "!==", ">", ">=", "<", "<="],
			["&&", "||"],
			["in", "instanceof"],
		],
		allowSamePrecedence: true,
	}],
	"@stylistic/no-mixed-spaces-and-tabs": "error",
	"@stylistic/no-multi-spaces": "error",
	"@stylistic/no-multiple-empty-lines": ["error", {
		max: 1,
		maxEOF: 0,
	}],
	"@stylistic/no-tabs": "off",
	"@stylistic/no-trailing-spaces": "error",
	"@stylistic/no-whitespace-before-property": "error",
	"@stylistic/object-curly-newline": ["error", {
		consistent: true,
	}],
	"@stylistic/object-curly-spacing": ["error", "always"],
	"@stylistic/object-property-newline": ["error", {
		allowMultiplePropertiesPerLine: true,
	}],
	"@stylistic/operator-linebreak": ["error", "after", {
		overrides: {
			"?": "before",
			":": "before",
		},
	}],
	"@stylistic/padded-blocks": ["error", {
		blocks: "never",
		classes: "never",
		switches: "never",
	}],
	"@stylistic/quote-props": ["error", "as-needed"],
	"@stylistic/quotes": ["error", "double", {
		avoidEscape: true,
		allowTemplateLiterals: true,
	}],
	"@stylistic/rest-spread-spacing": ["error", "never"],
	"@stylistic/semi": ["error", "always"],
	"@stylistic/semi-spacing": ["error", {
		before: false,
		after: true,
	}],
	"@stylistic/space-before-blocks": ["error", "always"],
	"@stylistic/space-before-function-paren": ["error", "always"],
	"@stylistic/space-in-parens": ["error", "never"],
	"@stylistic/space-infix-ops": "error",
	"@stylistic/space-unary-ops": ["error", {
		nonwords: false,
		words: true,
	}],
	"@stylistic/spaced-comment": ["error", "always", {
		line: {
			markers: ["*package", "!", "/", ",", "="],
		},
		block: {
			balanced: true,
			markers: ["*package", "!", ",", ":", "::"],
			exceptions: ["*"],
		},
	}],
	"@stylistic/template-curly-spacing": ["error", "never"],
	"@stylistic/template-tag-spacing": ["error", "never"],
	"@stylistic/wrap-iife": ["error", "any", {
		functionPrototypeMethods: true,
	}],
	"@stylistic/yield-star-spacing": ["error", "both"],
};
