# LangBtn

Le composant `LangBtn` est une combinaison d'un bouton, d'un menu et d'une liste de Vuetify pour fournir un bouton « choisir la langue ».

Vous pouvez le personnaliser comme un `VBtn`, voir [Vuetify](https://vuetifyjs.com/en/components/buttons).

## Utilisation

<Example value="lang-btn/base" />

## API

<API
  :component="{
    'props': [
      {
        name: 'available-languages',
        default: `'*'`,
        type: 'tableau | chaîne de caractères',
        description: 'Liste des langues que l\'utilisateur peut choisir. La valeur par défaut est chaque langue.'
      },
      {
        name: 'label',
        default: `'Choix de la langue. Actuellement :'`,
        type: 'chaîne de caractères',
        description: 'Valeur de la propriété __aria-label__, fournit une indication de la fonction du bouton pour les technologies d\'assistance.'
      },
      {
        name: 'flags',
        default: 'faux',
        type: 'booléen',
        description: 'Active le mode avec les drapeaux, les images des drapeaux apparaîtront dans la liste des langues. Fonctionne en combinaison avec __flags-url__ et recherche les images SVG dans le dossier public nommée suivant ISO 639-1.'
      },
      {
        name: 'flags-url',
        default: `'/img/flags/'`,
        type: 'chaîne de caractères',
        description: 'Chemin du dossier des drapeaux situé dans le dossier __public__.'
      },
      {
        name: 'display-text-btn',
        default: 'vrai',
        type: 'booléen',
        description: 'Affiche la langue actuelle dans le bouton.'
      },
      {
        name: 'display-arrow',
        default: 'vrai',
        type: 'booléen',
        description: 'Affiche une flèche vers le bas dans le bouton.'
      },
      {
        name: 'value',
        default: `'fr'`,
        type: 'chaîne de caractères',
        description: 'Langue actuelle.'
      },
      {
        name: 'absolute',
        default: 'faux',
        type: 'booléen',
        description: 'Positionne le bouton absolument.'
      },
      {
        name: 'block',
        default: 'faux',
        type: 'booléen',
        description: 'Étend le bouton à 100% de l\'espace disponible.'
      },
      {
        name: 'bottom',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le composant vers le bas.'
      },
      {
        name: 'color',
        default: `'#333'`,
        type: 'chaîne de caractères',
        description: 'Applique la couleur spécifiée au bouton. Cela peut être n\'importe quelle couleur CSS.'
      },
      {
        name: 'dark',
        default: 'faux',
        type: 'booléen',
        description: 'Applique la variante de thème sombre.'
      },
      {
        name: 'depressed',
        default: 'faux',
        type: 'booléen',
        description: 'Supprime l\'ombre du bouton.'
      },
      {
        name: 'disabled',
        default: 'faux',
        type: 'booléen',
        description: 'Rend le bouton désactivé.'
      },
      {
        name: 'fab',
        default: 'faux',
        type: 'booléen',
        description: 'Rend le bouton rond.'
      },
      {
        name: 'fixed',
        default: 'faux',
        type: 'booléen',
        description: 'Place l\'élément fixe.'
      },
      {
        name: 'flat',
        default: 'faux',
        type: 'booléen',
        description: 'Supprime la couleur d\'arrière-plan du bouton.'
      },
      {
        name: 'icon',
        default: 'faux',
        type: 'booléen',
        description: 'Désigne le bouton sous forme d\’icône : rond et plat.'
      },
      {
        name: 'large',
        default: 'faux',
        type: 'booléen',
        description: 'Bouton de grande taille.'
      },
      {
        name: 'left',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le composant vers la gauche.'
      },
      {
        name: 'light',
        default: 'faux',
        type: 'booléen',
        description: 'Applique la variante de thème light.'
      },
      {
        name: 'loading',
        default: 'faux',
        type: 'booléen',
        description: 'Ajoute une animation d\'icône de chargement.'
      },
      {
        name: 'outline',
        default: 'vrai',
        type: 'booléen',
        description: 'Le bouton a un contour.'
      },
      {
        name: 'right',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le composant vers la droite.'
      },
      {
        name: 'ripple',
        default: 'vrai',
        type: 'booléen | objet',
        description: 'Applique la directive __v-ripple__.'
      },
      {
        name: 'round',
        default: 'faux',
        type: 'booléen',
        description: 'Le bouton sera rond sur les côtés.'
      },
      {
        name: 'small',
        default: 'faux',
        type: 'booléen',
        description: 'Bouton de petite taille.'
      },
      {
        name: 'tag',
        default: `'button'`,
        type: 'chaîne de caractères',
        description: 'Spécifie une balise personnalisée à utiliser sur le composant.'
      },
      {
        name: 'top',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le contenu vers le haut.'
      },
      {
        name: 'type',
        default: `'button'`,
        type: 'chaîne de caractères',
        description: 'Définit l\’attribut type du bouton.'
      },
      {
        name: 'btn-value',
        default: 'indéfini',
        type: 'quelconque',
        description: 'Contrôle la visibilité du bouton.'
      }
    ],
    'événements': [
      {
        'name': 'change',
        'description': 'La langue choisie.'
      }
    ]
  }"
/>
