# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

## Notes

新增專案

```bash
schematics blank --name=sample1
```

運作專案

```bash
schematics .:sample1
```

* --name=Aria 帶入option參數
* --dry-run=false 預設為false，不會真的建立檔案

```bash
schematics .:sample1 --name=Aria --dry-run=false
```
