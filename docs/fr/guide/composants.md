# Composants




## SvgIcon

Le composant `SvgIcon` est destiné à remplacer le` v-icon` de Vuetify, qui utilise une police d'icônes, et à étendre ses fonctionnalités.

### Usage

``` html
<SvgIcon icon="home" />
```

Voir la [démo](#demo).

#### Couleur

La valeur par défaut est `currentColor`, qui signifie la valeur actuelle de la propriété` color`.

La valeur peut être n'importe quelle couleur CSS valide, quelques exemples :

- `#4edb4e`
- `#000`
- `white`
- `rgba(0, 0, 0, .2)`
- `rgb(144, 72, 219)`
- `hsl(180, 67%, 57%)`

``` html{3}
<SvgIcon
    icon="home"
    color="hsl(180, 67%, 57%)"
/>
```

#### Taille

Toutes les icônes sont mises au carré pour être plus consistantes. Pour en changer l'échelle, vous pouvez utiliser les attributs de mots-clés ou toute valeur de taille CSS valide.
La taille par défaut d'une icône est `1.35em` (cette unité est relative à la taille de la police, de sorte que l'icône est synchronisée avec elle).

Mots clés :

- `small`: `1em`
- `medium`: `1.5em`
- `large`: `1.85em`
- `x-large`: `2.25em`

``` html{3}
<SvgIcon
    icon="home"
    medium
/>
```

Taille personnalisée :

``` html{3}
<SvgIcon
    icon="home"
    size="100px"
/>
```

#### Thème

Vous pouvez ajouter des attributs `light` ou` dark` pour utiliser les classes de thème Vuetify :

``` html{3}
<SvgIcon
    icon="home"
    dark
/>
```

#### Icônes personnalisées

Une des fonctionnalités manquantes de `v-icon`, ce sont les icônes personnalisées, les voilà :

``` html{2,3,4}
<SvgIcon>
    <svg viewBox="0 0 24 24">
        <path d="M4.6 2.8l9.2 9.2-9.2 9.2L7.4 24l12-12-12-12z" />
    </svg>
</SvgIcon>
```

::: tip CONSEIL
Nous vous recommandons une taille de 24 pixels et d'optimiser votre icône avec [SVGOMG](https://jakearchibald.github.io/svgomg/).
:::

### Démo
<br>
<CodePen
	id="yxRJOO"
	title="SvgIcon"
/>

### À faire

Nous devons ajouter plus d'icônes pour avoir l'ensemble complet de [Flaticon](https://www.flaticon.com/packs/material-design/1).

### Comment ça fonctionne

C'est un composant simple, qui utilise des propriétés et un emplacement par défaut. S'il n'y a rien de passé dans le slot, il examinera toutes les icônes connues pour trouver la valeur de la propriété `icon`. Il utilise également la liaison de classe et de style dynamique pour remplacer les styles par défaut.

#### SVG contre police d'icônes

Consultez cet [article sur CSS-Tricks](https://css-tricks.com/icon-fonts-vs-svg/) pour une comparaison complète des techniques.

Pour résumé, SVG est plus **performant**, **facile à utiliser**, **accessible**, et offre une **meilleure qualitée** grâce aux vecteurs.

## Roadmap

De nouveaux composants sont en développement :

- `ListField`: affiche un tableau de clés/valeurs
- `FileUpload`
- `DownloadFile`

N'hésitez pas à nous parler de vos besoins !
