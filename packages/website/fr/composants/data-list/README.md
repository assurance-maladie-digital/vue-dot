# DataList

Le composant `DataList` est utilisé pour afficher des données tabulaires.

## Utilisation

<Example value="fr/data-list/base" />

## API

<API
  :component="{
    'props': [
      {
        name: 'title-class',
        default: `'mb-3 headline'`,
        type: 'chaîne de caractères',
        description: 'Utilisez ceci pour personnaliser le titre.'
      },
      {
        name: 'title-level',
        default: '4',
        type: 'nombre',
        description: 'Définit le niveau du titre (entre 1 et 6).'
      },
      {
        name: 'list',
        default: 'indéfini',
        type: 'tableau',
        description: 'Les données à afficher.'
      },
      {
        name: 'list-title',
        default: 'chaîne de caractères',
        type: 'indéfini',
        description: 'Définit le titre de la liste.'
      },
      {
        name: 'label-color',
        default: `'#757575'`,
        type: 'chaîne de caractères',
        description: 'Définit la couleur des étiquettes, peut être n\’importe quelle couleur CSS.'
      },
      {
        name: 'value-color',
        default: `'currentColor'`,
        type: 'chaîne de caractères',
        description: 'Définit la couleur des valeurs, peut être n\’importe quelle couleur CSS.'
      },
      {
        name: 'column',
        default: 'faux',
        type: 'booléen',
        description: 'En mode colonne, les valeurs apparaîtront sous les étiquettes. Activé automatiquement sur mobile.'
      },
      {
        name: 'flex',
        default: 'faux',
        type: 'booléen',
        description: 'Active flexbox et le mode colonne.'
      },
      {
        name: 'placeholder',
        default: `'…'`,
        type: 'chaîne de caractères',
        description: 'Le texte à afficher lorsqu\'aucune valeur n\'est présente, peut être une chaîne de caractères vide.'
      },
      {
        name: 'min-width',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'La largeur minimale du composant, peut être n\'importe quelle valeur CSS.'
      },
      {
        name: 'width',
        default: `'200px'`,
        type: 'chaîne de caractères',
        description: 'La largeur des étiquettes.'
      }
    ]
  }"
/>

## Exemples

### Colonne

Affiche les valeurs sous les étiquettes.

<Example value="fr/data-list/column" />

### Flex

Active flexbox sur la liste et le mode colonne. Les sections retounent à la ligne automatiquement.

<Example value="fr/data-list/flex" />

### Personnalisation

Vous pouvez pousser la personnalisation encore plus loin en utilisant des classes et des propriétés.

<Example value="fr/data-list/custom" />
