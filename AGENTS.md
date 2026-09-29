# Base44 Setup Notes

## Project type
Plain Node.js exercise scripts (no framework, no `package.json`). The files `app.js` and `exercicio1/app.js` are standalone scripts that print validation results to the console via `console.log`.

## How it runs
- `server.js` is a minimal HTTP server (Node built-in `http` module) that executes each exercise script with `child_process.execSync`, captures stdout, and serves the results as an HTML page on port 3000.
- No external dependencies — uses only Node.js built-ins.
- Live reload via `node --watch server.js` (reloads when `server.js` changes). Script output is re-computed on every page refresh, so edits to `app.js` / `exercicio1/app.js` appear by refreshing the browser.

## Docker compose
`docker-compose.base44.yml` runs `node:22-slim` with the repo bind-mounted at `/app`. No build step needed.

## Verification
- `curl localhost:3000` returns the HTML page with script output.
- Healthcheck probes `http://localhost:3000/`.
