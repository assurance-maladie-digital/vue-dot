# DataList

The `DataList` component is used to display tabular data.

## Usage

<Example value="en/data-list/base" />

## API

<API
  :component="{
    'props': [
      {
        name: 'title-class',
        default: `'mb-3 headline'`,
        type: 'string',
        description: 'Use this to customize the title.'
      },
      {
        name: 'title-level',
        default: '4',
        type: 'number',
        description: 'Sets the level of the title (between 1 and 6).'
      },
      {
        name: 'list',
        default: 'undefined',
        type: 'array',
        description: 'The data to display.'
      },
      {
        name: 'list-title',
        default: 'string',
        type: 'undefined',
        description: 'Sets the title of the list.'
      },
      {
        name: 'label-color',
        default: `'#757575'`,
        type: 'string',
        description: 'Sets the color of the labels, can be any CSS color.'
      },
      {
        name: 'value-color',
        default: `'currentColor'`,
        type: 'string',
        description: 'Sets the color of the values, can be any CSS color.'
      },
      {
        name: 'column',
        default: 'false',
        type: 'boolean',
        description: 'Column mode, values will appear below labels. Automatically activated on mobile.'
      },
      {
        name: 'flex',
        default: 'false',
        type: 'boolean',
        description: 'Activates flexbox and column mode.'
      },
      {
        name: 'placeholder',
        default: `'…'`,
        type: 'string',
        description: 'The text to display when no value is present, can be an empty string.'
      },
      {
        name: 'min-width',
        default: 'undefined',
        type: 'string',
        description: 'The minimum width of the component, can be any CSS value.'
      },
      {
        name: 'width',
        default: `'200px'`,
        type: 'string',
        description: 'The width of the labels.'
      }
    ]
  }"
/>

## Examples

### Column

Displays values under the labels.

<Example value="en/data-list/column" />

### Flex

Activates flexbox on list and column mode. Sections return to the line automatically.

<Example value="en/data-list/flex" />

### Customization

You can push the customization even further using classes and properties.

<Example value="en/data-list/custom" />
