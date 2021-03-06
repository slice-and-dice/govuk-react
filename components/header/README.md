Header
======

### Import
```js
  import Header from '@govuk-react/header';
```
<!-- STORY -->

### Usage


Simple
```jsx
<Header level={1}>Heading text</Header>
```

Using shortcuts
```jsx
import { H1, H2, H3, H4, H5, H6 } from "@govuk-react/header";

<H1>h1</H1>
<H2>h2</H2>
<H3>h3</H3>
<H4>h4</H4>
<H5>h5</H5>
<H6>h6</H6>
```

Differing sizes
```jsx
<Header level={6} size="XXLARGE">
  h6 with XXLARGE style
</Header>
<Header level={2} size="XSMALL">
  h2 with XSMALL style
</Header>
<H3 size="LARGE">h3 with LARGE style</H3>
```

Props pass through
```jsx
<Header onClick={() => { console.log('clicked'); }}>Click me</Header>
```

### References:
- https://govuk-elements.herokuapp.com/typography/#typography-headings
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/globals/scss/core/_typography.scss
- https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_elements-typography.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `level` |  | ```1``` | number | Semantic heading level value between 1 and 6
 `size` |  | ```undefined``` | enumObject.keys(FONT_SIZES) | Visual size level, accepts   `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XSMALL`


