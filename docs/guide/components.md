# Components




## SvgIcon

The component `SvgIcon` is meant to replace the Vuetify `v-icon`, which uses a font icon, and to extends his fonctionnalities.

### Usage

``` html
<SvgIcon icon="home" />
```

See [demo](#demo).

#### Color

Default value is `currentColor`, which means current value of `color` property.

The value can be any valid CSS color, some examples:

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

#### Size

All icons are squared to be more consistant. To change the scale of them, you can use keywords attributes, or any valid CSS size value.
The default size of an icon is `1.35em` (this unit is relative to font size, so the icon scales in sync with it).

Keywords:

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

Custom size:

``` html{3}
<SvgIcon
    icon="home"
    size="100px"
/>
```

#### Custom icons

One missing functionality of `v-icon`, is custom icons, here there are:

``` html{2,3,4}
<SvgIcon>
    <svg viewBox="0 0 24 24">
        <path d="M4.6 2.8l9.2 9.2-9.2 9.2L7.4 24l12-12-12-12z" />
    </svg>
</SvgIcon>
```

::: tip
We recommend a size of 24 pixels, and to optimize your icon with [SVGOMG](https://jakearchibald.github.io/svgomg/).
:::

### Demo
<br>
<CodePen
	id="yxRJOO"
	title="SvgIcon"
/>

### API
<br>
<CodePen
	id="qJYJod"
	:height="800"
	title="SvgIcon API"
/>

### Todo

We need to add more icons, to have the complete set from [Flaticon](https://www.flaticon.com/packs/material-design/1).

### How It Works

This is simple component, which use props and default slot. If there is nothing passed to the slot it will look over all the know icons to find the value of the `icon` prop. It also uses dynamic class and style binding to override default styles.

#### SVG over font icon

Check this [article on CSS-Tricks](https://css-tricks.com/icon-fonts-vs-svg/) for a full comparaison of techniques.

To resume, SVG is more **performant**, **easy to use**, **accessible**, and offers a **better quality** due to vectors.
