import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from 'typescript-eslint';
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default tseslint.config(
    {
        ignores: [
            "**/node_modules/**",
            "**/dist/**",
            "**/coverage/**",
            "**/temp/**",
        ]
    },

    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: ["tsconfig.json", "e2e/tsconfig.json"],
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        rules: {
            "@typescript-eslint/consistent-type-definitions": "error",
            "brace-style": ["error", "1tbs"],
            "valid-typeof": "error",
        }
    },

    ...compat.extends(
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
    ).map(config => ({
        ...config,
        files: ["src/**/*.ts"]
    })),
    {
        files: ["src/**/*.ts"],
        rules: {
            "@angular-eslint/component-selector": ["error", {
                type: "element",
                prefix: "systelab",
                style: "kebab-case",
            }],
            "@angular-eslint/directive-selector": ["error", {
                type: "attribute",
                prefix: "systelab",
                style: "camelCase",
            }],
        }
    },

    ...compat.extends("plugin:@angular-eslint/template/recommended").map(config => ({
        ...config,
        files: ["**/*.html"]
    }))
);
