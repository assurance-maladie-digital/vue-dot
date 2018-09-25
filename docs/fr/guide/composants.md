# Composants

VueDot is providing common and useful directives that are missing in Vue.js or tools such as Vuetify.

You can [learn more about directives](https://vuejs.org/v2/guide/custom-directive.html) in the Vue.js docs.

## v-debounce

The directive `v-debounce` allows you to defer an `v-model` update on an `input` field by an amount of time specified in milliseconds.

### Usage

``` html
<input v-model.lazy="input" v-debounce="1000">
```

If no argument is provided, default delay is `500ms`.

<!-- ::: tip CONSEIL
You can use the function `debounce` from `@/functions/debounce` in your scripts.
::: -->

### Todo

We need to improve this directive so it can be used with any event, do not fear to help us on this!

### How It Works

It's using the `debounce` function from `@/functions/debounce`, which takes as parameters a callback and a time value. This function returns a function that contains a `setTimeout`, and each time this returned function is called, it clears the previous `setTimeout`, so when the event fires multiple times, the callback is only called once.

For the directive itself, when it's inserted, it checks if the interval has been updated and do not perform anything if this isn't the case. If the test passes, we set a callback for the `oninput` event on the element with the `debounce` function, and send it a callback that dispatch the `change` event.<br>
It's why, even with the `lazy` modifier on `v-model`, input still updates without blur.

## Roadmap

No new directives planned yet, but tell us what you need!
