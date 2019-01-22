# DatePicker

The `DatePicker` from Vuetify, but simplified and with more options.

## Usage

By default it comes in a field with menu and icon.

<Example value="en/date-picker/base" />

## API

<API
  :component="{
    'props': [
      {
        name: 'color',
        default: `'primary'`,
        type: 'string',
        description: 'The main color of the input.'
      },
      {
        name: 'birthdate',
        default: 'false',
        type: 'boolean',
        description: 'Makes the picker a birthdate picker: select year first, then month and day.'
      },
      {
        name: 'dark',
        default: 'false',
        type: 'boolean',
        description: 'Applies the dark theme variant.'
      },
      {
        name: 'full-width',
        default: 'false',
        type: 'boolean',
        description: 'Forces 100% width.'
      },
      {
        name: 'readonly',
        default: 'false',
        type: 'boolean',
        description: 'Makes the picker readonly (doesnt\'t allow to select new date).'
      },
      {
        name: 'value',
        default: 'undefined',
        type: 'string',
        description: 'Sets the value of the input and the picker.'
      },
      {
        name: 'light',
        default: 'false',
        type: 'boolean',
        description: 'Applies the dark theme variant.'
      },
      {
        name: 'date-format',
        default: `'DD/MM/YYYY'`,
        type: 'string',
        description: 'Changes the format of the date in the TextField.'
      },
      {
        name: 'date-format-return',
        default: `'DD/MM/YYYY'`,
        type: 'string',
        description: 'Changes the format of the date returned.'
      },
      {
        name: 'locale',
        default: `'fr-fr'`,
        type: 'string',
        description: 'Changes the the language of the picker.'
      },
      {
        name: 'append-icon',
        default: 'undefined',
        type: 'string',
        description: 'Appends an icon to the component.'
      },
      {
        name: 'append-outer-icon',
        default: 'undefined',
        type: 'string',
        description: 'Appends an icon to the outside of the input.'
      },
      {
        name: 'autofocus',
        default: 'false',
        type: 'boolean',
        description: 'Enables autofocus.'
      },
      {
        name: 'background-color',
        default: 'undefined',
        type: 'string',
        description: 'Changes the background-color of the input.'
      },
      {
        name: 'box',
        default: 'false',
        type: 'boolean',
        description: 'Applies the alternate box input style.'
      },
      {
        name: 'browser-autocomplete',
        default: 'undefined',
        type: 'string',
        description: 'Configures the default __input__ autocomplete attribute'
      },
      {
        name: 'clear-icon',
        default: `'$vuetify.icons.clear'`,
        type: 'string',
        description: 'Applied when using __clearable__ and the input is dirty.'
      },
      {
        name: 'clearable',
        default: 'false',
        type: 'boolean',
        description: 'Add input clear functionality, default icon is Material Icons __clear__.'
      },
      {
        name: 'counter',
        default: 'undefined',
        type: 'boolean | number | string',
        description: 'Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.'
      },
      {
        name: 'disabled',
        default: 'false',
        type: 'boolean',
        description: 'Disable the input.'
      },
      {
        name: 'dont-fill-mask-blanks',
        default: 'false',
        type: 'boolean',
        description: 'Disables the automatic character display when typing.'
      },
      {
        name: 'error',
        default: 'false',
        type: 'boolean',
        description: 'Puts the input in a manual error state.'
      },
      {
        name: 'error-count',
        default: '1',
        type: 'number | string',
        description: 'The total number of errors that should display at once.'
      },
      {
        name: 'error-messages',
        default: '[]',
        type: 'string | array',
        description: 'Puts the input in an error state and passes through custom error messsages. Will be combined with any validations that occur from the __rules__ prop. This field will not trigger validation.'
      },
      {
        name: 'flat',
        default: 'false',
        type: 'boolean',
        description: 'Removes elevation (shadow) added to element when using the __solo__ or __solo-inverted__ props.'
      },
      {
        name: 'height',
        default: 'undefined',
        type: 'number | string',
        description: 'Sets the input height.'
      },
      {
        name: 'hide-details',
        default: 'false',
        type: 'boolean',
        description: 'Hides hint and validation errors.'
      },
      {
        name: 'hint',
        default: `'Format JJ/MM/AAAA'`,
        type: 'string',
        description: 'Hint text.'
      },
      {
        name: 'label',
        default: `'Date'`,
        type: 'string',
        description: 'Sets input label.'
      },
      {
        name: 'loading',
        default: 'false',
        type: 'boolean | string',
        description: 'Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color: __primary__, __secondary__, __success__, __info__, __warning__, __error__) or a Boolean which uses the component __color__ (set by color prop if it\'s supported by the component) or the primary color'
      },
      {
        name: 'mask',
        default: 'undefined',
        type: 'string',
        description: 'Apply a custom character mask to the input. By default it uses the __date-format__ property.'
      },
      {
        name: 'outline',
        default: 'false',
        type: 'boolean',
        description: 'Applies the outline style to the input.'
      },
      {
        name: 'persistent-hint',
        default: 'true',
        type: 'boolean',
        description: 'Forces hint to always be visible.'
      },
      {
        name: 'placeholder',
        default: 'undefined',
        type: 'string',
        description: 'Sets the input\’s placeholder text.'
      },
      {
        name: 'prefix',
        default: 'undefined',
        type: 'string',
        description: 'Displays prefix text.'
      },
	  {
        name: 'prepend-icon',
        default: 'undefined',
        type: 'string',
        description: 'Prepends an icon to the component. By default there is button containing a calendar icon.'
      },
      {
        name: 'prepend-icon-color',
        default: `'#808080'`,
        type: 'string',
        description: 'Sets the color of the prepended icon.'
      },
      {
        name: 'prepend-icon-cb',
        default: 'null',
        type: 'function',
        description: 'Sets a callback when using a custom icon.'
      },
      {
        name: 'return-masked-value',
        default: 'true',
        type: 'boolean',
        description: 'Returns the unmodified masked string.'
      },
      {
        name: 'reverse',
        default: 'false',
        type: 'boolean',
        description: 'Reverses the input orientation.'
      },
      {
        name: 'rules',
        default: '[]',
        type: 'array',
        description: 'Accepts an array of functions that return either True or a String with an error message.'
      },
      {
        name: 'single-line',
        default: 'false',
        type: 'boolean',
        description: 'Label does not move on focus/dirty.'
      },
      {
        name: 'solo',
        default: 'false',
        type: 'boolean',
        description: 'Changes the style of the input.'
      },
      {
        name: 'solo-inverted',
        default: 'false',
        type: 'boolean',
        description: 'Reduces element opacity until focused.'
      },
      {
        name: 'success',
        default: 'false',
        type: 'boolean',
        description: 'Puts the input in a manual success state.'
      },
      {
        name: 'success-messages',
        default: '[]',
        type: 'string | array | object',
        description: 'Puts the input in a success state and passes through custom success messsages.'
      },
      {
        name: 'suffix',
        default: 'undefined',
        type: 'suffix',
        description: 'Displays suffix text.'
      },
      {
        name: 'type',
        default: `'text'`,
        type: 'string',
        description: 'Sets input type.'
      },
      {
        name: 'validate-on-blur',
        default: 'false',
        type: 'boolean',
        description: 'Delays validation until blur event.'
      }
    ],
    'events': [
      {
        'name': 'change',
        'description': 'The updated bound model.'
      }
    ]
  }"
/>

## Examples

### Birthdate

You can turn the picker into a birthdate picker (select year, then mounth and finally date).

<Example value="en/date-picker/birthdate" />

### Formats

You can specify a display format, and another format for the returned value. It uses [day.js API](https://github.com/iamkun/dayjs) which is Moment.js-compatible.

<Example value="en/date-picker/format" />

### i18n

You can use any locale from [dayjs](https://github.com/iamkun/dayjs/tree/master/src/locale).

<Example value="en/date-picker/i18n" />
