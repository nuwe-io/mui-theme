# MaterialUI theme switcher

MaterialUI 4 theme config files

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

```js
import themeMode from "@nuwe/mui-theme";
import { createTheme } from "@material-ui/core";

const theme = createTheme(themeMode["dark"]);
```

### 2 Update npm package

Checkout to the MAIN branch and modify the version of the package version

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
