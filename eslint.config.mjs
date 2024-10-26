import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import {fileURLToPath} from "node:url";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/node_modules/*",
        "**/dist",
        ".dependency-cruiser.cjs",
        "eslint.config.mjs",
        ".commitlintrc.ts",
        "tailwind.config.js",
        "postcss.config.js",
        "vite.config.ts",
    ]
}, ...compat.extends(
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        react
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            ...Object.fromEntries(Object.entries(globals.amd)
                .map(([key]) => [key, "off"])),
            ...Object.fromEntries(Object.entries(globals.mocha)
                .map(([key]) => [key, "off"])),
            ...Object.fromEntries(Object.entries(globals.jasmine)
                .map(([key]) => [key, "off"]))
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: ["./tsconfig.json"],

            ecmaFeatures: {
                jsx: true
            }
        }
    },

    rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
        "react/jsx-indent": ["error", 2],

        "array-callback-return": ["error", {
            allowImplicit: true
        }],

        "constructor-super": "off",
        "for-direction": "error",

        "getter-return": ["error", {
            allowImplicit: true
        }],

        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": ["error", "always"],
        "no-const-assign": "error",
        "no-constant-binary-expression": "off",
        "no-constant-condition": "error",
        "no-constructor-return": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-ex-assign": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-new-native-nonconstructor": "off",
        "no-new-symbol": "error",
        "no-obj-calls": "error",
        "no-promise-executor-return": "error",
        "no-prototype-builtins": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-setter-return": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-undef": "warn",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "off",
        "no-unreachable": "error",

        "no-unreachable-loop": ["error", {
            ignore: []
        }],

        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",

        "no-unsafe-optional-chaining": ["error", {
            disallowArithmeticOperators: true
        }],

        "no-unused-private-class-members": "error",

        "no-unused-vars": ["off", {
            vars: "all",
            args: "all"
        }],

        "no-use-before-define": ["error", {
            functions: true,
            classes: true,
            variables: true
        }],

        "no-useless-backreference": "error",
        "require-atomic-updates": "off",
        "use-isnan": "error",

        "valid-typeof": ["error", {
            requireStringLiterals: true
        }],

        "accessor-pairs": "error",

        "arrow-body-style": ["error", "as-needed", {
            requireReturnForObjectLiteral: false
        }],

        "block-scoped-var": "error",

        camelcase: ["error", {
            properties: "never",
            ignoreDestructuring: false
        }],

        "capitalized-comments": ["off", "never", {
            line: {
                ignorePattern: ".*",
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true
            },

            block: {
                ignorePattern: ".*",
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true
            }
        }],

        "class-methods-use-this": ["error", {
            exceptMethods: [
                "render",
                "getInitialState",
                "getDefaultProps",
                "getChildContext",
                "componentWillMount",
                "UNSAFE_componentWillMount",
                "componentDidMount",
                "componentWillReceiveProps",
                "UNSAFE_componentWillReceiveProps",
                "shouldComponentUpdate",
                "componentWillUpdate",
                "UNSAFE_componentWillUpdate",
                "componentDidUpdate",
                "componentWillUnmount",
                "componentDidCatch",
                "getSnapshotBeforeUpdate"
            ]
        }],

        complexity: ["error", 20],
        "consistent-return": "error",
        "consistent-this": "off",
        curly: "error",
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-notation": "error",
        eqeqeq: ["error", "always"],

        "func-name-matching": ["off", "always", {
            includeCommonJSModuleExports: false,
            considerPropertyDescriptor: true
        }],

        "func-style": ["error", "expression"],
        "grouped-accessor-pairs": "error",
        "guard-for-in": "error",
        "id-denylist": "off",
        "id-length": "off",
        "id-match": "off",
        "init-declarations": "off",

        "logical-assignment-operators": ["error", "always", {
            enforceForIfStatements: true
        }],

        "max-classes-per-file": ["error", 1],
        "max-depth": ["error", 4],

        "max-lines": ["off", {
            max: 300,
            skipBlankLines: true,
            skipComments: true
        }],

        "max-lines-per-function": ["off", {
            max: 50,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true
        }],

        "max-nested-callbacks": "off",
        "max-params": ["off", 3],
        "max-statements": ["off", 10],
        "multiline-comment-style": ["error", "starred-block"],

        "new-cap": ["error", {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"]
        }],

        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-case-declarations": "error",

        "no-confusing-arrow": ["error", {
            allowParens: true
        }],

        "no-console": "error",
        "no-continue": "error",
        "no-delete-var": "error",
        "no-div-regex": "error",

        "no-else-return": ["error", {
            allowElseIf: false
        }],

        "no-empty": "error",
        "no-empty-function": "error",
        "no-empty-static-block": "off",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "error",
        "no-extra-semi": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": ["error", {
            allowLoop: true,
            allowSwitch: false
        }],

        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-magic-numbers": ["off", {
            ignore: [0, 1],
            ignoreArrayIndexes: true
        }],

        "no-mixed-operators": ["error", {
            groups: [
                ["%", "**"],
                ["%", "+"],
                ["%", "-"],
                ["%", "*"],
                ["%", "/"],
                ["**", "+"],
                ["**", "-"],
                ["**", "*"],
                ["**", "/"],
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"]
            ],
            allowSamePrecedence: false
        }],

        "no-multi-assign": "error",
        "no-multi-str": "error",
        "no-negated-condition": "off",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": ["error", {
            props: true
        }],

        "no-plusplus": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-exports": ["error", {
            restrictedNamedExports: [
                "default",
                "then"
            ]
        }],

        "no-restricted-globals": ["error", {
            name: "event",
            message: "Use local parameter instead."
        }],

        "no-restricted-imports": ["off", {
            paths: [],
            patterns: []
        }],

        "no-restricted-properties": ["error", {
            object: "arguments",
            property: "callee",
            message: "arguments.callee is deprecated"
        }, {
            object: "global",
            property: "isFinite",
            message: "Please use Number.isFinite instead"
        }, {
            object: "self",
            property: "isFinite",
            message: "Please use Number.isFinite instead"
        }, {
            object: "global",
            property: "isNaN",
            message: "Please use Number.isNaN instead"
        }, {
            object: "self",
            property: "isNaN",
            message: "Please use Number.isNaN instead"
        }, {
            property: "__defineGetter__",
            message: "Please use Object.defineProperty instead."
        }, {
            property: "__defineSetter__",
            message: "Please use Object.defineProperty instead."
        }, {
            object: "Math",
            property: "pow",
            message: "Use the exponentiation operator (**) instead."
        }],

        "no-restricted-syntax": ["error", {
            selector: "ForInStatement",
            message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
        }, {
            selector: "ForOfStatement",
            message: "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
        }, {
            selector: "LabeledStatement",
            message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
        }, {
            selector: "WithStatement",
            message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
        }],

        "no-return-assign": ["error", "always"],
        "no-script-url": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-tabs": "error",
        "no-ternary": "off",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-underscore-dangle": "error",
        "no-unneeded-ternary": ["error", {
            defaultAssignment: false
        }],

        "no-unused-expressions": ["error", {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false
        }],

        "no-useless-call": "error",
        "no-useless-catch": "off",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": ["error", {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false
        }],

        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "off",
        "no-warning-comments": ["off", {
            terms: ["todo", "fixme", "xxx"],
            location: "start"
        }],

        "object-shorthand": ["error", "always", {
            ignoreConstructors: false,
            avoidQuotes: true
        }],

        "one-var": ["error", {
            initialized: "never"
        }],

        "operator-assignment": ["error", "always"],
        "prefer-arrow-callback": "error",
        "prefer-const": ["error", {
            destructuring: "all",
            ignoreReadBeforeAssign: true
        }],

        "prefer-destructuring": ["error", {
            array: true,
            object: true
        }, {
            enforceForRenamedProperties: false
        }],

        "prefer-exponentiation-operator": "error",
        "prefer-named-capture-group": "off",
        "prefer-numeric-literals": "error",
        "prefer-object-has-own": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": ["error", {
            disallowRedundantWrapping: true
        }],

        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        radix: "error",
        "require-unicode-regexp": "off",

        "sort-imports": ["off", {
            ignoreCase: false,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
            allowSeparatedGroups: false
        }],

        "spaced-comment": ["error", "always", {
            line: {
                exceptions: ["-", "+"],
                markers: ["=", "!"]
            },
            block: {
                exceptions: ["-", "+"],
                markers: ["=", "!", ":", "::"],
                balanced: true
            }
        }],

        strict: ["error", "never"],

        "symbol-description": "error",

        "vars-on-top": "error",

        yoda: ["error", "never"]
    }
}];
