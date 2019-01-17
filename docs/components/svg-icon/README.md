# SvgIcon

The `SvgIcon` component is meant to replace `VIcon` from Vuetify, which uses a font icon, and to extends his fonctionnalities.

## Usage

Icons come in five different sizes (small, standard, medium, large, and x-large), you can apply any colour or custom size.

<Example value="svg-icon/base" />

## API

<API
  :component="{
    'props': [
      {
        name: 'color',
        default: `'currentColor'`,
        type: 'string',
        description: 'Color of the icon (CSS color).'
      },
      {
        name: 'icon',
        default: 'undefined',
        type: 'string',
        description: 'Sets the icon.'
      },
      {
        name: 'large',
        default: 'false',
        type: 'boolean',
        description: 'Sets the icon size at __1.85em__.'
      },
      {
        name: 'medium',
        default: 'false',
        type: 'boolean',
        description: 'Sets the icon size at __1.5em__.'
      },
      {
        name: 'size',
        default: 'false',
        type: 'boolean',
        description: 'Sets the size of the icon with a CSS value.'
      },
      {
        name: 'small',
        default: 'false',
        type: 'boolean',
        description: 'Sets the icon size at __1em__.'
      },
      {
        name: 'x-large',
        default: 'false',
        type: 'boolean',
        description: 'Sets the icon size at __2.25em__.'
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

### Simple

The most basic use of `SvgIcon`.

<Example value="svg-icon/simple" />

### Custom icons

You can use custom icons with the default slot of `SvgIcon`.

<Example value="svg-icon/custom" />

::: tip
We recommend a size of 24 pixels, and to optimize your icon with [SVGOMG](https://jakearchibald.github.io/svgomg/).
:::

### Custom size

You can define custom icon size using the `size` property.

<Example value="svg-icon/custom-size" />
