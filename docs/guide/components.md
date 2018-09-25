# Components




## SvgIcon

The component `SvgIcon` is meant to replace the Vuetify `v-icon`, which uses a font icon, and extends his fonctionnalities.

### Usage

``` html
<SvgIcon icon="home" />
```

#### Color

Default value is `currentColor`, which means current value of `color` property.

The value can be any valid CSS color, some exemples:

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

#### Theme

You can add `light` or `dark` attributes to use Vuetify theme classes:

``` html{3}
<SvgIcon
    icon="home"
    dark
/>
```

#### Custom icons

One missing fonctionnality of `v-icon`, is custom icons, here there are:

``` html
<SvgIcon
    icon="home"
    dark
>
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
	title="test"
/>

### Todo

We need to add more icons, to have the complete set from [Flaticon](https://www.flaticon.com/packs/material-design/1).

### How It Works

It's using the `debounce` function from `@/functions/debounce`, which takes as parameters a callback and a time value. This function returns a function that contains a `setTimeout`, and each time this returned function is called, it clears the previous `setTimeout`, so when the event fires multiple times, the callback is only called once.

For the directive itself, when it's inserted, it checks if the interval has been updated and do not perform anything if this isn't the case. If the test passes, we set a callback for the `oninput` event on the element with the `debounce` function, and send it a callback that dispatch the `change` event.<br>
It's why, even with the `lazy` modifier on `v-model`, input still updates without blur.

## Roadmap

There are new components in development:

- `ListField`: displays an array of keys/values
- `FileUpload`
- `DownloadFile`

Don't hesitate to tell us about your needs!
