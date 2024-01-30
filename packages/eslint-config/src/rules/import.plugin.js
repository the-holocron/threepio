module.exports = {
	// helpful warnings
	"import/export": "error",
	"import/no-deprecated": "error",
	"import/no-empty-named-blocks": "error",
	"import/no-mutable-exports": "error",
	"import/no-named-as-default": "error",
	"import/no-named-as-default-member": "error",
	"import/no-unused-modules": "error",

	// static analysis
	"import/default": "error",
	"import/named": "error",
	"import/no-self-import": "error",
	"import/no-unresolved": "error",
	"import/no-useless-path-segments": "error",
	"import/no-webpack-loader-syntax": "error",

	// style guilde
	"import/consistent-type-specifier-style": [
		"error",
		"prefer-top-level",
	],
	"import/first": "error",
	"import/newline-after-import": "error",
	"import/no-duplicates": "error",
	"import/order": ["error", {
		alphabetize: {
			order: "asc",
			orderImportKind: "asc",
			caseInsensitive: true,
		},
		groups: [
			"builtin",
			"external",
			"internal",
			"parent",
			"sibling",
			"index",
		],
	}],
};
