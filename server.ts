import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.resolve(__dirname, 'dist');
const publicPath = path.resolve(__dirname, 'public');

app.use(express.json());

// Serve static assets from dist
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath, {
    extensions: ['html'],
    index: 'index.html'
  }));
}

// Serve static assets from public
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));
}

// Health check endpoint for Cloud Run
app.get('/healthz', (_req, res) => {
  res.status(200).send('OK');
});

// Fallback routing for multi-page static site
app.use((req, res, next) => {
  if (req.method !== 'GET') {
    return next();
  }

  const requestedPath = req.path;
  
  // Check exact file in dist
  const exactFile = path.join(distPath, requestedPath);
  if (fs.existsSync(exactFile) && fs.statSync(exactFile).isFile()) {
    return res.sendFile(exactFile);
  }

  // Check .html file in dist
  const htmlFile = path.join(distPath, `${requestedPath}.html`);
  if (fs.existsSync(htmlFile) && fs.statSync(htmlFile).isFile()) {
    return res.sendFile(htmlFile);
  }

  // Check index.html inside subdirectory
  const subIndexFile = path.join(distPath, requestedPath, 'index.html');
  if (fs.existsSync(subIndexFile) && fs.statSync(subIndexFile).isFile()) {
    return res.sendFile(subIndexFile);
  }

  // Fallback to main index.html
  const mainIndex = path.join(distPath, 'index.html');
  if (fs.existsSync(mainIndex)) {
    return res.sendFile(mainIndex);
  }

  res.status(404).send('Página não encontrada');
});

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`Servidor Matemática em Movimento rodando em http://0.0.0.0:${PORT}`);
});
