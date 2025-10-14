---
title: About this site
description: Information about this site
weight: 10
---

The site:
- is available in [English](@/_index.md), [Bulgarian](@/_index.bg.md) and [Esperanto](@/_index.eo.md).
- is open source on [Codeberg](https://codeberg.org/salif/personal-web-page) and hosted by [statichost.eu](https://www.statichost.eu/).
- is made with a static site generator named [Zola](https://www.getzola.org/).
- uses a site theme maintained by me, called [Linkita](https://codeberg.org/salif/linkita).
- supports light and dark [mode][mode_toggle], with an option to [reset][mode_reset].

[mode_toggle]:javascript:(()=>{window.zolaTheme.color.toggle();})();
[mode_reset]:javascript:(()=>{window.zolaTheme.color.reset();})();
