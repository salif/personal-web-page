---
title: About this site
description: Information about this site
weight: 10
---

The site:
- is available in [English](https://salif.eu/), [Bulgarian](https://salif.eu/bg/) and [Esperanto](https://salif.eu/eo/).
- is open source [on Codeberg](https://codeberg.org/salif/personal-web-page).
- is made with a static site generator named [Zola](https://www.getzola.org/).
- uses a theme maintained by me, called [Linkita](https://codeberg.org/salif/linkita).
- uses [Vercel Web Analytics](https://vercel.com/docs/analytics) to count site visits.
- supports light and dark [mode][mode_toggle], which persist after manual switching, with an option to [reset][mode_reset].

[mode_toggle]:javascript:(()=>{window.linkita.toggleDarkMode();})();
[mode_reset]:javascript:(()=>{window.linkita.resetDarkMode();})();
