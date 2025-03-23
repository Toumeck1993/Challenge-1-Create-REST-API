# MonPremierLab - Création d'une API REST avec Node.js et Express

## Bienvenue
Merci de prendre à cet atelier pratique ! Vous allez découvrir comment construire une API REST en utilisant Node.js et Express. Cet atelier pose les bases pour développer des services API plus complexes et adaptés à des projets réels. Une **API REST** (**R**epresentational **S**tate **T**ransfer) est une interface qui permet aux applications de communiquer entre elles de manière flexible et évolutive, en séparant clairement le frontend du backend.

## Le challenge
Votre mission est de créer une API REST fonctionnelle pour "MonPremierLab". Vous devrez :  
- Comprendre les principes de l’architecture REST et ses différences avec les applications rendues côté serveur.  
- Implémenter des endpoints pour gérer **des ressources comme les utilisateurs ou les produits.**
- Structurer votre application pour qu’elle puisse évoluer facilement avec de nouvelles fonctionnalités.

## Expected behaviour
À la fin de cet atelier, votre API devra :  
- Gérer au moins deux ressources avec des endpoints pour les opérations CRUD :  
  - **Create** (Creation),  
  - **Read** (Lecture),  
  - **Update** (Mise à jour),  
  - **Delete** (Supprimer).  
- Respecter les conventions REST : URLs claires et significatives, utilisation appropriée des méthodes HTTP (GET, POST, PUT, DELETE).  
- Être modulaire et prête à accueillir des extensions futures.  
- Répondre correctement aux requêtes testées avec des clients HTTP comme Postman, sans générer d’erreurs.

## Where to find everything
Pour mener à bien cet atelier, vous disposerez de :  
- **Code de démarrage** : Un projet Node.js préconfiguré avec Express pour démarrer rapidement.  
- **Documentation** : Un guide (voir le fichier README-documentation.md) sur les bases des API REST et les dépendances essentielles (comme `express` et `nodemon`).  
- **Fichier de configuration** : Un `package.json` prêt à l’emploi pour gérer les dépendances de votre projet.

## Building your project
Voici les étapes pour construire votre API :  
1. **Configurer le code de démarrage**  
   - Clonez le projet fourni et exécutez `npm install` pour installer les dépendances.
   - Lancez le serveur avec `npm run dev` et explorer la structure initiale.  

2. **Comprendre l’architecture des API REST**  
   - Étudiez les principes REST (ressources, verbes HTTP) dans la documentation fournie.  
   - Comparez cette approche aux applications traditionnelles rendues côté serveur.  

3. **Planifier vos endpoints API**  
   - Choisissez les ressources à gérer (ex. : utilisateurs, produits).  
   - Définissez des endpoints, par exemple :  
     - `GET /users` : récupérer la liste des utilisateurs,  
     - `POST /users` : créer un nouvel utilisateur.  
     - `POST /products` : créer un nouveau produit.  
     - `GET /products` : récupérer la liste des produits.
     - `GET /products/1` : récupérer le produit ayant pour Id = 1
     - `DELETE /products/1`: supprimer le produit ayant pour Id = 1
     - `PUT /products/3`: mettre à jour le produit ayant pour id = 3 

4. **Implémenter les endpoints avec Express**  
   - Configurez les routes dans Express pour vos endpoints.  
   - Créez des contrôleurs simples pour traiter les requêtes (ex. : renvoyer une liste pour `GET /users`).  

5. **Structurer l’application pour la croissance**  
   - Séparez votre code en modules (routes, contrôleurs, services).  
   - Ajoutez des middlewares pour gérer les erreurs ou journaliser les requêtes.  

6. **Tester votre API**  
   - Utilisez Postman pour envoyer des requêtes à vos endpoints.  
   - Vérifiez que les réponses sont correctes et que les erreurs sont bien gérées.  

## Deploying your project
Une fois votre API testée localement, vous pourrez la déployer sur une plateforme comme Heroku ou Vercel :  
- Configurez des variables d’environnement pour sécuriser les informations sensibles (ex. : clés d’API).  
- Testez vos endpoints en ligne pour confirmer leur bon fonctionnement.

## Got feedback for us?
Nous serions ravis de connaître votre avis ! Si vous avez des suggestions pour améliorer cet atelier ou si vous avez rencontré des difficultés, n’hésitez pas à les partager avec nous. Vos retours sont essentiels pour enrichir cette expérience d’apprentissage.

Cet atelier est entièrement gratuit. N’hésitez pas à le partager avec toute personne susceptible d’en bénéficier.