# Themes

The themes allows you to totally change the look and feel of the VueDot library by globally configure components, adding colors, icons and writing custom CSS!

## Use a theme

A theme is a JSON file that you need to pass as an option when using VueDot. By convention it is named `theme.json`.

```ts
import { default as theme } from './theme.json';

Vue.use(VueDot, {
	theme
});
```

## Create a theme

In version 1.5.0, there is no theme generator, so this needs to be done manually.
The best way is to clone the project, and use the Playground.

### The minimal structure

A theme can be empty, but still needs to have a name, a version and the config object.

```json
{
	"name": "digital",
	"version": "0.0.1",
	"config": {}
}
```

### Styles

You can define global styles using the `styles` property.

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

The pattern is a selector containing properties and values. This cannot be nested.

```json
"selector": {
	"propery1": "value1",
	"propery2": "value2",
}
```

### Typography

You can define CSS related to typography here to make things more readable.
Theses styles can only be classes or HTML typography elements (such as paragraphs, quotes, etc).

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

### Colors

You can override the default colors or define custom ones using Vuetify theme.
These colors will be available as classes and via `this.$vuetify.theme` (see [Vuetify documentation](https://vuetifyjs.com/en/style/theme#customizing)).

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

### Icons

You can define custom icons for the XSvgIcon component.
For each icon, you need to define a `name` and a `svg`.

```json
"icons": [
	{
		"name": "svg",
		"svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\"><path fill=\"#4dba87\" d=\"M237.42 86.66L207.19 139l-30.22-52.35H76.3l130.9 226.69L338.07 86.66z\"/><path fill=\"#435466\" d=\"M237.42 86.66L207.19 139l-30.22-52.35h-48.3l78.52 136 78.53-136z\"/></svg>"
	}
]
```

The `svg` is a string so the `"` character needs to be escaped.

### Components

You can configure components, and even add properties to them in order to extend the styling possibilities.

```json
"components": {
	"XBtn": {
		"default": {
			"ripple": false
		},
		"primary": {
			"round": true,
			"depressed": true,
			"dark": true,
			"color": "#0087cf",
			"classes": [
				"font-weight-regular"
			]
		},
		"secondary": {
			"extends": "primary",
			"outline": true
		},
		"tertiary": {
			"extends": "primary",
			"round": false,
			"small": true,
			"flat": true,
			"styles": {
				"min-width": 0,
				"height": "auto"
			},
			"classes": [
				"px-2",
				"py-1"
			]
		}
	}
}
```

Here we are configuring the XBtn component by setting values for the component properties.
Values defined in `default` will be always applied.

We're setting values in `primary`, `secondary` and `tertiary`, these will generate properties you can use on the component.
These generated properties can extends an other one so it will heritate the values.

You can also define an array of classes that will be applied to the component, and so one for the styles.

So you can use XBtn like this:

```html
<XBtn secondary />
```
