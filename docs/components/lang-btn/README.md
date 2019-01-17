# LangBtn

The `LangBtn` component is a combination of a button, a menu and a list from Vuetify components to provide a simple "choose language" button.

You can customize it like a `VBtn`, see [Vuetify](https://vuetifyjs.com/en/components/buttons).

## Usage

<Example value="lang-btn/base" />

## API

<API
  :component="{
    'props': [
      {
        name: 'available-languages',
        default: `'*'`,
        type: 'array | string',
        description: 'List of languages the user can choose from. Default is every language.'
      },
      {
        name: 'label',
        default: `'Choix de la langue. Actuellement :'`,
        type: 'string',
        description: 'Value for __aria-label__ property, provides an indication of the purpose of the button to assistive technologies.'
      },
      {
        name: 'flags',
        default: 'false',
        type: 'boolean',
        description: 'Activates flags mode, the flags images will appear in the languages list. Works in combination with __flags-url__ and looks for SVG images in the public folder named following ISO 639-1.'
      },
      {
        name: 'flags-url',
        default: `'/img/flags/'`,
        type: 'string',
        description: 'Path to flags folder located in __public__ folder.'
      },
      {
        name: 'display-text-btn',
        default: 'true',
        type: 'boolean',
        description: 'Shows the current language in the button.'
      },
      {
        name: 'display-arrow',
        default: 'true',
        type: 'boolean',
        description: 'Displays a down arrow in the button.'
      },
      {
        name: 'value',
        default: `'fr'`,
        type: 'string',
        description: 'Current language.'
      },
      {
        name: 'absolute',
        default: 'false',
        type: 'boolean',
        description: 'Position the component absolutely.'
      },
      {
        name: 'dark',
        default: 'false',
        type: 'boolean',
        description: 'Applies the dark theme variant.'
      },
      {
        name: 'disabled',
        default: 'false',
        type: 'boolean',
        description: 'Makes the button disabled.'
      },
      {
        name: 'fixed',
        default: 'false',
        type: 'boolean',
        description: 'Position the element fixed.'
      },
      {
        name: 'left',
        default: 'false',
        type: 'boolean',
        description: 'Align the component towards the left.'
      },
      {
        name: 'allow-overflow',
        default: 'true',
        type: 'boolean',
        description: 'Removes overflow re-positioning for the content.'
      },
      {
        name: 'auto',
        default: 'flase',
        type: 'boolean',
        description: 'Centers list on selected element.'
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
        default: 'true',
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
        name: 'full-width',
        default: 'false',
        type: 'boolean',
        description: 'Forces 100% width.'
      },
      {
        name: 'lazy',
        default: 'false',
        type: 'boolean',
        description: 'Conditionally renders content on mounted. Will only render content if activated.'
      },
      {
        name: 'max-height',
        default: `'auto'`,
        type: 'number | string',
        description: 'Sets the maximum height for the content.'
      },
      {
        name: 'max-width',
        default: `'auto'`,
        type: 'number | string',
        description: 'Sets the maximum width for the content.'
      },
      {
        name: 'min-width',
        default: 'undefined',
        type: 'number | string',
        description: 'Sets the minimum width for the content.'
      },
      {
        name: 'nudge-bottom',
        default: '0',
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
        default: '0',
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
        name: 'offset-overflow',
        default: 'false',
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
        type: 'boolean',
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
        name: 'transition',
        default: `'v-menu-transition'`,
        type: 'string',
        description: 'Sets the component transition. Can be one of the built in transitions or your own.'
      },
      {
        name: 'menu-value',
        default: 'undefined',
        type: 'any',
        description: 'Controls visibility of the menu.'
      },
      {
        name: 'z-index',
        default: 'undefined',
        type: 'number | string',
        description: 'The z-index used for the component.'
      },
      {
        name: 'menu-left',
        default: 'false',
        type: 'boolean',
        description: 'Align the menu towards the left.'
      },
      {
        name: 'menu-bottom',
        default: 'false',
        type: 'boolean',
        description: 'Align the menu towards the bottom.'
      },
      {
        name: 'menu-right',
        default: 'false',
        type: 'boolean',
        description: 'Align the menu towards the right.'
      },
      {
        name: 'menu-top',
        default: 'false',
        type: 'boolean',
        description: 'Align the menu towards the top.'
      },
      {
        name: 'block',
        default: 'false',
        type: 'boolean',
        description: 'Expands the button to 100% of available space.'
      },
      {
        name: 'color',
        default: `'currentColor'`,
        type: 'string',
        description: 'Applies specified color to the button. It can be any CSS color.'
      },
      {
        name: 'depressed',
        default: 'false',
        type: 'boolean',
        description: 'Removes the button box shadow.'
      },
      {
        name: 'fab',
        default: 'false',
        type: 'boolean',
        description: 'Makes the button round.'
      },
      {
        name: 'flat',
        default: 'false',
        type: 'boolean',
        description: 'Removes the button background color.'
      },
      {
        name: 'icon',
        default: 'false',
        type: 'boolean',
        description: 'Designates the button as icon: round and flat.'
      },
      {
        name: 'large',
        default: 'false',
        type: 'boolean',
        description: 'Large size button.'
      },
      {
        name: 'light',
        default: 'false',
        type: 'boolean',
        description: 'Applies the light theme variant.'
      },
      {
        name: 'loading',
        default: 'false',
        type: 'boolean',
        description: 'Adds a loading icon animation.'
      },
      {
        name: 'outline',
        default: 'true',
        type: 'boolean',
        description: 'Button has an outline.'
      },
      {
        name: 'ripple',
        default: 'true',
        type: 'boolean | object',
        description: 'Applies the __v-ripple__ directive.'
      },
      {
        name: 'round',
        default: 'false',
        type: 'boolean',
        description: 'Button will be round on the sides.'
      },
      {
        name: 'small',
        default: 'false',
        type: 'boolean',
        description: 'Small size button.'
      },
      {
        name: 'tag',
        default: `'button'`,
        type: 'string',
        description: 'Specify a custom tag to use on the component.'
      },
      {
        name: 'type',
        default: `'button'`,
        type: 'string',
        description: 'Set the button\'s type attribute.'
      },
      {
        name: 'btn-value',
        default: 'undefined',
        type: 'any',
        description: 'Controls visibility of the button.'
      },
      {
        name: 'left',
        default: 'false',
        type: 'boolean',
        description: 'Align the component towards the left.'
      },
      {
        name: 'bottom',
        default: 'false',
        type: 'boolean',
        description: 'Align the component towards the bottom.'
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
      }
    ],
    'events': [
      {
        'name': 'change',
        'description': 'The chosen language.'
      }
    ]
  }"
/>
