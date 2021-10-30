# MaterialUI theme switcher

MaterialUI 4 theme switcher and provider

![GitHub](https://img.shields.io/github/license/nuwe-io/mui-theme)
![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
![Coverage](coverage-badge.svg)

## Install the package

```shell
    npm i @nuwe/mui-theme
```

### Local install

Clone the repo

```shell
git clone https://github.com/nuwe-io/mui-theme
```

Install dependencies

```shell
npm install
```

## Usage

- Running locally:

```shell
    npm run storybook
```

## Deploy & public to NPM & Chromatic

CD/CI setup with vercel

Deplopy and managed with [storybook](https://storybook.js.org) & [chromatic](https://chromatic.com)

### 1 Publish and check with chromatic

- For publishing the library to chromatic:

```shell
    npm run chromatic # Publish Storybook and run visual tests
```

### 2 Update npm package

Checkout to the MAIN branch and modify the version of the package version

Build with rollup:

```shell
    npm run build-lib
```

After that login and push to npm

```shell
    npm login
```

```shell
    npm publish --access public
```

Push to the branch

```shell
git add .
git commit --m "RELEASE VERSION X.X.X"
git push --origin main
```

This will automtically trigger vercel

## Contact info

You can get in touch via:

[Edgar Gago Carrillo](https://www.linkedin.com/in/gagocarrilloedgar/)
[Add Contributor name here](https://www.linkedin.com/in/name/)

or

> Edgar Gago | hello@nuwe.io

## Licence

[MIT](https://opensource.org/licenses/MIT)
