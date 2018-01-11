# vue2 typescript starter
> This project is a practice project for creating admin page.
> This admin pase consists of a login and main page.

## Environment
> Development Tool
* Visual Studio Code - Insiders

> Framework
* Vue.js

> Language
* TypeScript

> UI Configuration
* postcss modules
* css grid layout
* css flex layout

## Build Setup
> Packages
- ESLint
- React Typescript Toolbox
- TSLint
- TSLint Vue
- TypeScript Toolbox
- Vetur
- (Vim)

## Structure Description
```text
app/
├─ build/
├─ config/
├─ docs // Documents organized while doing the project.
├─ node_modules/
├─ public/
├─ src/
│  └─ assets/
│  └─ components/
│     └─ screen // The files that make up the screen.
│        └─ Login.vue // Login page
│        └─ Main.vue  // Main page
│     └─ shared // The separated component files.
│        └─ RoundBtn.vue       // abount button
│        └─ TextInputLabel.vue // about p & input form
│  └─ router
│     └─ index.ts // when you add the file to the screen/, you need to import it and set root.
│  └─ App.vue
│  └─ main.ts
├─ static/
├─ test/
├─ typings/
├─ .editorconfig
├─ .firebaserc
├─ .gitignore
├─ .postcssrc.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ tsconfig.json
└─ tslint.json
```

## Running the Project
The following commands are needed to execute the project.
```bash
$ npm install
$ npm start
```
`npm install` downloads the dependency modules using the dependencies value in the `package.json`.<br>
`npm start` runs the server and you can check at `http://localhost:8080`.

## Pages Flow
It consists of a login page and a main page.
- Login Page<br>
  Click the login button to go to the main page.
- Main Page<br>
  Click the logout button inside the sidebar to go to the login page.<br>
  
Each page is implemented in mobile and desktop version. This can be checked by resizing the browser window.

## Code Description
### Media Query Code Template
Depending on the resolution a single source code can be implemented to present multiple views.
```css
<style>
@custom-media --desktop (width > 768px);
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  
  @media (--desktop) {
    grid-template-columns: 1fr 523px 1fr;
    grid-template-rows: 1fr 378px 1fr;
  }
</style>
```
You can declares with the size you want, such as `@custom-media --desktop (width > 769px)`. (Mobile devices have a resolution of about 769px.)<br>
When used, you can define the code for `width > 769px` using `@media (--desktop)`.

### Computed Property
> screen/Login.vue
```html, javascript
<template>
  <p>Login With: {{email}}</p>
  <text-input-label
    label='EMAIL'
    v-bind:value='email'
    type='email'
    placeholder='이메일을 입력해주세요.'
    v-on:value='updateEmail'
  />
</template>

<script>
import Vue from 'vue';
import TextInputLabel from '../shared/TextInputLabel.vue';

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      email: '',
    };
  },
  components: {
    TextInputLabel,
  },
  methods: {
    updateEmail (newData: string) {
      this.email = newData;
    },
  }
});
</script>
```
When bindig data, you can use the “Mustache” syntax(double curly braces) like `<p>Login With: {{email}}</p>`. The mustache tag will be updated whenever the data object's property changes.<br>
Frequently used forms modularize so that it can be used anywhere else. If the file name is `TextInputLabel`, tag it as `text-input-label` and define the required field. Then you must import the file and put it into the 'components' in the `<script>` section.<br>
There is 'Directives' to reactively apply when the value of its expression changes.(eg. `v-bind`, `v-on`, ..)<br>
`v-bind:` is a transfer factor and it can be simplify as `:`.
`v-on` is a directive which receives an event and it can be simplify as `@`.

> shared/TextInputLabel.vue
```javascript
<template>
  <div class="text-input-label">
    <p>{{ label }}</p>
    <input
      :value='value'
      :type='type'
      :placeholder='placeholder'
      v-on:input='onValChanged'
    />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'TextInputLabel',
  props: {
    label: String,
    value: String,
    type: {
      default: 'text',
      type: String,
    },
    placeholder: {
      default: 'write a value.',
      type: String,
    },
  },
  methods: {
    onValChanged (e: any) {
      this.$emit('value', e.target.value);
    }
  }
});
</script>
```
This defines the properties commonly used at each form and make it available in many places.<br>
`$emit` can share data or events between components. In this code, `$emit` passes the email value that the user has input to the component called it.
 
### Button Click Event
```javascript
<template>
  <div class="wrapper">
    <div class="sidebar" v-bind:style="tabClass">
      <div class="toggle-btn" @click="showSidebar">
        ...
      </div>
      ...
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Main',
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    tabClass(): object {
      return {
        left: !this.isOpen ? '-200px' : '0px',
      };
    },
  },
  methods: {
    showSidebar () {
      this.isOpen = !this.isOpen;
    },
  }
});
</script>
```
This code is implemented so that when you click the button, the navigation bar appears on the left.<br>
It check the opening status of the navigation bar by using the parameter `isOpen`.
If you add `console.log(`showSidebar: ${this.isOpen}`);` to the code, you can check the status of `isOpen` in the consol window.<br>
When you click the button, the 'style' of `<div class="sidebar">` should change.
So, you add `v-bind:style="tabClass"` to bind 'style' and 'tabClass' is defined within the 'computed'.
