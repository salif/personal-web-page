---
title: About this site
description: Information about this site
weight: 10
---

The site:
- is made with a static site generator named [Zola](https://www.getzola.org/).
- uses a theme maintained by me, called [Linkita](https://codeberg.org/salif/linkita).
- is available in [English](https://salif.eu/), [Bulgarian](https://salif.eu/bg/) and [Esperanto](https://salif.eu/eo/).
- uses [Vercel Web Analytics](https://vercel.com/docs/analytics) to count site visits.
- supports light and dark [mode][1], which persist after manual switching, with an option to [reset][2].
- is open source [on Codeberg](https://codeberg.org/salif/personal-web-page).

[1]:javascript:(()=>{window.linkita.toggleDarkMode();})();
[2]:javascript:(()=>{window.linkita.resetDarkMode();})();
