# pty-create-webcomponent

`pty-create-webcomponent` is scaffolding tool to generate web component modules using [Svelte](https://svelte.dev/), [Storybook](http://storybook.com), [Jest](https://jestjs.io/) and built-in theming. It employs [degit](https://github.com/Rich-Harris/degit) under the hood.

## Usage
Use [npx](https://www.npmjs.com/package/npx) to execute the CLI without the need of installing any tools locally.

![ezgif com-video-to-gif (23)](https://user-images.githubusercontent.com/6104164/82881532-1bb82e00-9f40-11ea-8472-4a96b470251c.gif)

```bash
npx pty-create-webcomponent
```

The newly generated web component module can be found in the given module name folder.

```bash
cd my-web-component
```

## Get started

Enter to the module root and install the dependencies...

```bash
npm install
```

...then start [Storybook](https://rollupjs.org):

```bash
npm start
```
<img width="1440" alt="Screenshot 2020-05-26 at 12 41 40" src="https://user-images.githubusercontent.com/6104164/82892136-37770080-9f4f-11ea-82b3-3eb0f69d69e0.png">


You should see your web component running in a [Storybook](https://rollupjs.org) test environment. It uses live-reload so all changes will be automatically reflected if any of the files in `src` is updated.

## Build

To create an optimised sharable version of the component:

```bash
npm run build
```

This will generate an optimised bundle into the **`dist`** folder that can be loaded in the browser to register the web component.


## Test

To test the code against our styleguides...

```bash
npm run lint
```

...then run the unit tests

```bash
npm test
```

<img width="509" alt="Screenshot 2020-05-26 at 12 42 15" src="https://user-images.githubusercontent.com/6104164/82892106-2d550200-9f4f-11ea-835c-8e8f53171660.png">

...after then unit tests pass [bundlesize](https://github.com/siddharthkp/bundlesize) checks the ultimate size of the minimized bundle against the predefined budget size in `bundlesize.config.json`.

### Styleguide

The code styleguide is defined in [`.eslintrc`](https://eslint.org/docs/user-guide/configuring). It extends the wastly popular **[airbnb](https://www.npmjs.com/package/eslint-config-airbnb)** styleguide and forces all functions to be equipped with [jsdoc](https://jsdoc.app/) annotations.

### JSDoc Annotations

All functions / methods in the project must be annotated with valid [jsdoc](https://jsdoc.app/) headers.
```js
/**
 * Adds the given parameters and returns the result.
 * @memberOf my-component
 * @param {number} a - first number to add
 * @param {number} b - second number to add
 * @returns {number}
 * @example
 * add(15, 20); // 35
 */
const add = (a, b) => {
	return parseInt(a, 10) + parseInt(b, 10);
}
```

### Snapshots

[Jest](https://jestjs.io/) utilizes the [Storybook's](http://storybook.com) storyshots integration to automatically generate snapshots. If you intentionally update the component and the snapshots do not match any longer you could ask [Jest](https://jestjs.io/) to regenerate the snapshots using the following command:

To regenerate the snapshots
```bash
npm test -- -u
```

## Usage of the generated web component

```html
<!-- From CDN -->
<script async type="module" src="your-cdn/my-component.js"></script>

<!-- From local installation -->
<script async type="module" src="/node_modules/my-component/dist/my-component.js"></script>

...

<body>
  <my-component />
</body>
```

```js
// as a common js module
import MyComponent from 'my-component';
````

## Themes

In order to apply global styles on the web components you must place a **`<meta>`** tag onto your HTML document containing a URL to your global stylesheet. The web component will pick this up and apply all these global styles into the ShadowDOM during the mounting phase.

```html
<head>
  <meta property="pty:themeURL" content="https://cdn.com/betonline.css" />
</head>

...

<body>
  <my-component />

  ...
  <script async type="module" src="https://cdn.com/my-component.js"></script>
</body>
```

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, this theme library is maintained under  [the Semantic Versioning guidelines](https://semver.org/). 

See  [the Releases section of our GitHub project](https://github.com/vbence86/pty-themes/releases)  for changelogs for each release version. 

## Changelog

See  [the Releases section of our GitHub project](https://github.com/vbence86/pty-create-webcomponent/releases) for changelogs. 
