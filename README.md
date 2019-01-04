# react starter 2019

![image](https://github.com/CodeDoorHQ/codedoor-advisor-serverless/blob/master/docs/images/splash.png)

This project uses **NPM** for dependency management.

## Technology

```
  - Emotion
  - Rebass
  - dotenv
  - Jest
  - Eslint
  - Prettier
  - Stylelint
  - Formik
  - React-Testing-Tools
```

## Writing class components

1. In order to produce consitent react class component code, add React APIs at the top, and custom methods below the `render()`

```
Note: With the new Hooks API coming soon, it probably makes sense write function components more, in general.
```

```
  class MyComponent extends PureComponent {
    statics
    lifecycles
    state
    render()
    ------
    MyMethod1
    MyMethod2
    ...
  }
```

2. Use `PureComponent` by default unless you need to optimize manually with `shouldComponentUpdate` 99% of the time we should be using PureComponent for class components.

3. Add a displayNames `static displayName = "MyComponent";``

4. Be generous with comments there are various IDE plugins that can help automate it like this: [Document this](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)

5. In prop type definitions, don't use `object`, `array` or `any`. During development it's fine if you are not sure what the structure is. But 90% we should be using `arrayOf`, `shape`, `oneOfType` etc..
