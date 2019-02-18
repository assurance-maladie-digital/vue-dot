# Délai

La directive `v-debounce` vous permet de différer une mise à jour de `v-model` sur un champ de texte.

<Example value="fr/directives/v-debounce" />

## API

<API
  :component="{
    options: [
      {
        name: 'valeur',
        default: '500',
        type: 'nombre',
        description: '__Avec des champs natifs__ : nombre de millisecondes à attendre avant d\'émettre un événement.'
      },
      {
        name: 'valeur',
        default: 'indéfini',
        type: 'fonction',
        description: '__Avec des champs personnalisés__: callback l\'évènement exécuté après le délai.'
      },
      {
        name: 'arg:délai',
        default: '500',
        type: 'nombre',
        description: 'Utilisé avec des composants personnalisés. Nombre de millisecondes à attendre avant d\'émettre un événement.'
      }
    ]
  }"
/>
