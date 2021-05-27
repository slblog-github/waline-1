# Syntax Support

You can add a variety of content in the comments, including expanded Markdown syntax and HTML tags.

## Markdown Support

We support tcomplete Markdown syntax and the following extensions.

### GFM Markdown Favor

Including tables and delete lines

::: details Demo

This is ~~deleted~~.

|           center           |                    right | left                    |
| :------------------------: | -----------------------: | :---------------------- |
| For center align use `:-:` | For right align use `-:` | For left align use `:-` |
|             b              |                aaaaaaaaa | aaaa                    |
|             c              |                     aaaa | a                       |

```md
This is ~~deleted~~.

|           center           |                    right | left                    |
| :------------------------: | -----------------------: | :---------------------- |
| For center align use `:-:` | For right align use `-:` | For left align use `:-` |
|             b              |                aaaaaaaaa | aaaa                    |
|             c              |                     aaaa | a                       |
```

:::

### Superscript and Subscript

Use `^` and `~` to mark the superscript and subscript.

::: details Demo

- 19<sup>th</sup>
- H<sub>2</sub>O

```md
- 19^th^
- H~2~O
```

:::

### Emojis

Besides user-configured or built-in Weibo emojis, we also support complete Emoji abbreviated emoticons.

::: details Demo

:) :( :smile: :laughing: :blush: :smiley: :smirk: :heart_eyes: :kissing_heart:

```md
:) :( :smile: :laughing: :blush: :smiley: :smirk: :heart_eyes: :kissing_heart:
```

:::

### Code Block Highlight

We support highlighting in almost all languages.

::: details Demo

```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      // Just a lil’ script to show off that inline JS gets highlighted
      window.console && console.log('foo');
    </script>
    <meta charset="utf-8" />
    <link rel="icon" href="assets/favicon.png" />
    <title>Prism</title>
    <link rel="stylesheet" href="assets/style.css" />
    <link rel="stylesheet" href="themes/prism.css" data-noprefix />
    <script src="assets/vendor/prefixfree.min.js"></script>

    <script>
      var _gaq = [['_setAccount', 'UA-33746269-1'], ['_trackPageview']];
    </script>
    <script src="https://www.google-analytics.com/ga.js" async></script>
  </head>
  <body></body>
</html>
```

```js:no-line-numbers
/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
Prism.fileHighlight = function () {
  if (!logged) {
    console.warn(
      'Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'
    );
    logged = true;
  }
  Prism.plugins.fileHighlight.highlight.apply(this, arguments);
};
```

```css:no-line-numbers
@import url(https://fonts.googleapis.com/css?family=Questrial);
@import url(https://fonts.googleapis.com/css?family=Arvo);

@font-face {
  src: url(https://lea.verou.me/logo.otf);
  font-family: 'LeaVerou';
}

/*
 Shared styles
 */

section h1,
#features li strong,
header h2,
footer p {
  font: 100% Rockwell, Arvo, serif;
}
```

:::

### Mathematical formula

You can use `$ ... $` to create inline formulas, or use `$$ ... $$` to create block-level formulas.

::: details Demo

<MathML content='Euler’s identity <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math> is a beautiful formula in <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup></mrow></math>.' />

<MathML content='<math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><msup><mi mathvariant="normal">∂</mi><mi>r</mi></msup><mrow><mi mathvariant="normal">∂</mi><msup><mi>ω</mi><mi>r</mi></msup></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">{</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mi>r</mi></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>r</mi></munderover><mfrac><mrow><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy="false">)</mo><mi>i</mi></msup><mi>r</mi><mo>⋯</mo><mo stretchy="false">(</mo><mi>r</mi><mo>−</mo><mi>i</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mrow><mi>r</mi><mo>−</mo><mi>i</mi></mrow></msup></mrow><msup><mi>ω</mi><mi>i</mi></msup></mfrac><mo fence="true">}</mo></mrow></mrow></math>' />

<script>
import { h, ref } from 'vue'

const MathML = (props, ctx) => h(
  'div',
  {
    class: 'math-ml',
    innerHTML:props.content
  }
);

export default {
  components: {
    MathML,
  },
}
</script>

```md
Euler’s identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$
```

:::

## Spam and XSS prevention

::: warning Preventing XSS attacks

We use DOMPurify to sanitize every comment input to prevent potential XSS attacks. This means you can't use `<iframe>` or any form of script.

At the same time, all links will be automatically set `rel="noreferrer noopener"` and opened in a new window with `target="_ blank"`.

:::

::: warning Preventing malicious content implantation

- To prevent users from creating submitable forms in the comment area to trick other visitors submitting information, `<form>` and `<input>` are not allowed

- To prevent users from using style tag to revise website pages or modify their own comment styles to implant spam ads, the `<style>` tag and the `style` attribute are not allowed.

- To prevent users from abusing media autoplay feature, `autoplay` attribute is not allowed.

:::

## Restricted preview function

In order to control the size of the client `@waline / client`, many functions **cannot be displayed correctly in the preview mode**, but **after submission** they will be **correctly rendered in the comment area**.

This includes the following restrictions:

- Standard emoji syntax (e.g.: tada: `:tada:`) cannot be rendered correctly

- Superscript and subscript (e.g.: `H~2~O`, `x^2^`) cannot be rendered correctly

- Tex syntax, or mathematical formulas (e.g.: `$a = 1$`) cannot be rendered correctly

- Code blocks will be highlighted in random colors splited by specific characters

::: tip Principle

1. Considering the size, the client uses `marked` for rendering and `hanabi` for highlighting, which will have the above limitations.

1. When a user submits a comment, the client embeds custom Emoji images, and the raw comment will be sent to the server.

1. The server receives the comment, uses `markdown-it` to render markdown correctly with related plugins, and uses `prismjs` to highlight code blocks according to the language, and finally executes XSS sanitizing.

1. After successfully processed, the server storage the render content in database, and returns it to the client when needed so comment will be displayed normally.

:::
