# SvgIcon

Le composant `SvgIcon` est destiné à remplacer `VIcon` de Vuetify, qui utilise une police d'icônes, et à étendre ses fonctionnalités.

## Utilisation

Les icônes existent en cinq tailles différentes (petite, standarde, moyenne, grande et très grande), vous pouvez appliquer n’importe quelle couleur ou taille personnalisée.

<Example value="fr/svg-icon/base" />

## API

<API
  :component="{
    'props': [
      {
        name: 'color',
        default: `'currentColor'`,
        type: 'chaîne de caractères',
        description: 'Couleur de l\'icône (couleur CSS).'
      },
      {
        name: 'icon',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Définit l\'icône.'
      },
      {
        name: 'large',
        default: 'faux',
        type: 'booléen',
        description: 'Définit la taille de l\’icône à __1.85em__.'
      },
      {
        name: 'medium',
        default: 'faux',
        type: 'booléen',
        description: 'Définit la taille de l\’icône à __1.5em__.'
      },
      {
        name: 'size',
        default: 'faux',
        type: 'booléen',
        description: 'Définit la taille de l\'icône avec une valeur CSS.'
      },
      {
        name: 'small',
        default: 'faux',
        type: 'booléen',
        description: 'Définit la taille de l\’icône à __1em__.'
      },
      {
        name: 'x-large',
        default: 'faux',
        type: 'booléen',
        description: 'Définit la taille de l\’icône à __2.25em__.'
      }
    ],
    'slots': [
      {
        'name': 'défaut',
        'description': 'Emplacement Vue par défaut. Mettez du SVG pour une icône personnalisée.'
      }
    ]
  }"
/>

## Exemples

### Basique

L'utilisation la plus élémentaire de `SvgIcon`.

<Example value="svg-icon/simple" />

### Icônes personnalisées

Vous pouvez utiliser des icônes personnalisées avec l'emplacement par défaut de `SvgIcon`.

<Example value="svg-icon/custom" />

::: tip CONSEIL
Nous recommandons une taille de 24 pixels et d'optimiser votre icône avec [SVGOMG](https://jakearchibald.github.io/svgomg/).
:::

### Taille personnalisée

Vous pouvez définir la taille de l'icône personnalisée à l'aide de la propriété `size`.

<Example value="svg-icon/custom-size" />
