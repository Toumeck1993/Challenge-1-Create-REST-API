# MonPremierLab - Création d'une API REST avec Node.js et Express

## Bienvenue
Merci de prendre part à cet atelier pratique ! Vous allez découvrir comment construire une API REST en utilisant Node.js et Express. Cet atelier pose les bases pour développer des services API plus complexes et adaptés à des projets réels.

## Qu'est-ce qu'une API REST ?
Une **API REST** (**R**epresentational **S**tate **T**ransfer) est une interface qui permet aux applications de communiquer entre elles de manière flexible et évolutive, en séparant clairement le frontend du backend.

### Analogie pour comprendre les API REST
Imaginez un restaurant : l'API est comme le serveur qui prend votre commande. Vous (le client/frontend) ne pouvez pas entrer directement dans la cuisine (la base de données/backend), mais vous communiquez vos besoins au serveur en utilisant un "langage" standard (les méthodes HTTP). Le serveur transmet votre demande à la cuisine, puis vous rapporte ce que vous avez commandé (les données JSON).

- **GET** : Comme demander le menu ou un plat spécifique
- **POST** : Comme passer une nouvelle commande 
- **PUT** : Comme modifier une commande déjà passée
- **DELETE** : Comme annuler une commande

Cette séparation claire des rôles rend le système plus organisé et permet à différents "clients" (applications web, mobiles, etc.) de communiquer avec le même "restaurant" (backend) sans connaître ses secrets de cuisine.

## Le challenge
Votre mission est de créer une API REST fonctionnelle pour "MonPremierLab". Vous devrez :  
- Comprendre les principes de l'architecture REST et ses différences avec les applications rendues côté serveur.  
- Implémenter des endpoints pour gérer **des ressources comme les utilisateurs ou les produits.**
- Structurer votre application pour qu'elle puisse évoluer facilement avec de nouvelles fonctionnalités.

## Résultat attendu
À la fin de cet atelier, votre API devra :  
- Gérer au moins deux ressources avec des endpoints pour les opérations CRUD :  
  - **Create** (Création) - Ajouter une nouvelle ressource
  - **Read** (Lecture) - Obtenir des informations sur une ressource
  - **Update** (Mise à jour) - Modifier une ressource existante
  - **Delete** (Supprimer) - Supprimer une ressource
- Respecter les conventions REST : URLs claires et significatives, utilisation appropriée des méthodes HTTP (GET, POST, PUT, DELETE).  
- Être modulaire et prête à accueillir des extensions futures.  
- Répondre correctement aux requêtes testées avec des clients HTTP comme Postman, sans générer d'erreurs.
- Pour compléter cet atelier, vous devez documenter votre expérience dans un fichier nommé `README-mon-experience.md`. **Ce fichier est un journal personnel** vous permet de réfléchir à ce que vous avez appris, aux défis que vous avez rencontrés, et aux améliorations que vous pourriez envisager.

## Où tout trouver
Pour mener à bien cet atelier, vous disposerez de :  
- **Code de démarrage** : Un projet Node.js préconfiguré avec Express pour démarrer rapidement.  
- **Documentation** : Un guide (voir le fichier README-documentation.md) sur les bases des API REST et les dépendances essentielles (comme `express` et `nodemon`).  
- **Fichier de configuration** : Un `package.json` prêt à l'emploi pour gérer les dépendances de votre projet.

## Construire votre projet
Voici les étapes pour construire votre API :

### Phase 1 : Préparation du projet
1. **Créer un fork du projet**  
   - Connectez-vous à GitHub et naviguez vers le dépôt du projet.  
   - Cliquez sur le bouton "Fork" en haut à droite pour créer une copie du projet dans votre propre compte GitHub.  

2. **Configurer le code de démarrage**  
   - Clonez votre fork localement avec la commande suivante (remplacez `<url-de-votre-fork>` par l'URL de votre fork) :  
     ```bash
     git clone <url-de-votre-fork>
     ```  
   - Installez les dépendances avec :  
     ```bash
     npm install
     ```  
   - Lancez le serveur avec :  
     ```bash
     npm run dev
     ```  
   - Explorez la structure initiale du projet.
   
   > 🔍 **Checkpoint** : À ce stade, vous devriez voir dans votre terminal le message "Serveur démarré sur http://localhost:3000".

### Phase 2 : Comprendre et planifier
3. **Comprendre l'architecture des API REST**  
   - Étudiez les principes REST (ressources, verbes HTTP) dans la documentation fournie.  
   - Comparez cette approche aux applications traditionnelles rendues côté serveur.  

4. **Planifier vos endpoints API**  
   - Commençons par deux ressources simples : `users` et `products`
   - Pour chaque ressource, nous aurons besoin des endpoints suivants :
   
   **Utilisateurs** :
   - `GET /users` : Récupérer la liste des utilisateurs
   - `GET /users/:id` : Récupérer un utilisateur spécifique
   - `POST /users` : Créer un nouvel utilisateur
   - `PUT /users/:id` : Mettre à jour un utilisateur
   - `DELETE /users/:id` : Supprimer un utilisateur
   
   **Produits** :
   - `GET /products` : Récupérer la liste des produits
   - `GET /products/:id` : Récupérer un produit spécifique
   - `POST /products` : Créer un nouveau produit
   - `PUT /products/:id` : Mettre à jour un produit
   - `DELETE /products/:id` : Supprimer un produit

   > 🔍 **Checkpoint** : Essayez de dessiner un schéma de vos endpoints avec les méthodes HTTP correspondantes.

### Phase 3 : Implémentation par étapes
5. **Commencer par une route simple**
   - Créez d'abord une seule route GET pour tester votre configuration :
     ```javascript
     app.get('/test', (req, res) => {
       res.json({ message: 'API fonctionnelle!' });
     });
     ```
   - Testez cette route dans votre navigateur ou avec Postman.

6. **Implémenter les endpoints GET** 
   - Créez un dossier `routes` pour organiser vos routes
   - Ajoutez des fichiers séparés pour `userRoutes.js` et `productRoutes.js`
   - Implémentez d'abord les routes GET pour les deux ressources
   - Utilisez un tableau JavaScript simple comme "base de données" temporaire :
     ```javascript
     // Exemple de "base de données" temporaire
     let users = [
       { id: 1, name: 'Alice', email: 'alice@example.com' },
       { id: 2, name: 'Bob', email: 'bob@example.com' }
     ];
     ```

   > 🔍 **Checkpoint** : Testez vos routes GET avec Postman pour vous assurer qu'elles renvoient les données attendues.

7. **Ajouter les routes POST, PUT et DELETE**
   - Complétez votre API avec les autres méthodes HTTP
   - N'oubliez pas d'utiliser `express.json()` middleware pour parser le corps des requêtes :
     ```javascript
     app.use(express.json());
     ```

   > 🔍 **Checkpoint** : Testez la création d'un nouvel utilisateur avec POST et vérifiez qu'il apparaît dans la liste des utilisateurs.

8. **Structurer l'application pour la croissance**  
   - Créez un dossier `controllers` pour séparer la logique de vos routes
   - Créez un dossier `models` pour définir la structure de vos données
   - Ajoutez un middleware simple pour logger les requêtes :
     ```javascript
     app.use((req, res, next) => {
       console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
       next();
     });
     ```

9. **Tester votre API complète**
   - Créez une collection Postman pour tester toutes vos routes
   - Exemple de test pour la création d'utilisateur :
     - Méthode : POST
     - URL : http://localhost:3000/users
     - Body (JSON) : 
       ```json
       {
         "name": "Charlie",
         "email": "charlie@example.com"
       }
       ```

   > 🔍 **Exemple de réponse attendue** : 
   > ```json
   > {
   >   "id": 3,
   >   "name": "Charlie",
   >   "email": "charlie@example.com"
   > }
   > ```

## Ressources d'aide
- **Problèmes communs et solutions** :
  - "Cannot find module" : Vérifiez que vous avez bien installé toutes les dépendances avec `npm install`
  - "Address already in use" : Un autre serveur utilise déjà le port 3000. Changez le port dans votre code ou arrêtez l'autre service.
  - "Unexpected token in JSON" : Vérifiez la syntaxe de votre JSON dans le corps de la requête.

- **Liens utiles** :
  - [Documentation Express.js](https://expressjs.com/fr/)
  - [Guide des méthodes HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods)
  - [Tutoriel Postman](https://learning.postman.com/docs/getting-started/introduction/)

## Déployer votre projet
Une fois votre API testée localement, vous pourrez la déployer sur une plateforme comme Heroku ou Vercel :  
- Configurez des variables d'environnement pour sécuriser les informations sensibles (ex. : clés d'API).  
- Testez vos endpoints en ligne pour confirmer leur bon fonctionnement.

## Des feedback pour nous?
Nous serions ravis de connaître votre avis ! Si vous avez des suggestions pour améliorer cet atelier ou si vous avez rencontré des difficultés, n'hésitez pas à les partager avec nous. Vos retours sont essentiels pour enrichir cette expérience d'apprentissage.

Cet atelier est entièrement gratuit. N'hésitez pas à le partager avec toute personne susceptible d'en bénéficier.