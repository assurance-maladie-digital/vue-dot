# Thèmes personnalisés

VueDot fournit un **système de thèmes** afin de répondre au besoin de faire **correspondre plusieurs chartes graphiques** de différentes équipes et projets.

Les thèmes vous permettent de **changer totalement l'apparence** de la bibliothèque VueDot en **configurant globalement les composants**, en **ajoutant des couleurs**, **des icônes** et en écrivant **des CSS personnalisées**.

Par défaut, aucun thème n’est utilisé, ce sera donc le style de Vuetify.

[Apprenez comment les thèmes ont été développés](./comment/)

## Utilisation

Un thème est un fichier JSON que vous devez transmettre en option lorsque vous utilisez VueDot. Par convention, il s'appelle `theme.json`.

<Code>
```ts
// main.ts
import { default as theme } from './theme.json';

Vue.use(VueDot, {
	theme
});
```
</Code>

## Création

### Structure minimale

Un thème peut être vide, mais doit toujours avoir un nom, une version et l'objet config.

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

Vous pouvez définir des styles globaux en utilisant la propriété `styles`.

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

::: warning ATTENTION
Le modèle est un sélecteur contenant des propriétés et des valeurs. Cela ne peut pas être imbriqué.
:::

### Typographie

Vous pouvez définir ici les CSS liées à la typographie pour rendre les choses plus lisibles. Ces styles ne peuvent être que des classes ou des éléments de typographie HTML.

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
Balises autorisées :

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

### Couleurs

Vous pouvez remplacer les couleurs par défaut ou définir des couleurs personnalisées à l'aide du thème Vuetify. Ces couleurs seront disponibles en tant que classes et via `this.$vuetify.theme` (voir la [documentation de Vuetify](https://vuetifyjs.com/en/framework/theme#customizing)).

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

### Icônes

Vous pouvez définir des icônes personnalisées pour le composant `XSvgIcon`. Pour chaque icône, vous devez définir les propriétés `name` et` svg`.

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

::: warning ATTENTION
La propriété `svg` est une chaîne de caractères, le caractère de citation doit donc être échappé.
:::

### Composants

Vous pouvez configurer les composants à l'aide d'attributs Vuetify, et même leur ajouter des propriétés afin d'étendre les possibilités de style.

<Code>
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
</Code>

Ici, nous configurons le composant `XBtn` en définissant des valeurs pour les propriétés du composant. Les valeurs définies dans `default` seront toujours appliquées.

Nous définissons des valeurs dans `primary`, `secondary` et `tertiary`, elles généreront des propriétés que vous pourrez utiliser sur le composant. Ces propriétés générées peuvent en étendre une autre, de sorte qu'elle héritera des valeurs.

Vous pouvez également définir un tableau de classes qui sera appliqué au composant, et idem pour les styles.

<Code>
```html
<XBtn secondary />
```
</Code>

Vous pouvez maintenant utiliser le composant `XBtn` avec l'attribut `secondary`.

### Fichier final

Voici le fichier final avec tous les exemples ci-dessus, n'hésitez pas à l'essayer !

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
		],
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
	}
}
```
</Code>
