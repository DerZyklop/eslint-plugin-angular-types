# eslint-plugin-angular-types

----

# ATTENTION!
CURRENTLY THIS IS FOR MY PERSONAL USE ONLY. IT PROBABLY MAKES NO SENSE FOR OTHER PROJECTS THAN MY OWN. Release 1.0.0 will be for public.

----

Refactor, improve and maintain TypeScript types in your Angular project.

## Install

```sh
npm install --save-dev eslint eslint-plugin-angular-types
```

## Usage

Minimal `.eslintrc.json`:

```json
{
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "angular-types"
    ],
    "rules": {
        "angular-types/prefer-form-group-get": "error"
    },
    …
}
```

## Rules

| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| :-- | :-- |
| [prefer-form-group-get](docs/rules/prefer-form-group-get.md) | Prefer fromGroup.get('foo') over formGroup.controls['foo'] for better (null) types. |
