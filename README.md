# pty-create-webcomponent

`pty-create-webcomponent` is scaffolding tool to generate web component modules using [Svelte](https://svelte.dev/), [Storybook](http://storybook.com), [Jest](https://jestjs.io/) and built-in theming. It employs [degit](https://github.com/Rich-Harris/degit) under the hood.

## Usage
Use [npx](https://www.npmjs.com/package/npx) to execute the CLI without the need of installing any tools locally.

![ezgif com-video-to-gif (23)](https://user-images.githubusercontent.com/6104164/82881532-1bb82e00-9f40-11ea-8472-4a96b470251c.gif)

```bash
npx pty-create-webcomponent
```

Open the newly created project and install all the dependencies.
```bash
cd {new-web-component}
npm install
```

Fire up a local intance of Storybook to start the visual TDD development.
```bash
npm start
```

## Changelog

See  [the Releases section of our GitHub project](https://github.com/vbence86/pty-create-webcomponent/releases) for changelogs. 
