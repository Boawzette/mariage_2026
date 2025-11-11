const functions = require("firebase-functions");
const next = require("next");

// Détecte si on est en dev ou prod
const dev = process.env.NODE_ENV !== "production";

// Configure Next.js pour utiliser le dossier de build `.next`
const app = next({
  dev,
  conf: { distDir: ".next" },
});

const handle = app.getRequestHandler();

// Fonction exportée pour Firebase
exports.nextjsFunc = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
