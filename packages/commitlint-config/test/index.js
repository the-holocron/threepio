/* eslint-disable jest/no-conditional-in-test */
const lint = require("@commitlint/lint");
const load = require("@commitlint/load");
const config = require("../");

describe("configuration", () => {
	describe("commitLint", () => {
		describe("valid commit message", () => {
			let result;

			beforeEach(() => {
				result = load(config);
			});

			test("should not error on type-enum", () => result
				.then(opts => lint("fix: some message", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeTruthy())),
			);
			test("should not error on type-case", () => result
				.then(opts => lint("fix: some message", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeTruthy())),
			);
			test("should not error on type-empty", () => result
				.then(opts => lint("fix(scope): some message", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeTruthy())),
			);
			test("should not error on scope-case", () => result
				.then(opts => lint("fix(scope): some Message", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeTruthy())),
			);
			test("should not error on subject-case", () => result
				.then(opts => lint("fix: some message", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeTruthy())),
			);
			test("should not error on subject-empty", () => result
				.then(opts => lint("fix(scope): some message", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeTruthy())),
			);
			test("should not error on subject-full-stop", () => result
				.then(opts => lint("fix: some message", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeTruthy())),
			);
			test("should not error on header-max-length", () => result
				.then(opts => lint("fix: some message", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeTruthy())),
			);
		});

		describe("invalid commit message", () => {
			let result;

			beforeEach(() => {
				result = load(config);
			});

			test("should error on type-enum", () => result
				.then(opts => lint("foo: some message", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeFalsy())),
			);
			test("should error on type-case", () => result
				.then(opts => lint("FIX: some message", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeFalsy())),
			);
			test("should error on type-empty", () => result
				.then(opts => lint(": some message", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeFalsy())),
			);
			test("should error on scope-case", () => result
				.then(opts => lint("fix(SCOPE): some message", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeFalsy())),
			);
			test("should error on subject-case", () => result
				.then(opts => lint("fix(SCOPE): Some message", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeFalsy())),
			);
			test("should error on subject-empty", () => result
				.then(opts => lint("fix:", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeFalsy())),
			);
			test("should error on subject-full-stop", () => result
				.then(opts => lint("fix: some message.", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeFalsy())),
			);
			test("should error on header-max-length", () => result
				.then(opts => lint("fix: some message that is way too long and breaks the line max-length by several characters", opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}))
				.then(data => (expect(data.valid).toBeFalsy())),
			);
		});
	});
});
