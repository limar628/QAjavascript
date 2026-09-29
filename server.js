const http = require("http");
const { execSync } = require("child_process");
const path = require("path");

const PORT = 3000;
const HOST = "0.0.0.0";

const scripts = [
  { label: "app.js", file: path.join(__dirname, "app.js") },
  { label: "exercicio1/app.js", file: path.join(__dirname, "exercicio1", "app.js") },
];

function runScript(file) {
  try {
    const output = execSync(`node "${file}"`, { encoding: "utf8", timeout: 5000 });
    return { ok: true, output: output.trim() };
  } catch (err) {
    return { ok: false, output: err.stderr ? err.stderr.trim() : String(err) };
  }
}

function render() {
  const results = scripts.map((s) => ({ ...s, ...runScript(s.file) }));

  const cards = results
    .map(
      (r) => `
    <div class="card">
      <div class="card-header">
        <span class="badge ${r.ok ? "ok" : "err"}">${r.ok ? "OK" : "ERRO"}</span>
        <code>${r.label}</code>
      </div>
      <pre class="output">${r.output || "(sem saída)"}</pre>
    </div>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercícios JS — Saída</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      background: #0f172a;
      color: #e2e8f0;
      min-height: 100vh;
      padding: 2rem 1rem;
    }
    header { text-align: center; margin-bottom: 2rem; }
    header h1 { font-size: 1.6rem; font-weight: 600; }
    header p { color: #94a3b8; margin-top: .4rem; font-size: .9rem; }
    .grid {
      max-width: 720px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
    .card {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 12px;
      overflow: hidden;
    }
    .card-header {
      display: flex;
      align-items: center;
      gap: .6rem;
      padding: .8rem 1rem;
      border-bottom: 1px solid #334155;
      background: #1e293b;
    }
    .card-header code {
      font-family: "SF Mono", "Fira Code", monospace;
      font-size: .85rem;
      color: #cbd5e1;
    }
    .badge {
      font-size: .7rem;
      font-weight: 700;
      padding: .15rem .5rem;
      border-radius: 999px;
      text-transform: uppercase;
    }
    .badge.ok { background: #064e3b; color: #34d399; }
    .badge.err { background: #7f1d1d; color: #fca5a5; }
    .output {
      font-family: "SF Mono", "Fira Code", monospace;
      font-size: .85rem;
      line-height: 1.5;
      padding: 1rem;
      white-space: pre-wrap;
      word-break: break-word;
      color: #a5b4fc;
    }
    footer { text-align: center; margin-top: 2rem; color: #475569; font-size: .8rem; }
  </style>
</head>
<body>
  <header>
    <h1>Exercícios de JavaScript</h1>
    <p>Saída dos scripts executados com <code>node</code></p>
  </header>
  <main class="grid">
    ${cards}
  </main>
  <footer>Atualize a página para re-executar os scripts</footer>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(render());
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
