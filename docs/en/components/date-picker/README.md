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
      },
      {
        name: 'allowed-dates',
        default: 'null',
        type: 'function',
        description: 'Restricts which dates can be selected.'
      },
      {
        name: 'day-format',
        default: 'null',
        type: 'function',
        description: 'Allows you to customize the format of the day string that appears in the date table. Called with date (ISO 8601 string) arguments.'
      },
      {
        name: 'event-color',
        default: `'warning'`,
        type: 'string | function | object',
        description: 'Sets the color for event dot. It can be __string__ (all events will have the same color) or __object__ where attribute is the event date and value is boolean/color/array of colors for specified date or __function__ taking date as a parameter and returning boolean/color/array of colors for that date'
      },
      {
        name: 'events',
        default: 'null',
        type: 'array | function | object',
        description: 'Array of dates or object defining events or colors or function returning boolean/color/array of colors.'
      },
      {
        name: 'first-day-of-week',
        default: '1',
        type: 'string | number',
        description: 'Sets the first day of the week, starting with 1 for Monday.'
      },
      {
        name: 'header-color',
        default: 'undefined',
        type: 'string',
        description: 'Defines the header color. If not specified it will use the color defined by __color__ prop or the default picker color.'
      },
      {
        name: 'header-date-format',
        default: 'undefined',
        type: 'string',
        description: 'Allows you to customize the format of the month string that appears in the header of the calendar. Called with date (ISO 8601 string) arguments.'
      },
      {
        name: 'landscape',
        default: 'false',
        type: 'boolean',
        description: 'Orients picker horizontal.'
      },
      {
        name: 'max',
        default: 'function | undefined',
        type: 'string',
        description: 'Maximum allowed date/month (ISO 8601 format). If __birthdate__ is setted, it\'s the current date.'
      },
      {
        name: 'min',
        default: 'function | undefined',
        type: 'string',
        description: 'Minimum allowed date/month (ISO 8601 format). If __birthdate__ is setted, it\'s __\'1950-01-01\'__.'
      },
      {
        name: 'month-format',
        default: 'null',
        type: 'function',
        description: 'Formatting function used for displaying months in the months table. Called with date (ISO 8601 string) arguments.'
      },
      {
        name: 'multiple',
        default: 'false',
        type: 'boolean',
        description: 'Allow the selection of multiple dates.'
      },
      {
        name: 'next-icon',
        default: `'$vuetify.icons.next'`,
        type: 'string',
        description: 'Sets the icon for next month/year button.'
      },
      {
        name: 'no-title',
        default: 'true',
        type: 'boolean',
        description: 'Hide the picker title.'
      },
      {
        name: 'picker-date',
        default: 'undefined',
        type: 'string',
        description: 'Displayed year/month.'
      },
      {
        name: 'prev-icon',
        default: `'$vuetify.icons.prev'`,
        type: 'string',
        description: 'Sets the icon for previous month/year button.'
      },
      {
        name: 'reactive',
        default: 'false',
        type: 'boolean',
        description: 'Updates the picker model when changing months/years automatically.'
      },
      {
        name: 'scrollable',
        default: 'false',
        type: 'boolean',
        description: 'Allows changing displayed month with mouse scroll.'
      },
      {
        name: 'show-current',
        default: 'true',
        type: 'boolean | string',
        description: 'Toggles visibility of the current date/month outline or shows the provided date/month as a current.'
      },
      {
        name: 'show-week',
        default: 'false',
        type: 'boolean',
        description: 'Toggles visibility of the week numbers in the body of the calendar.'
      },
      {
        name: 'title-date-format',
        default: 'null',
        type: 'function',
        description: 'Allows you to customize the format of the date string that appears in the title of the date picker. Called with date (ISO 8601 string) arguments.'
      },
      {
        name: 'picker-type',
        default: `'date'`,
        type: 'sting',
        description: 'Determines the type of the picker. __date__ for date picker, __month__ for month picker.'
      },
      {
        name: 'weekday-format',
        default: 'null',
        type: 'function',
        description: 'Allows you to customize the format of the weekday string that appears in the body of the calendar. Called with date (ISO 8601 string) arguments.'
      },
      {
        name: 'width',
        default: '300',
        type: 'number | string',
        description: 'The width of the content.'
      },
      {
        name: 'year-format',
        default: 'null',
        type: 'function',
        description: 'Allows you to customize the format of the year string that appears in the header of the calendar. Called with date (ISO 8601 string) arguments.'
      },
      {
        name: 'year-icon',
        default: 'undefined',
        type: 'string',
        description: 'Sets the icon in the year selection button.'
      },
      {
        name: 'absolute',
        default: 'false',
        type: 'boolean',
        description: 'Position the menu absolutely.'
      },
      {
        name: 'allow-overflow',
        default: 'false',
        type: 'boolean',
        description: 'Removes overflow re-positioning for the content.'
      },
      {
        name: 'auto',
        default: 'false',
        type: 'boolean',
        description: 'Centers list on selected element.'
      },
      {
        name: 'bottom',
        default: 'false',
        type: 'boolean',
        description: 'Align the menu towards the bottom.'
      },
      {
        name: 'close-delay',
        default: '0',
        type: 'number | string',
        description: 'Milliseconds to wait before closing component.'
      },
      {
        name: 'close-on-click',
        default: 'true',
        type: 'boolean',
        description: 'Designates if menu should close on outside-activator click.'
      },
      {
        name: 'close-on-content-click',
        default: 'false',
        type: 'boolean',
        description: 'Designates if menu should close when its content is clicked.'
      },
      {
        name: 'content-class',
        default: 'undefined',
        type: 'string',
        description: 'Applies a custom class to the detached element. This is useful because the content is moved to the end of the app and is not targettable by classes passed directly on the component.'
      },
      {
        name: 'disable-keys',
        default: 'false',
        type: 'boolean',
        description: 'Removes all keyboard interaction.'
      },
      {
        name: 'fixed',
        default: 'false',
        type: 'boolean',
        description: 'Position the element fixed.'
      },
      {
        name: 'lazy',
        default: 'true',
        type: 'boolean',
        description: 'Conditionally renders content on mounted. Will only render content if activated.'
      },
      {
        name: 'left',
        default: 'false',
        type: 'boolean',
        description: 'Align the menu towards the left.'
      },
      {
        name: 'max-height',
        default: `'auto'`,
        type: 'number | string',
        description: 'Sets the maximum height for the menu content.'
      },
      {
        name: 'max-width',
        default: `'auto'`,
        type: 'number | string',
        description: 'Sets the maximum width for the menu content.'
      },
      {
        name: 'min-width',
        default: `'300px'`,
        type: 'number | string',
        description: 'Sets the minimum width for the menu content.'
      },
      {
        name: 'nudge-bottom',
        default: '55',
        type: 'number | string',
        description: 'Nudge the content to the bottom.'
      },
      {
        name: 'nudge-left',
        default: '0',
        type: 'number | string',
        description: 'Nudge the content to the left.'
      },
      {
        name: 'nudge-right',
        default: '40',
        type: 'number | string',
        description: 'Nudge the content to the right.'
      },
      {
        name: 'nudge-top',
        default: '0',
        type: 'number | string',
        description: 'Nudge the content to the top.'
      },
      {
        name: 'nudge-width',
        default: '0',
        type: 'number | string',
        description: 'Nudge the content width.'
      },
      {
        name: 'offset-overflow',
        default: 'true',
        type: 'boolean',
        description: 'Causes the component to flip to the opposite side when repositioned due to overflow.'
      },
      {
        name: 'offset-x',
        default: 'false',
        type: 'boolean',
        description: 'Offset the menu on the x-axis. Works in conjunction with direction left/right.'
      },
      {
        name: 'offset-y',
        default: 'true',
        type: 'boolean',
        description: 'Offset the menu on the y-axis. Works in conjunction with direction top/bottom.'
      },
      {
        name: 'open-delay',
        default: '0',
        type: 'number | string',
        description: 'Milliseconds to wait before opening component.'
      },
      {
        name: 'open-on-click',
        default: 'true',
        type: 'boolean',
        description: 'Designates whether menu should open on activator click.'
      },
      {
        name: 'open-on-hover',
        default: 'false',
        type: 'boolean',
        description: 'Designates whether menu should open on activator hover.'
      },
      {
        name: 'origin',
        default: `'top left'`,
        type: 'string',
        description: 'Sets the transition origin.'
      },
      {
        name: 'position-x',
        default: 'undefined',
        type: 'number',
        description: 'Used to position the content when not using an activator slot.'
      },
      {
        name: 'position-y',
        default: 'undefined',
        type: 'number',
        description: 'Used to position the content when not using an activator slot.'
      },
      {
        name: 'return-value',
        default: 'undefined',
        type: 'boolean | number | string',
        description: 'Used to return the value of menu.'
      },
      {
        name: 'right',
        default: 'false',
        type: 'boolean',
        description: 'Align the component towards the right.'
      },
      {
        name: 'top',
        default: 'false',
        type: 'boolean',
        description: 'Align the content towards the top.'
      },
      {
        name: 'transition',
        default: `'scale-transition'`,
        type: 'string',
        description: 'Sets the component transition. Can be one of the built in transitions or your own.'
      },
      {
        name: 'z-index',
        default: '1',
        type: 'number | string',
        description: 'The z-index used for the component.'
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
