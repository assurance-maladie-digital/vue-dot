Translations: [Français](./gh-docs/fr/CONTRIBUTING.md)

# Contributing to Vue Dot

🎉 First off, thanks for taking the time to contribute!

# How to contribute?

## Reporting bugs

Bugs are reported using [GitHub issues](https://guides.github.com/features/issues/).

Before creating a new issue, [check if your bug hasn't alreaydy been reported](https://github.com/assurance-maladie-digital/vue-dot/issues?utf8=%E2%9C%93&q=is%3Aissue). If it's the case and you don't find a solution in the comments, contribute to the issue instead of creating a new one.

### Submitting a (good) bug report

Explain the problem and include additional details to help maintainers reproduce the problem:

-   **Use a clear an descriptive title**
-   **Describe the exact steps which reproduce the problem**
-   **Provide specific examples to demonstrate the steps.** Include links to files or projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).

## Suggesting changes

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/).

Before creating enhancement suggestions, check the [Roadmap](https://assurance-maladie-digital.github.io/vue-dot/guide/roadmap.html) to see if what you want is already planned. If you don't see your suggestion, [create a new issue](#submitting-a-good-bug-report).

## Code contribution

You can look for issues labelled with `help-wanted` if you're not sure where to start!

### Local development

To start the development server, use the following command:

```bash
yarn serve
```

It will show you the Playground, which is the file `App.vue`.

For running tests:

-   unit

```bash
yarn test:unit
```

-   e2e

```bash
yarn test:e2e
```

### Documentation

To start the development server for documentation:

```bash
yarn docs:dev
```

See [VuePress](https://vuepress.vuejs.org/guide/) for help.

### 🚨 Other commands should be executed only on master branch

## Styleguide

### Git commit messages

-   Use English language
-   Use the present tense ("Add feature" not "Added feature")
-   Use the imperative mood ("Move cursor to…" not "Moves cursor to…")
-   Start the commit message with an applicable emoji from [Gitmoji](https://gitmoji.carloscuesta.me/)

### Vue

The configuration is based on the [recommended configuration (Priority C)](https://vuejs.org/v2/style-guide/#Priority-C-Recommended), with the following changes:

-   **no-console**: allowed in `development`
-   **no-debugger**: allowed in `development`
-   **vue/html-indent**: `tab`
-   **indent**: `off`
-   **vue/no-spaces-around-equal-signs-in-attribute**: `true`
-   **semi**: `always`
-   **space-before-function-paren**: `never`
-   **vue/script-indent**: `tab`
    -   **baseIndent**: `1`
    -   **switchCase**: `1`

### TypeScript

The configuration is based on the [recommended configuration](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts), with the following changes:

-   **quotemark**: `single`
-   **indent**: `tabs`
-   **interface-name**: `false`
-   **ordered-imports**: `false`
-   **object-literal-sort-keys**: `false`
-   **no-consecutive-blank-lines**: `false`
-   **semicolon**: `always`
-   **space-before-function-paren**: `never`
-   **trailing-comma**: `never`
-   **no-shadowed-variable**: `false`
