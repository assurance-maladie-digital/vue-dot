# Custom themes

VueDot provides a **theme system** in order to answer the need of **matching multiple graphic charts** across teams and projects.

The themes allows you to **totally change the look and feel** of the VueDot library by **globally configure components**, **adding colors**, **icons** and writing **custom CSS**.

By default, no theme is used so it will be pure Vuetify.

[Learn how themes were developed](./how/)

## Usage

A theme is a JSON file that you need to pass as an option when using VueDot. By convention it is named `theme.json`.

<Code>
```ts
// main.ts
import { default as theme } from './theme.json';

Vue.use(VueDot, {
	theme
});
```
</Code>

## Creation

### Minimal structure

A theme can be empty, but still needs to have a name, a version and the config object.

<Code>
```json
{
	"name": "digital",
	"version": "0.0.1",
	"config": {}
}
```
</Code>

### Styles

You can define global styles using the `styles` property.

<Code>
```json
"config": {
	"styles": {
		".v-alert": {
			"top": "0",
			"width": "100%",
			"position": "absolute"
		}
	}
}
```
</Code>

::: warning
The pattern is a selector containing properties and values. This cannot be nested.
:::

### Typography

You can define CSS related to typography here to make things more readable. Theses styles can only be classes or HTML typography elements.

<Code>
```json
"typography": {
	"styles": {
		".application" : {
			"font-family": "'Open Sans', sans-serif",
			"line-height": "1.5"
		},
		"h1": {
			"font-family": "OSP-DIN, sans-serif",
			"font-size": "2.5rem",
			"font-weight": "400",
			"text-transform": "uppercase",
			"color": "#01b9f5"
		}
	}
}
```
</Code>
<br>
Allowed tags:

- `h1`
- `h2`
- `h3`
- `h4`
- `h5`
- `h6`
- `p`
- `span`
- `i`
- `b`
- `a`
- `abbr`
- `small`
- `mark`
- `blockquote`
- `time`
- `sup`
- `sub`
- `strong`
- `code`
- `bdb`
- `pre`
- `q`
- `ins`
- `del`
- `cite`

### Colors

You can override the default colors or define custom ones using Vuetify theme. These colors will be available as classes and via `this.$vuetify.theme` (see [Vuetify documentation](https://vuetifyjs.com/en/framework/theme#customizing)).

<Code>
```json
"colors": {
	"primary": "#084870",
	"secondary": "#424242",
	"accent": "#01b9f5",
	"error": "#941900",
	"info": "#1cb0ba",
	"success": "#4caf50",
	"warning": "#b35a00",
	"shades": {
		"base": "#808080",
		"darken1": "#333",
		"black": "#000",
		"lighten1": "#ccc",
		"lighten2": "#e0e0e0",
		"lighten3": "#ededed",
		"lighten4": "#f5f5f5",
		"lighten5": "#fafafa",
		"white": "#fff"
	}
}
```
</Code>

### Icons

You can define custom icons for the `XSvgIcon` component. For each icon, you need to define the `name` and `svg` properties.

<Code>
```json
"icons": [
	{
		"name": "vuejs",
		"svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\"><path fill=\"#4dba87\" d=\"M237.42 86.66L207.19 139l-30.22-52.35H76.3l130.9 226.69L338.07 86.66z\"/><path fill=\"#435466\" d=\"M237.42 86.66L207.19 139l-30.22-52.35h-48.3l78.52 136 78.53-136z\"/></svg>"
	}
]
```
</Code>

::: warning
The `svg` property is a string so the quote character needs to be escaped.
:::

### Final file

Here's the final file with all the examples above, don't hesitate to try it!

<Code>
```json
{
	"name": "digital",
	"version": "0.0.1",
	"config": {
		"styles": {
			".v-alert": {
				"top": "0",
				"width": "100%",
				"position": "absolute"
			}
		},
		"typography": {
			"styles": {
				".application" : {
					"font-family": "'Open Sans', sans-serif",
					"line-height": "1.5"
				},
				"h1": {
					"font-family": "OSP-DIN, sans-serif",
					"font-size": "2.5rem",
					"font-weight": "400",
					"text-transform": "uppercase",
					"color": "#01b9f5"
				}
			}
		},
		"colors": {
			"primary": "#084870",
			"secondary": "#424242",
			"accent": "#01b9f5",
			"error": "#941900",
			"info": "#1cb0ba",
			"success": "#4caf50",
			"warning": "#b35a00",
			"shades": {
				"base": "#808080",
				"darken1": "#333",
				"black": "#000",
				"lighten1": "#ccc",
				"lighten2": "#e0e0e0",
				"lighten3": "#ededed",
				"lighten4": "#f5f5f5",
				"lighten5": "#fafafa",
				"white": "#fff"
			}
		},
		"icons": [
			{
				"name": "svg",
				"svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\"><path fill=\"#4dba87\" d=\"M237.42 86.66L207.19 139l-30.22-52.35H76.3l130.9 226.69L338.07 86.66z\"/><path fill=\"#435466\" d=\"M237.42 86.66L207.19 139l-30.22-52.35h-48.3l78.52 136 78.53-136z\"/></svg>"
			}
		]
	}
}
```
</Code>

### Components

Component customization will be available in Vuetify 2.0 at Q2 2019, check [Vuetify next](https://next.vuetifyjs.com/en/) for more informations.

::: tip INFORMATION
Component configuration has been removed from the theme from version 1.6.
:::
