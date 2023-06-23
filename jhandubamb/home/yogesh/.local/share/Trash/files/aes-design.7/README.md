# AES Component Library

## Features

- [StencilJS](https://stenciljs.com/) web components
- [Public Storybook](https://phase2tech.gitlab.io/aes/aes-design/)
- Web Component Analyzer
- Tailwind

## Workflow

Build out a design system in Stencil web components using Storybook and Tailwind. Easily publish the design system as a versioned NPM package on every merge to the `main` branch. Install and update that package to a "consumer" application like a Drupal/Wordpress theme or React/Vue/HTML project.

## Requirements

- Node 14.5

Run `nvm use` to ensure project is on the correct Node.

## Development

First, `npm install`.

There are two ways to work locally:

| Name       | Description                     | Speed     | Command                       |
| ---------- | ------------------------------- | --------- | ----------------------------- |
| Dev server | Only a locally served HTML file | Very fast | `npm run start`               |
| Storybook  | Full Storybook, auto-reloading  | Medium    | `npm run storybook.dev.watch` |

To scaffold out a new component, run `npm run generate` and follow the prompts. All components in this library are prefixed with `aes-`.

## Build

There are 2 major artifacts to build:

| Name               | Description                     | Path      | Command                       |
| ------------------ | ------------------------------- | --------- | ----------------------------- |
| Stencil components | Ready-to-use web components     | Medium    | `npm run storybook.dev.watch` |
| Storybook          | Only a locally served HTML file | Very fast | `npm run start`               |

## Package publishing/consuming

Note the `package` step within `.gitlab-ci.yml`. Packages should be published to the package repo of your choice on merge to the `main` branch. All repositories within GitLab can publish to the [GitLab package registry](https://docs.gitlab.com/ee/user/packages/).

The consuming system will need a `.npmrc` file that alllows authenticating to the [GitLab private package repository](https://docs.gitlab.com/ee/user/packages/npm_registry/index.html). See the companion Drupal project to this design system for details.

## Docksal

This is optional, but recommended. Using Docksal, this project will be accessible via the local domain aes-design.docksal. To use the NPM CLI in Docksal, type `fin` before the command.

1. Install [Docker](https://www.docker.com/)
2. Install [Docksal](https://docksal.io/)
3. In your terminal, navigate to the this directory and run `fin init`.

### Local Builds

- [Stencil Build](http://aes-design.docksal)
- [Storybook](http://storybook.aes-design.docksal)

## Local Commands

### Documenting Components

We are using Web Component Analyzer (WCA) to read documentation directly from our component files to provide readable documentation for Storybook. This is possible through specific JSDoc comments when declaring a component. [Read up on how to write documentation here](https://github.com/runem/web-component-analyzer#-how-to-document-your-components-using-jsdoc).

## Committing

We are using Commit Lint to make sure our messages conform to the correct standard so the Semantic Release script knows which version number to bump on release. Read more about this [here](https://github.com/semantic-release/semantic-release). Until we release v1.0.0, we should only be using `fix`, `feat`, `chore`, `refactor`, and `docs`. Prior to v1.0.0 do not include the words `BREAKING CHANGE` in a commit message or body. Below is a brief explanation of use cases for the different labels:

- **feat**: Use this flag when you are adding a new feature. For example, adding a new component or additional functionality to an existing component would trigger this flag.
- **fix**: Use this flag when you are fixing a problem or bug within the existing codebase.
- **chore**: Use this flag for changes that do not affect a built artifact. This could include: updating dev dependencies, changing CI configuration, updating linting configuration, etc.
- **refactor**: Use this flag when making changes that does not fix a bug or add a new feature.
- **docs**: Use this flag when making changes that only affect documentation such as the readmes.

## Using this Library in Consumer Systems

The consuming system needs to _copy_ the design system folder out of `node_modules` to a local directory in order to consume. These files should not be run through a bundler, as they are already optimized for lazy loading and minification.

```html
<link rel="stylesheet" href="dist/aesds/aesds.css" />

<script type="module" src="dist/aesds/aesds.esm.js"></script>
<script nomodule src="dist/aesds/aesds.js"></script>
```

## Web Components Best Practices

When working with Stencil web components, consider the following.

## Use the stencil command to generate new components

```
npm run new
```

Ensure your component starts with the 3-letter prefix of your project.

## Prefer Slots over Props

When building components the usage of slots is generally preferred over props. When using slots, the slotted content will still display in the browser if the user has JavaScript disabled which can potentially benefit SEO as well. Using slots can also reduce the implementation complexity of the component. For example, when dealing with responsive images, a component that is prop driven will need to know the various image assets to load at various screen sizes and assemble that within the component. However, by providing an image slot, the consumer can be responsible for this concern in a manner that works best with its systems.

### Reflect Props

When declaring props for a given component Stencil allows an [options object](https://stenciljs.com/docs/properties#prop-options). Depending on the usaged of the prop, you may want to set `{ reflect: true }`. Setting a prop to reflect ensures that if the prop is set via JavaScript, including JSX within another Stencil component, that the corresponding `attribute` will be added to the Host element.

```
// Setting this prop via JS or JSX will not assign the corresponding attribute on the component
@Prop(): numCols: 1 | 2 | 3 | 4

// Setting this prop via JS or JSX will update the corresponding attribute on the component
@Prop({ reflect: true }): numCols: 1 | 2 | 3 | 4
```

Reflecting properties is essential if the presence of attributes are used for styling within the CSS file (ex: the `aes-grid` component. If a property is only used for logic within the Web component it does not need to be reflected (ex: the `aes-cta` component).
