module.exports = {
    root: true,
    extends: ['react-app', 'react-app/jest', 'airbnb-typescript', 'airbnb/hooks'],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2022,
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
    },
    plugins: ['react-hooks', 'react', 'cypress', 'simple-import-sort', 'dirnames', 'unicorn'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
            },
        },
    },
    rules: {
        'jsx-a11y/label-has-associated-control': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                modifiers: ['destructured'],
                format: ['camelCase', 'snake_case', 'UPPER_CASE'],
            },
        ],
        quotes: ['warn', 'single', { avoidEscape: true }],
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': ['warn', { before: false, after: true }],
        'comma-style': ['warn', 'last'],
        'computed-property-spacing': ['warn', 'never'],
        'func-call-spacing': ['warn', 'never'],
        'key-spacing': ['warn'],
        'no-trailing-spaces': ['error'],
        'no-whitespace-before-property': ['warn'],
        'padding-line-between-statements': [
            'warn',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'always', prev: '*', next: 'return' },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],
        'quote-props': ['warn', 'as-needed'],
        semi: ['warn'],
        'semi-spacing': ['warn'],
        'semi-style': ['warn'],
        'space-before-blocks': ['warn'],
        'space-in-parens': ['warn'],
        'space-infix-ops': ['warn'],
        'space-unary-ops': ['warn'],
        'switch-colon-spacing': ['warn'],
        'no-shadow': 'off',
        // This rules conflicts with prettier formatter
        'operator-linebreak': 'off',
        'implicit-arrow-linebreak': 'off',
        'max-len': 'off',
        indent: 'off',
        '@typescript-eslint/indent': 'off',

        // Override default airbnb rules
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-negated-condition': 'warn',
        'default-case': 'off',
        'no-use-before-define': 'off',

        // code smell detection
        complexity: ['warn', 30],
        'max-nested-callbacks': 'warn',
        'no-restricted-properties': [
            'error',
            {
                object: 'it',
                property: 'only',
                message: "Did you forget to remove 'only' from this test?",
            },
            {
                object: 'describe',
                property: 'only',
                message: "Did you forget to remove 'only' from this test?",
            },
            {
                object: 'context',
                property: 'only',
                message: "Did you forget to remove 'only' from this test?",
            },
            {
                object: 'test',
                property: 'only',
                message: "Did you forget to remove 'only' from this test?",
            },
        ],

        // React
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'react/jsx-fragments': ['warn'],
        'react/static-property-placement': ['error', 'static public field'],
        'react/state-in-constructor': ['error', 'never'],
        'react/prop-types': 'off',
        'react/sort-comp': 'off',
        'react/require-default-props': 'off',
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-props-no-spreading': 'off',
        'react/prefer-stateless-function': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-one-expression-per-line': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks/rules-of-hooks': 'off',

        // A11Y
        'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],

        // typescript
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/array-type': [
            'error',
            { default: 'array-simple', readonly: 'array-simple' },
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: false, classes: true, variables: true },
        ],

        // Imports, file extensions
        'import/no-webpack-loader-syntax': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/no-cycle': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-useless-path-segments': [
            'error',
            {
                noUselessIndex: true,
            },
        ],
        'dirnames/match-kebab-case': 'error',
        'unicorn/filename-case': [
            'error',
            {
                case: 'kebabCase',
            },
        ],
        'simple-import-sort/imports': [
            'warn',
            {
                groups: [
                    // Node.js builtins. You could also generate this regex if you use a .js config.
                    // For example: ^(${require("module").builtinModules.join("|")})(/|$)
                    [
                        '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
                    ],
                    // Packages. react related packages come first.
                    ['^react', '^@?\\w'],
                    // Root path for project
                    ['^#'],
                    // Parent imports. Put .. last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and . last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Style imports.
                    ['^.+\\.s?css$'],
                ],
            },
        ],
    },
    ignorePatterns: ['.eslintrc.js'],
};