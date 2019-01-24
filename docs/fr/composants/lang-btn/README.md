# LangBtn

Le composant `LangBtn` est une combinaison d'un bouton, d'un menu et d'une liste de Vuetify pour fournir un bouton « choisir la langue ».

Vous pouvez le personnaliser comme un `VBtn`, voir [Vuetify](https://vuetifyjs.com/en/components/buttons).

## Utilisation

<Example value="common/lang-btn/base" />

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
        name: 'dark',
        default: 'faux',
        type: 'booléen',
        description: 'Applique la variante de thème sombre.'
      },
      {
        name: 'disabled',
        default: 'faux',
        type: 'booléen',
        description: 'Rend le bouton désactivé.'
      },
      {
        name: 'fixed',
        default: 'faux',
        type: 'booléen',
        description: 'Place l\'élément fixe.'
      },
      {
        name: 'menu-left',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le menu vers la gauche.'
      },
      {
        name: 'allow-overflow',
        default: 'vrai',
        type: 'booléen',
        description: 'Supprime le dépassement du repositionnement du contenu.'
      },
      {
        name: 'auto',
        default: 'faux',
        type: 'booléen',
        description: 'Centre la liste sur l\'élément sélectionné.'
      },
      {
        name: 'close-delay',
        default: '0',
        type: 'nombre | chaîne de caractères',
        description: 'Nombre de millisecondes à attendre avant de fermer le composant.'
      },
      {
        name: 'close-on-click',
        default: 'vrai',
        type: 'booléen',
        description: 'Désigne si le menu doit se fermer après un clic externe.'
      },
      {
        name: 'close-on-content-click',
        default: 'vrai',
        type: 'booléen',
        description: 'Désigne si le menu doit se fermer lorsque son contenu est cliqué.'
      },
      {
        name: 'content-class',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Applique une classe personnalisée à l\'élément détaché. Cela est utile car le contenu est déplacé vers la fin de l\'application et n\'est pas ciblable par les classes transmises directement au composant.'
      },
      {
        name: 'disable-keys',
        default: 'faux',
        type: 'booléen',
        description: 'Supprime toutes les interactions au clavier.'
      },
      {
        name: 'full-width',
        default: 'faux',
        type: 'booléen',
        description: 'Force la largeur à 100%.'
      },
      {
        name: 'lazy',
        default: 'faux',
        type: 'booléen',
        description: 'Rend conditionnellement le contenu monté. Ne rendra le contenu que s\'il est activé.'
      },
      {
        name: 'max-height',
        default: `'auto'`,
        type: 'nombre | chaîne de caractères',
        description: 'Définit la hauteur maximale du contenu.'
      },
      {
        name: 'max-width',
        default: `'auto'`,
        type: 'nombre | chaîne de caractères',
        description: 'Définit la largeur maximale du contenu.'
      },
      {
        name: 'min-width',
        default: 'indéfini',
        type: 'nombre | chaîne de caractères',
        description: 'Définit la largeur minimale du contenu.'
      },
      {
        name: 'nudge-bottom',
        default: '0',
        type: 'nombre | chaîne de caractères',
        description: 'Déplace le contenu vers le bas.'
      },
      {
        name: 'nudge-left',
        default: '0',
        type: 'nombre | chaîne de caractères',
        description: 'Déplace le contenu vers la gauche.'
      },
      {
        name: 'nudge-right',
        default: '0',
        type: 'nombre | chaîne de caractères',
        description: 'Déplace le contenu vers la droite.'
      },
      {
        name: 'nudge-top',
        default: '0',
        type: 'nombre | chaîne de caractères',
        description: 'Déplace le contenu vers le haut.'
      },
      {
        name: 'offset-overflow',
        default: 'faux',
        type: 'booléen',
        description: 'Force le composant à basculer du côté opposé lorsqu\’il est repositionné pour cause de débordement.'
      },
      {
        name: 'offset-x',
        default: 'faux',
        type: 'booléen',
        description: 'Décale le menu sur l\'axe horizontal. Fonctionne en conjonction avec les directions gauche/droite.'
      },
      {
        name: 'offset-y',
        default: 'vrai',
        type: 'booléen',
        description: 'Décale le menu sur l\'axe vertical. Fonctionne en conjonction avec les directions haut/bas.'
      },
      {
        name: 'open-delay',
        default: '0',
        type: 'nombre | chaîne de caractères',
        description: 'Nombre de millisecondes à attendre avant d\'ouvrir le composant.'
      },
      {
        name: 'open-on-click',
        default: 'vrai',
        type: 'booléen',
        description: 'Indique si le menu doit s\'ouvrir lors d\'un clic sur l\'activateur.'
      },
      {
        name: 'open-on-hover',
        default: 'faux',
        type: 'booléen',
        description: 'Indique si le menu doit s\'ouvrir au survol de l\'activateur.'
      },
      {
        name: 'origin',
        default: `'top left'`,
        type: 'booléen',
        description: 'Définit l\'origine de la transition.'
      },
      {
        name: 'position-x',
        default: 'indéfini',
        type: 'nombre',
        description: 'Utilisé pour positionner le contenu lorsque vous n\'utilisez pas de slot d\'activation.'
      },
      {
        name: 'position-y',
        default: 'indéfini',
        type: 'nombre',
        description: 'Utilisé pour positionner le contenu lorsque vous n\'utilisez pas de slot d\'activation.'
      },
      {
        name: 'transition',
        default: `'v-menu-transition'`,
        type: 'chaîne de caractères',
        description: 'Définit la transition du composant. Peut être l\’une des transitions intégrées ou la vôtre.'
      },
      {
        name: 'menu-value',
        default: 'indéfini',
        type: 'quelconque',
        description: 'Contrôle la visibilité du menu.'
      },
      {
        name: 'z-index',
        default: 'indéfini',
        type: 'nombre | chaîne de caractères',
        description: 'Le z-index utilisé pour le composant.'
      },
      {
        name: 'menu-left',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le menu vers la gauche.'
      },
      {
        name: 'menu-bottom',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le menu vers le bas.'
      },
      {
        name: 'menu-right',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le menu vers la droite.'
      },
      {
        name: 'menu-top',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le menu vers le haut.'
      },
      {
        name: 'block',
        default: 'faux',
        type: 'booléen',
        description: 'Étend le bouton à 100% de l\'espace disponible.'
      },
      {
        name: 'color',
        default: `'#333'`,
        type: 'chaîne de caractères',
        description: 'Applique la couleur spécifiée au bouton. Cela peut être n\'importe quelle couleur CSS.'
      },
      {
        name: 'depressed',
        default: 'faux',
        type: 'booléen',
        description: 'Supprime l\'ombre du bouton.'
      },
      {
        name: 'fab',
        default: 'faux',
        type: 'booléen',
        description: 'Rend le bouton rond.'
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
      },
      {
        name: 'left',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le composant vers la gauche.'
      },
      {
        name: 'bottom',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le composant vers le bas.'
      },
      {
        name: 'right',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le composant vers la droite.'
      },
      {
        name: 'top',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le contenu vers le haut.'
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
