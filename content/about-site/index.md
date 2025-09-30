---
title: About this site
description: Information about this site
weight: 10
---

The site:
- is available in [English](@/_index.md), [Bulgarian](@/_index.bg.md) and [Esperanto](@/_index.eo.md).
- is open source [on Codeberg](https://codeberg.org/salif/personal-web-page).
- is made with a static site generator named [Zola](https://www.getzola.org/).
- uses a theme maintained by me, called [Linkita](https://codeberg.org/salif/linkita).
- supports light and dark [mode][mode_toggle], which persist after manual switching, with an option to [reset][mode_reset].

[mode_toggle]:javascript:(()=>{window.linkita.toggleDarkMode();})();
[mode_reset]:javascript:(()=>{window.linkita.resetDarkMode();})();
