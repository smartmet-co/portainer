# SmartMet Alert configuration for Colombia

`capmap-config.js` and `index.html` as they should be deployed to this host.
The container bind-mounts them from **`/smartmet/cnf/smartalert/`** (see
`../docker-compose.yml`), so files committed here do **not** reach the
container on their own — copy them across and restart:

```bash
sudo cp capmap-config.js index.html /smartmet/cnf/smartalert/
docker compose -f ../docker-compose.yml up -d --force-recreate smartmetalert
```

They are kept in git because they are served to end users as JavaScript, so a
change to them deserves a diff and a review rather than an in-place edit on the
host. `img/` (the custom alert icons) and `data/` stay on the host only.

## Why these files changed

`fmidev/smartmetalert` was untagged in the compose file, i.e. `:latest`, so this
host picked up the 2026-10-21 app (`0de2f65`, the PHP 8.5.12 base image that
fixes CVE-2026-109618 / CVE-2026-109619). Two things break when the new app runs
against the old mounted files:

- **`index.html`** — the app's own index.html gained a
  `#topright-toolbar` / `#filter-panel` structure (`select#eventType`,
  `select#lang`, `#legend-warning-types`) that the rewritten `js/capmap.js`
  populates. Mounting the old file over it leaves nothing to populate, and the
  menus disappear. The copy here is the app's own `index.html` at `0de2f65`
  with only the translation block swapped for `en-CO` + `es-CO`.
- **`capmap-config.js`** — `js/capmap.js` used to hardcode `fillOpacity: 1` and
  ignore the configured value. It now reads
  `alertOptions.polygonOptions.fillOpacity || 0.85`, so the `0.2` that had been
  dead config became live and warning polygons turned nearly transparent.
  Set to `1`, which is what the old app actually drew.

Nothing else needed changing: Colombia already sets `extendedDayControl: true`
with `day3Control`/`day4Control` off, so its day menu has four buttons — the
layout the new CSS is built around — and `en-CO`/`es-CO` both carry the day
labels it uses. `subDirectories`, `displayActiveFor` and
`timeZone: 'America/Bogota'` were already correct.

## Refreshing from upstream

The reference copies live on `smartmet-demo` at
`/smartmet/www/smartalert-co/`, reachable over ssh as `smartmet@smartmet-demo`
from inside the FMI network. **Do not copy its `index.html` blindly** — the
upstream directories still carry the pre-`0de2f65` file. Take the app's own
`index.html` from `fmidev/smartalert-web` at the tag this host runs and swap
only the translation `<script>` lines.
