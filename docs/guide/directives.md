# Directives

VueDot is providing common and useful directives that are missing in Vue.js or tools such as Vuetify.

You can [learn more about directives](https://vuejs.org/v2/guide/custom-directive.html) in the Vue.js docs.

## v-debounce

The directive `v-debounce` allows you to defer an `v-model` update on an `input` field by an amount of time specified in milliseconds.

### Usage

``` html
<input v-model.lazy="input" v-debounce="1000">
```

If no argument is provided, default delay is `500ms`.

<!-- ::: tip
You can use the function `debounce` from `@/functions/debounce` in your scripts.
::: -->

#### Custom components

The problem when using custom components as `input`, is that you cannot use the modifiers on `v-model`.
To face this, you have to pass a callback to the directive and set the time with a modifier.`

Example with `v-text-field` from Vuetify (see the demo for all the code):

``` html
<v-text-field
    :value="message"
    label="Type here"
    v-debounce.1000="setValue"
    @change="setValue"
/>
```

### Demo
<br>
<CodePen
	id="GXegXL"
	:height="370"
	title="v-debounce"
/>

### How It Works

It's using the `debounce` function from `@/functions/debounce`, which takes as parameters a callback and a time value. This function returns a function that contains a `setTimeout`, and each time this returned function is called, it clears the previous `setTimeout`, so when the event fires multiple times, the callback is only called once.

For the directive itself, when it's inserted, it finds the input, get the interval, then checks if it has been updated and do not perform anything if this isn't the case. If the test passes, we set a callback for the `oninput` event on the element with the `debounce` function, and send it a callback that dispatch the `change` event, or execute the callback passed as parameter.<br>
It's why, even with the `lazy` modifier on `v-model`, input still updates without blur.
