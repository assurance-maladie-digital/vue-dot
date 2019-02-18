# DatePicker

Le `DatePicker` de Vuetify, mais simplifié et avec plus d'options.

## Utilisation

Par défaut, il s'agit d'un champ avec un menu et une icône.

<Example value="fr/date-picker/base" />

## API

<API
  :component="{
    'props': [
      {
        name: 'color',
        default: `'primary'`,
        type: 'chaîne de caractères',
        description: 'La couleur principale.'
      },
      {
        name: 'birthdate',
        default: 'faux',
        type: 'booléen',
        description: 'Fait du sélecteur un sélecteur de date de naissance: sélectionne l\'année en premier, puis le mois et le jour.'
      },
      {
        name: 'dark',
        default: 'faux',
        type: 'booléen',
        description: 'Applique la variante de thème sombre.'
      },
      {
        name: 'full-width',
        default: 'faux',
        type: 'booléen',
        description: 'Force la largeur à 100%.'
      },
      {
        name: 'readonly',
        default: 'faux',
        type: 'booléen',
        description: 'Rend le sélecteur en lecture seule (ne permet pas de sélectionner une nouvelle date).'
      },
      {
        name: 'value',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Définit la valeur du champ et du sélecteur.'
      },
      {
        name: 'light',
        default: 'faux',
        type: 'booléen',
        description: 'Applique la variante de thème light.'
      },
      {
        name: 'date-format',
        default: `'DD/MM/YYYY'`,
        type: 'chaîne de caractères',
        description: 'Change le format de la date dans le champ.'
      },
      {
        name: 'date-format-return',
        default: `'DD/MM/YYYY'`,
        type: 'chaîne de caractères',
        description: 'Modifie le format de la date renvoyée.'
      },
      {
        name: 'locale',
        default: `'fr-fr'`,
        type: 'chaîne de caractères',
        description: 'Change la langue du sélecteur.'
      },
      {
        name: 'append-icon',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Ajoute une icône au composant.'
      },
      {
        name: 'append-outer-icon',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Ajoute une icône à l\'extérieur du champ.'
      },
      {
        name: 'autofocus',
        default: 'faux',
        type: 'booléen',
        description: 'Active l\'autofocus.'
      },
      {
        name: 'background-color',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Change la couleur de fond du champ.'
      },
      {
        name: 'box',
        default: 'faux',
        type: 'booléen',
        description: 'Applique le style alternatif du champ.'
      },
      {
        name: 'browser-autocomplete',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Configure l\'attribut autocomplete du champ.'
      },
      {
        name: 'clear-icon',
        default: `'$vuetify.icons.clear'`,
        type: 'chaîne de caractères',
        description: 'Appliqué lors de l\'utilisation de __clearable__ et que l\'entrée est dirty.'
      },
      {
        name: 'clearable',
        default: 'faux',
        type: 'booléen',
        description: 'Ajoute une fonctionnalité de suppression du texte dans le champ, l\'icône par défaut est Material Icons __clearable__.'
      },
      {
        name: 'counter',
        default: 'indéfini',
        type: 'booléen | nombre | chaîne de caractères',
        description: 'Crée un compteur pour la longueur du champ. Si aucun nombre n\'est spécifié, la valeur par défaut est 25. N\'applique aucune validation.'
      },
      {
        name: 'disabled',
        default: 'faux',
        type: 'booléen',
        description: 'Désactive le composant.'
      },
      {
        name: 'dont-fill-mask-blanks',
        default: 'faux',
        type: 'booléen',
        description: 'Désactive l\'affichage automatique des caractères lors de la frappe.'
      },
      {
        name: 'error',
        default: 'faux',
        type: 'booléen',
        description: 'Place le champ dans un état d\'erreur manuel.'
      },
      {
        name: 'error-count',
        default: '1',
        type: 'nombre | chaîne de caractères',
        description: 'Le nombre total d\'erreurs devant s\'afficher simultanément.'
      },
      {
        name: 'error-messages',
        default: '[]',
        type: 'chaîne de caractères | tableau',
        description: 'Place l\'entrée dans un état d\'erreur et transmet les messages d\'erreur personnalisés. Sera combiné avec toutes les validations qui se produisent à partir de la propriété __rules__. Ce champ ne déclenchera pas de validation.'
      },
      {
        name: 'flat',
        default: 'faux',
        type: 'booléen',
        description: 'Supprime l\'élévation (ombre) ajoutée à l\'élément lors de l\'utilisation des propriétés __solo__ ou __solo-inverted__.'
      },
      {
        name: 'height',
        default: 'indéfini',
        type: 'nombre | chaîne de caractères',
        description: 'Définit la hauteur de champ.'
      },
      {
        name: 'hide-details',
        default: 'faux',
        type: 'booléen',
        description: 'Masque l\'indice et les erreurs de validation.'
      },
      {
        name: 'hint',
        default: `'Format JJ/MM/AAAA'`,
        type: 'chaîne de caractères',
        description: 'Texte d\'indice.'
      },
      {
        name: 'label',
        default: `'Date'`,
        type: 'chaîne de caractères',
        description: 'Définit l\'étiquette du champ.'
      },
      {
        name: 'loading',
        default: 'faux',
        type: 'booléen | chaîne de caractères',
        description: 'Affiche la barre de progression linéaire. Il peut s\'agir d\'une chaîne de caractères spécifiant la couleur appliquée à la barre de progression (couleur Material ou du thème : __primary__, __secondary__, __success__, __info__, __warning__, __error__), ou d\'un booléen utilisant la __couleur__ du composant (défini par la propriété color si elle est supportée par le composant) ou la couleur primaire.'
      },
      {
        name: 'mask',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Applique un masque de caractère personnalisé au champ. Par défaut, il utilise la propriété __date-format__.'
      },
      {
        name: 'outline',
        default: 'faux',
        type: 'booléen',
        description: 'Applique le style de contour au champ.'
      },
      {
        name: 'persistent-hint',
        default: 'vrai',
        type: 'booléen',
        description: 'Force l\'indice à toujours être visible.'
      },
      {
        name: 'placeholder',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Définit le texte de substitution du champ.'
      },
      {
        name: 'prefix',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Affiche un préfixe.'
      },
	  {
        name: 'prepend-icon',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Ajoute une icône au composant. Par défaut, un bouton qui contient une icône de calendrier est affiché.'
      },
      {
        name: 'prepend-icon-color',
        default: `'#808080'`,
        type: 'chaîne de caractères',
        description: 'Définit la couleur de l\'icône ajoutée.'
      },
      {
        name: 'prepend-icon-cb',
        default: 'nul',
        type: 'fonction',
        description: 'Définit un callback lors de l\'utilisation d\'une icône personnalisée.'
      },
      {
        name: 'return-masked-value',
        default: 'vrai',
        type: 'booléen',
        description: 'Renvoie la chaîne de caractères masquée non modifiée.'
      },
      {
        name: 'reverse',
        default: 'faux',
        type: 'booléen',
        description: 'Inverse l\'orientation du champ.'
      },
      {
        name: 'rules',
        default: '[]',
        type: 'tableau',
        description: 'Accepte un tableau de fonctions renvoyant true ou une chaîne de caractères avec un message d\'erreur.'
      },
      {
        name: 'single-line',
        default: 'faux',
        type: 'booléen',
        description: 'L\'étiquette ne se déplace pas sur les états focus/dirty.'
      },
      {
        name: 'solo',
        default: 'faux',
        type: 'booléen',
        description: 'Change le style du champ.'
      },
      {
        name: 'solo-inverted',
        default: 'faux',
        type: 'booléen',
        description: 'Réduit l\'opacité de l\'élément jusqu\'à son focus.'
      },
      {
        name: 'success',
        default: 'faux',
        type: 'booléen',
        description: 'Met le champ dans un état de réussite manuel.'
      },
      {
        name: 'success-messages',
        default: '[]',
        type: 'chaîne de caractères | tableau | objet',
        description: 'Met le champ en état de réussite et transmet les messages de réussite personnalisés.'
      },
      {
        name: 'suffix',
        default: 'indéfini',
        type: 'suffix',
        description: 'Affiche un suffixe.'
      },
      {
        name: 'type',
        default: `'text'`,
        type: 'chaîne de caractères',
        description: 'Définit le type du champ.'
      },
      {
        name: 'validate-on-blur',
        default: 'faux',
        type: 'booléen',
        description: 'Retarde la validation jusqu\'à l\'événement de perte de focus.'
      },
      {
        name: 'allowed-dates',
        default: 'nul',
        type: 'fonction',
        description: 'Limite les dates pouvant être sélectionnées.'
      },
      {
        name: 'day-format',
        default: 'nul',
        type: 'fonction',
        description: 'Vous permet de personnaliser le format de la chaîne de jour qui apparaît dans le tableau des dates. Appelé avec les arguments de date (chaîne ISO 8601).'
      },
      {
        name: 'event-color',
        default: `'warning'`,
        type: 'chaîne de caractères | fonction | objet',
        description: 'Définit la couleur pour le point d\'événement. Il peut s\'agir d\'une __chaîne de caractères__ (tous les événements auront la même couleur) ou d\'un __objet__ où l\'attribut est la date de l\'événement et la valeur est booléen/une couleur/tableau de couleurs pour la date spécifiée ou une __fonction__ prenant la date en tant que paramètre et renvoyant booléen/couleur/tableau de couleurs pour cette date.'
      },
      {
        name: 'events',
        default: 'nul',
        type: 'tableau | fonction | objet',
        description: 'Tableau de dates ou d\'objets définissant des événements ou des couleurs ou une fonction renvoyant booléen/couleur/tableau de couleurs.'
      },
      {
        name: 'first-day-of-week',
        default: '1',
        type: 'chaîne de caractères | nombre',
        description: 'Définit le premier jour de la semaine, en commençant par 1 pour lundi.'
      },
      {
        name: 'header-color',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Définit la couleur de l\'en-tête. Si non spécifié, utilisera la couleur définie par la propriété __color__ ou la couleur de sélecteur par défaut.'
      },
      {
        name: 'header-date-format',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Vous permet de personnaliser le format de la chaîne de mois qui apparaît dans l\'en-tête du calendrier. Appelé avec les arguments de date (chaîne ISO 8601).'
      },
      {
        name: 'landscape',
        default: 'faux',
        type: 'booléen',
        description: 'Oriente le sélecteur horizontalement.'
      },
      {
        name: 'max',
        default: 'fonction | indéfini',
        type: 'chaîne de caractères',
        description: 'Date/mois maximum autorisé (format ISO 8601). Si __birthdate__ est défini, c\'est la date du jour.'
      },
      {
        name: 'min',
        default: 'fonction | indéfini',
        type: 'chaîne de caractères',
        description: 'Date/mois minimum autorisé (format ISO 8601). Si __birthdate__ est défini, c\'est \'\'1950-01-01\'.'
      },
      {
        name: 'month-format',
        default: 'nul',
        type: 'fonction',
        description: 'Fonction de formatage utilisée pour afficher les mois dans la table des mois. Appelé avec les arguments de date (chaîne ISO 8601).'
      },
      {
        name: 'multiple',
        default: 'faux',
        type: 'booléen',
        description: 'Autorise la sélection de plusieurs dates.'
      },
      {
        name: 'next-icon',
        default: `'$vuetify.icons.next'`,
        type: 'chaîne de caractères',
        description: 'Définit l\'icône pour le bouton mois/année suivant.'
      },
      {
        name: 'no-title',
        default: 'vrai',
        type: 'booléen',
        description: 'Masque le titre du sélecteur.'
      },
      {
        name: 'picker-date',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Année/mois affiché.'
      },
      {
        name: 'prev-icon',
        default: `'$vuetify.icons.prev'`,
        type: 'chaîne de caractères',
        description: 'Définit l\'icône du bouton mois/année précédent.'
      },
      {
        name: 'reactive',
        default: 'faux',
        type: 'booléen',
        description: 'Met à jour le modèle du sélecteur lors de la modification automatique des mois/années.'
      },
      {
        name: 'scrollable',
        default: 'faux',
        type: 'booléen',
        description: 'Permet de changer le mois affiché avec le défilement de la souris.'
      },
      {
        name: 'show-current',
        default: 'vrai',
        type: 'booléen | chaîne de caractères',
        description: 'Bascule la visibilité du contour de date/mois en cours ou affiche la date/mois fournie en tant que date actuelle.'
      },
      {
        name: 'show-week',
        default: 'faux',
        type: 'booléen',
        description: 'Bascule la visibilité des nombres de la semaine dans le calendrier.'
      },
      {
        name: 'title-date-format',
        default: 'nul',
        type: 'fonction',
        description: 'Vous permet de personnaliser le format de la chaîne de date qui apparaît dans le titre du sélecteur de date. Appelé avec les arguments de date (chaîne ISO 8601).'
      },
      {
        name: 'picker-type',
        default: `'date'`,
        type: 'chaîne de caractères',
        description: 'Détermine le type du sélecteur. __date__ pour le sélecteur de date, __mois__ pour le sélecteur de mois.'
      },
      {
        name: 'weekday-format',
        default: 'nul',
        type: 'fonction',
        description: 'Vous permet de personnaliser le format de la chaîne de jour de la semaine qui apparaît dans le calendrier. Appelé avec les arguments de date (chaîne ISO 8601).'
      },
      {
        name: 'width',
        default: '300',
        type: 'nombre | chaîne de caractères',
        description: 'La largeur du contenu.'
      },
      {
        name: 'year-format',
        default: 'nul',
        type: 'fonction',
        description: 'Vous permet de personnaliser le format de la chaîne d\'année qui apparaît dans l\'en-tête du calendrier. Appelé avec les arguments de date (chaîne ISO 8601).'
      },
      {
        name: 'year-icon',
        default: 'indéfini',
        type: 'chaîne de caractères',
        description: 'Définit l\'icône dans le bouton de sélection d\'année.'
      },
      {
        name: 'absolute',
        default: 'faux',
        type: 'booléen',
        description: 'Positionne le bouton absolument.'
      },
      {
        name: 'allow-overflow',
        default: 'faux',
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
        name: 'bottom',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le menu vers le bas.'
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
        default: 'faux',
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
        name: 'fixed',
        default: 'faux',
        type: 'booléen',
        description: 'Place l\'élément fixe.'
      },
      {
        name: 'lazy',
        default: 'vrai',
        type: 'booléen',
        description: 'Rend conditionnellement le contenu monté. Ne rendra le contenu que s\'il est activé.'
      },
      {
        name: 'left',
        default: 'faux',
        type: 'booléen',
        description: 'Aligne le menu vers la gauche.'
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
        default: `'300px'`,
        type: 'nombre | chaîne de caractères',
        description: 'Définit la largeur minimale du contenu.'
      },
      {
        name: 'nudge-bottom',
        default: '55',
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
        default: '40',
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
        name: 'nudge-width',
        default: '0',
        type: 'nombre | chaîne de caractères',
        description: 'Déplace la largeur du contenu.'
      },
      {
        name: 'offset-overflow',
        default: 'vrai',
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
        type: 'chaîne de caractères',
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
        name: 'return-value',
        default: 'indéfini',
        type: 'booléen | nombre | chaîne de caractères',
        description: 'Utilisé pour renvoyer la valeur du menu.'
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
      },
      {
        name: 'transition',
        default: `'scale-transition'`,
        type: 'chaîne de caractères',
        description: 'Définit la transition du composant. Peut être l\’une des transitions intégrées ou la vôtre.'
      },
      {
        name: 'z-index',
        default: '1',
        type: 'nombre | chaîne de caractères',
        description: 'Le z-index utilisé pour le composant.'
      }
    ],
    'événements': [
      {
        'name': 'change',
        'description': 'The updated bound model.'
      }
    ]
  }"
/>

## Exemples

### Date de naissance

Vous pouvez transformer le sélecteur en sélecteur de date de naissance (sélectionne l'année, puis le mois et enfin la date).

<Example value="fr/date-picker/birthdate" />

### Formats

Vous pouvez spécifier un format d'affichage et un autre format pour la valeur renvoyée. Cela utilise l'[API day.js](https://github.com/iamkun/dayjs) qui est compatible avec Moment.js.

<Example value="fr/date-picker/format" />

### i18n

Vous pouvez utiliser n'importe quel langue de  [dayjs](https://github.com/iamkun/dayjs/tree/master/src/locale).

<Example value="common/date-picker/i18n" />
