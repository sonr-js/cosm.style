---
meta:
  title: Icon
  description: Icons are symbols that can be used to represent various options within an application.
layout: component
---

Nebula comes bundled with over 1,500 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These icons are part of the `default` icon library. If you prefer, you can register [custom icon libraries](#icon-libraries) as well.

:::tip
Depending on how you're loading Nebula, you may need to copy icon assets and/or [set the base path](/getting-started/installation/#setting-the-base-path) so Nebula knows where to load them from. Otherwise, icons may not appear and you'll see 404 Not Found errors in the dev console.
:::

## Default Icons

All available icons in the `default` icon library are shown below. Click or tap on any icon to copy its name, then you can use it in your HTML like this.

```html
<sl-icon name="icon-name-here"></sl-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <sl-input placeholder="Search Icons" clearable>
      <sl-icon slot="prefix" name="search"></sl-icon>
    </sl-input>
    <sl-select value="outline">
      <sl-option value="outline">Outlined</sl-option>
      <sl-option value="fill">Filled</sl-option>
      <sl-option value="all">All icons</sl-option>
    </sl-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input" aria-hidden="true" tabindex="-1">
</div>

## Examples

### Colors

Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<sl-icon>` element or an ancestor to change the color.

```html:preview
<div style="color: #4a90e2;">
  <sl-icon name="exclamation-triangle"></sl-icon>
  <sl-icon name="archive"></sl-icon>
  <sl-icon name="battery-charging"></sl-icon>
  <sl-icon name="bell"></sl-icon>
</div>
<div style="color: #9013fe;">
  <sl-icon name="clock"></sl-icon>
  <sl-icon name="cloud"></sl-icon>
  <sl-icon name="download"></sl-icon>
  <sl-icon name="file-earmark"></sl-icon>
</div>
<div style="color: #417505;">
  <sl-icon name="flag"></sl-icon>
  <sl-icon name="heart"></sl-icon>
  <sl-icon name="image"></sl-icon>
  <sl-icon name="lightning"></sl-icon>
</div>
<div style="color: #f5a623;">
  <sl-icon name="mic"></sl-icon>
  <sl-icon name="search"></sl-icon>
  <sl-icon name="star"></sl-icon>
  <sl-icon name="trash"></sl-icon>
</div>
```

{% raw %}

```jsx:react
import SlIcon from '@onsonr/nebula/dist/react/icon';

const App = () => (
  <>
    <div style={{ color: '#4a90e2' }}>
      <SlIcon name="exclamation-triangle"></SlIcon>
      <SlIcon name="archive"></SlIcon>
      <SlIcon name="battery-charging"></SlIcon>
      <SlIcon name="bell"></SlIcon>
    </div>
    <div style={{ color: '#9013fe' }}>
      <SlIcon name="clock"></SlIcon>
      <SlIcon name="cloud"></SlIcon>
      <SlIcon name="download"></SlIcon>
      <SlIcon name="file-earmark"></SlIcon>
    </div>
    <div style={{ color: '#417505' }}>
      <SlIcon name="flag"></SlIcon>
      <SlIcon name="heart"></SlIcon>
      <SlIcon name="image"></SlIcon>
      <SlIcon name="lightning"></SlIcon>
    </div>
    <div style={{ color: '#f5a623' }}>
      <SlIcon name="mic"></SlIcon>
      <SlIcon name="search"></SlIcon>
      <SlIcon name="star"></SlIcon>
      <SlIcon name="trash"></SlIcon>
    </div>
  </>
);
```

{% endraw %}

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html:preview
<div style="font-size: 32px;">
  <sl-icon name="exclamation-triangle"></sl-icon>
  <sl-icon name="archive"></sl-icon>
  <sl-icon name="battery-charging"></sl-icon>
  <sl-icon name="bell"></sl-icon>
  <sl-icon name="clock"></sl-icon>
  <sl-icon name="cloud"></sl-icon>
  <sl-icon name="download"></sl-icon>
  <sl-icon name="file-earmark"></sl-icon>
  <sl-icon name="flag"></sl-icon>
  <sl-icon name="heart"></sl-icon>
  <sl-icon name="image"></sl-icon>
  <sl-icon name="lightning"></sl-icon>
  <sl-icon name="mic"></sl-icon>
  <sl-icon name="search"></sl-icon>
  <sl-icon name="star"></sl-icon>
  <sl-icon name="trash"></sl-icon>
</div>
```

### Labels

For non-decorative icons, use the `label` attribute to announce it to assistive devices.

```html:preview
<sl-icon name="star-fill" label="Add to favorites"></sl-icon>
```

{% raw %}

```jsx:react
import SlIcon from '@onsonr/nebula/dist/react/icon';

const App = () => <SlIcon name="star-fill" label="Add to favorites" />;
```

{% endraw %}

## Icon Libraries

You can register additional icons to use with the `<sl-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

Nebula ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) contains all of the icons in the Bootstrap Icons project. The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by Nebula components.

To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor` or `stroke="currentColor"` to the SVG element using this function.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### Sonr Icons

Icons sourced from our internal style guide.

> These are pre-packaged with Nebula and are not available for custom registration.

```html:preview
<div style="font-size: 24px;">
  <sl-icon library="sonr" name="passkey"></sl-icon>
  <sl-icon library="sonr" name="docs"></sl-icon>
  <sl-icon library="sonr" name="social-github"></sl-icon>
  <sl-icon library="sonr" name="social-twitter"></sl-icon>
  <sl-icon library="sonr" name="social-youtube"></sl-icon>
  <sl-icon library="sonr" name="error-blockchain"></sl-icon>
  <sl-icon library="sonr" name="error-network"></sl-icon>
  <sl-icon library="sonr" name="swap-coins"></sl-icon>
  <sl-icon library="sonr" name="scanner-qr"></sl-icon>
  <sl-icon library="sonr" name="external-link"></sl-icon>
  <sl-icon library="sonr" name="face-id"></sl-icon>
  <sl-icon library="sonr" name="lock-access"></sl-icon>
  <sl-icon library="sonr" name="check-shield"></sl-icon>
  <sl-icon library="sonr" name="vault"></sl-icon>
  <sl-icon library="sonr" name="coin-assets"></sl-icon>
  <sl-icon library="sonr" name="coins-hand"></sl-icon>
  <sl-icon library="sonr" name="coins-stack"></sl-icon>
  <sl-icon library="sonr" name="currency-dollar"></sl-icon>
  <sl-icon library="sonr" name="currency-euro"></sl-icon>
  <sl-icon library="sonr" name="currency-pound"></sl-icon>
  <sl-icon library="sonr" name="currency-rupee"></sl-icon>
  <sl-icon library="sonr" name="currency-yen"></sl-icon>
  <sl-icon library="sonr" name="sonr"></sl-icon>
  <sl-icon library="sonr" name="sonr-fill"></sl-icon>
  <sl-icon library="sonr" name="osmo"></sl-icon>
  <sl-icon library="sonr" name="btc"></sl-icon>
  <sl-icon library="sonr" name="sol"></sl-icon>
  <sl-icon library="sonr" name="usdc"></sl-icon>
 </div>
```

### Crypto Icons

A collection of icons for cryptocurrencies which are tradeable on the Sonr network. Provide the
All Caps ticker symbol for the icon.

> These are pre-packaged with Nebula and are not available for custom registration.

```html:preview
<div style="font-size: 24px;">
  <sl-icon library="crypto" name="SNR"></sl-icon>
  <sl-icon library="crypto" name="BTC"></sl-icon>
  <sl-icon library="crypto" name="ETH"></sl-icon>
  <sl-icon library="crypto" name="LTC"></sl-icon>
  <sl-icon library="crypto" name="XRP"></sl-icon>
  <sl-icon library="crypto" name="BCH"></sl-icon>
  <sl-icon library="crypto" name="BNB"></sl-icon>
  <sl-icon library="crypto" name="LINK"></sl-icon>
  <sl-icon library="crypto" name="DOT"></sl-icon>
  <sl-icon library="crypto" name="SOL"></sl-icon>
  <sl-icon library="crypto" name="USDT"></sl-icon>
  <sl-icon library="crypto" name="USDC"></sl-icon>
  <sl-icon library="crypto" name="EVMOS"></sl-icon>
  <sl-icon library="crypto" name="FIL"></sl-icon>
  <sl-icon library="crypto" name="ATOM"></sl-icon>
  <sl-icon library="crypto" name="AXL"></sl-icon>
  <sl-icon library="crypto" name="HNS"></sl-icon>
  <sl-icon library="crypto" name="AKT"></sl-icon>
  <sl-icon library="crypto" name="DOGE"></sl-icon>
  <sl-icon library="crypto" name="SOL"></sl-icon>
  <sl-icon library="crypto" name="STARZ"></sl-icon>
</div>
```

### Font Awesome

This will register the [Font Awesome Free](https://fontawesome.com/) library using the jsDelivr CDN. This library has three variations: regular (`far-*`), solid (`fas-*`), and brands (`fab-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt). Some of the icons that appear on the Font Awesome website require a license and are therefore not available in the CDN.

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('fa', {
    resolver: name => {
      const filename = name.replace(/^fa[rbs]-/, '');
      let folder = 'regular';
      if (name.substring(0, 4) === 'fas-') folder = 'solid';
      if (name.substring(0, 4) === 'fab-') folder = 'brands';
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <sl-icon library="fa" name="far-bell"></sl-icon>
  <sl-icon library="fa" name="far-comment"></sl-icon>
  <sl-icon library="fa" name="far-hand-point-right"></sl-icon>
  <sl-icon library="fa" name="far-hdd"></sl-icon>
  <sl-icon library="fa" name="far-heart"></sl-icon>
  <sl-icon library="fa" name="far-star"></sl-icon>
  <br />
  <sl-icon library="fa" name="fas-archive"></sl-icon>
  <sl-icon library="fa" name="fas-book"></sl-icon>
  <sl-icon library="fa" name="fas-chess-knight"></sl-icon>
  <sl-icon library="fa" name="fas-dice"></sl-icon>
  <sl-icon library="fa" name="fas-pizza-slice"></sl-icon>
  <sl-icon library="fa" name="fas-scroll"></sl-icon>
  <br />
  <sl-icon library="fa" name="fab-apple"></sl-icon>
  <sl-icon library="fa" name="fab-chrome"></sl-icon>
  <sl-icon library="fa" name="fab-edge"></sl-icon>
  <sl-icon library="fa" name="fab-firefox"></sl-icon>
  <sl-icon library="fa" name="fab-opera"></sl-icon>
  <sl-icon library="fa" name="fab-microsoft"></sl-icon>
</div>
```

### Customizing the System Library

The system library contains only the icons used internally by Nebula components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons Nebula uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by Nebula.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

<!-- Supporting scripts and styles for the search utility -->
<script>
  function wrapWithTooltip(item) {
    const tooltip = document.createElement('sl-tooltip');
    tooltip.content = item.getAttribute('data-name');

    // Close open tooltips
    document.querySelectorAll('.icon-list sl-tooltip[open]').forEach(tooltip => tooltip.hide());

    // Wrap it with a tooltip and trick it into showing up
    item.parentNode.insertBefore(tooltip, item);
    tooltip.appendChild(item);
    requestAnimationFrame(() => tooltip.dispatchEvent(new MouseEvent('mouseover')));
  }

  fetch('/dist/assets/icons/icons.json')
    .then(res => res.json())
    .then(icons => {
      const container = document.querySelector('.icon-search');
      const input = container.querySelector('sl-input');
      const select = container.querySelector('sl-select');
      const copyInput = container.querySelector('.icon-copy-input');
      const loader = container.querySelector('.icon-loader');
      const list = container.querySelector('.icon-list');
      const queue = [];
      let inputTimeout;

      // Generate icons
      icons.map(i => {
        const item = document.createElement('div');
        item.classList.add('icon-list-item');
        item.setAttribute('data-name', i.name);
        item.setAttribute('data-terms', [i.name, i.title, ...(i.tags || []), ...(i.categories || [])].join(' '));
        item.innerHTML = `
          <svg width="1em" height="1em" fill="currentColor">
            <use href="/assets/images/sprite.svg#${i.name}"></use>
          </svg>
        `;
        list.appendChild(item);

        // Wrap it with a tooltip the first time the mouse lands on it. We do this instead of baking them into the DOM
        // to improve this page's performance. See: https://github.com/onsonr/nebula/issues/1122
        item.addEventListener('mouseover', () => wrapWithTooltip(item), { once: true });

        // Copy on click
        item.addEventListener('click', () => {
          const tooltip = item.closest('sl-tooltip');
          copyInput.value = i.name;
          copyInput.select();
          document.execCommand('copy');

          if (tooltip) {
            tooltip.content = 'Copied!';
            setTimeout(() => tooltip.content = i.name, 1000);
          }
        });
      });

      // Filter as the user types
      input.addEventListener('sl-input', () => {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
          [...list.querySelectorAll('.icon-list-item')].map(item => {
            const filter = input.value.toLowerCase();
            if (filter === '') {
              item.hidden = false;
            } else {
              const terms = item.getAttribute('data-terms').toLowerCase();
              item.hidden = terms.indexOf(filter) < 0;
            }
          });
        }, 250);
      });

      // Sort by type and remember preference
      const iconType = sessionStorage.getItem('sl-icon:type') || 'outline';
      select.value = iconType;
      list.setAttribute('data-type', select.value);
      select.addEventListener('sl-change', () => {
        list.setAttribute('data-type', select.value);
        sessionStorage.setItem('sl-icon:type', select.value);
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-medium);
  }

  .icon-search [hidden] {
    display: none;
  }

  .icon-search-controls {
    display: flex;
  }

  .icon-search-controls sl-input {
    flex: 1 1 auto;
  }

  .icon-search-controls sl-select {
    width: 10rem;
    flex: 0 0 auto;
    margin-left: 1rem;
  }

  .icon-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
  }

  .icon-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    margin-top: 1rem;
  }

  .icon-loader[hidden],
  .icon-list[hidden] {
    display: none;
  }

  .icon-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--sl-border-radius-medium);
    font-size: 24px;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    cursor: copy;
    transition: var(--sl-transition-medium) all;
  }

  .icon-list-item:hover {
    background-color: var(--sl-color-primary-50);
    color: var(--sl-color-primary-600);
  }

  .icon-list[data-type="outline"] .icon-list-item[data-name$="-fill"] {
    display: none;
  }

  .icon-list[data-type="fill"] .icon-list-item:not([data-name$="-fill"]) {
    display: none;
  }

  .icon-copy-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    .icon-list {
      grid-template-columns: repeat(8, 1fr);
    }

    .icon-list-item {
      font-size: 20px;
    }

    .icon-search-controls {
      display: block;
    }

    .icon-search-controls sl-select {
      width: auto;
      margin: 1rem 0 0 0;
    }
  }

  @media screen and (max-width: 500px) {
    .icon-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

```

```