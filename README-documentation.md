# MonPremierLab - Guide rapide : Bases des API REST avec Express

## Qu'est-ce qu'une API REST ?
Une **API REST** (**R**epresentational **S**tate **T**ransfer) est une architecture permettant la communication entre un client et un serveur via le protocole HTTP. Elle repose sur des principes comme :
- L'utilisation des méthodes HTTP (`GET`, `POST`, `PUT`, `DELETE`)
- Une structure basée sur les ressources (`/users`, `/products`)
- Des réponses au format JSON

### 📖 [En savoir plus sur REST](https://restfulapi.net/)

---

## Installation des dépendances essentielles

### 1. Initialiser un projet Node.js
```sh
npm init -y
```

### 2. Installer Express
Express est un framework minimaliste pour créer des API en Node.js.
```sh
npm install express
```
📖 [Documentation officielle d'Express](https://expressjs.com/)

### 3. Installer Nodemon
Nodemon permet de redémarrer automatiquement le serveur après chaque modification du code.
```sh
npm install --save-dev nodemon
```
Ajoutez ce script dans `package.json` :
```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```
📖 [Documentation officielle de Nodemon](https://github.com/remy/nodemon)

---

## Créer une API REST simple avec Express

### 1. Créer un fichier `index.js`
```js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Route GET
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur mon API REST !' });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

### 2. Lancer l'API
En mode normal :
```sh
npm start
```
En mode développement (avec Nodemon) :
```sh
npm run dev
```

---

## Notion de Module et de Service

### 1. Modules
Un module est un fichier ou un ensemble de fichiers qui encapsulent des fonctionnalités spécifiques et réutilisables. Dans une API Express, on peut organiser les routes et la logique métier sous forme de modules.

Exemple d'un module `userRoutes.js` :
```js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Liste des utilisateurs' });
});

module.exports = router;
```

Puis, dans `index.js` :
```js
const userRoutes = require('./userRoutes');
app.use('/users', userRoutes);
```

### 2. Services
Un service est une couche qui contient la logique métier et sépare les opérations sur les données des routes ou endpoints. Il permet de structurer proprement le code.

Exemple d'un service `userService.js` :
```js
const getUsers = () => {
    return [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
};

module.exports = { getUsers };
```

Utilisation dans `userRoutes.js` :
```js
const { getUsers } = require('./userService');
router.get('/', (req, res) => {
    res.json(getUsers());
});
```

---

## Middleware dans Express

Un middleware est une fonction qui **intercepte** les requêtes HTTP avant qu'elles n'atteignent les routes finales. Il peut être utilisé pour la validation, l'authentification, la journalisation, etc.

### Exemple d'un middleware de journalisation
```js
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Passe à la suite
};

app.use(logger);
```
📖 [Documentation Express sur les middleware](https://expressjs.com/en/guide/using-middleware.html)

---

## Ressources utiles
- 📖 [Guide Express](https://expressjs.com/en/guide/routing.html)
- 📖 [Express - Using middleware](https://expressjs.com/en/guide/using-middleware.html)
- 📖 [Nodemon GitHub](https://github.com/remy/nodemon)