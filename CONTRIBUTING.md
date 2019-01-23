# Contributing

First off, thanks for taking the time to contribute! This is really important to help us improve the library.

## Report bugs

Bugs are reported using [GitHub issues](https://guides.github.com/features/issues/).

Before creating a new issue, [check if your bug hasn't alreaydy been reported](https://github.com/assurance-maladie-digital/vue-dot/issues?utf8=%E2%9C%93&q=is%3Aissue). If it's the case and you don't find a solution in the comments, contribute to the issue instead of creating a new one.

### Submit a (good) bug report

Explain the problem and include additional details to help maintainers reproduce the problem:

-   **Use a clear and descriptive title**
-   **Describe the exact steps which reproduce the problem**
-   **Provide specific examples to demonstrate the steps.** Include links to files or projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).

<br>

[Go to issues](https://github.com/assurance-maladie-digital/vue-dot/issues)

## Suggest changes

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/).

Before creating enhancement suggestions, check the Roadmap to see if what you want is already planned. If you don't see your suggestion, [create a new issue](#submitting-a-good-bug-report).

## Code contribution

You can look for issues labelled with `help-wanted` if you're not sure where to start!

### Local development

#### Setup environment

Setting up your dev environment is easy! To start fork [VueDot](https://github.com/assurance-maladie-digital/vue-dot/issues) into your own repo.

```bash
// Clone your forked repo
$ git clone <forked-vue-dot-repo>

// Change to your new vue-dot directory
$ cd vue-dot

// Checkout the branch you are working on
$ git checkout <branch name>

// Install dependencies
$ yarn

// Launch the development server
$ yarn serve
```

#### Documentation

To work on documentation, start the development server of Vuepress.

```bash
yarn docs:dev
```

See [VuePress documentation](https://vuepress.vuejs.org/guide/) for help.

Other commands should be executed only on master branch.

### Code style

You need to respect the code style defined in `editorconfig` and to resolve any warning or error thrown by `TSLint` or `ESLint`.

#### Commit guidelines

Look at the previous commits for inspiration! But you need it to be explicit, and it should follow these rules:

-   Write it in English
-   Start with an emoji from [gitmoji](https://gitmoji.carloscuesta.me/) corresponding to the changes made
-   Do not end the subject line with a period
-   Capitalize the subject line
-   Use the imperative mood

#### Pull requests

When creating a pull request, follow and complete the provided template.
