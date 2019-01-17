# Debounce

The `v-debounce` directive allows you to defer an `v-model` update on an input field by an amount of time.

<Example value="directives/v-debounce" />

## API

<API
  :component="{
    options: [
      {
        name: 'value',
        default: '500',
        type: 'number',
        description: '__With native inputs__: number of milliseconds to wait before emitting event.'
      },
      {
        name: 'value',
        default: 'undefined',
        type: 'function',
        description: '__With custom inputs__: callback of the debounced event.'
      },
      {
        name: 'arg:delay',
        default: '500',
        type: 'number',
        description: 'Used with custom components. Number of milliseconds to wait before emitting event.'
      }
    ]
  }"
/>
