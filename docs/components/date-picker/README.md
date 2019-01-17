# DatePicker

The `VDatePicker` from Vuetify, but simplified and with more options.

## Usage

By default it comes in a field with menu and icon.

<Example value="date-picker/base" />

## API

<API
  :component="{
    'props': [
      {
        name: 'color',
        default: `'primary'`,
        type: 'string',
        description: ''
      },
      {
        name: 'birthdate',
        default: 'false',
        type: 'boolean',
        description: ''
      },
      {
        name: 'dark',
        default: 'false',
        type: 'boolean',
        description: ''
      },
      {
        name: 'full-width',
        default: 'false',
        type: 'boolean',
        description: ''
      },
      {
        name: 'readonly',
        default: 'false',
        type: 'boolean',
        description: ''
      },
      {
        name: 'value',
        default: 'undefined',
        type: 'string',
        description: ''
      },
      {
        name: 'light',
        default: 'false',
        type: 'boolean',
        description: ''
      },
      {
        name: 'date-format',
        default: `'DD/MM/YYYY'`,
        type: 'string',
        description: ''
      },
      {
        name: 'date-format-return',
        default: `'DD/MM/YYYY'`,
        type: 'string',
        description: ''
      },
      {
        name: 'locale',
        default: `'fr-fr'`,
        type: 'string',
        description: ''
      }
    ],
    'slots': [
      {
        'name': 'default',
        'description': 'Default Vue slot. Put SVG for custom icon.'
      }
    ]
  }"
/>

## Examples

### Birthdate

You can turn the picker into a birthdate picker (select year, then mounth and finally date).

<Example value="date-picker/birthdate" />

### Formats

You can specify a display format, and another format for the returned value. It uses [day.js API](https://github.com/iamkun/dayjs) which is Moment.js-compatible.

<Example value="date-picker/format" />

### i18n

You can use any locale from [dayjs](https://github.com/iamkun/dayjs/tree/master/src/locale).

<Example value="date-picker/i18n" />
