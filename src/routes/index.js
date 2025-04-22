const express = require('express');
const router = express.Router(); 
const userController = require('../../controllers/userController');

// Route de test initiale
router.get('/test', (req, res) => {
  res.json({ message: 'Route de test fonctionnelle !' });
});

// Routes utilisateur
router.get('/users', userController.getAllUsers);          // GET tous les utilisateurs
router.get('/users/:id', userController.getUserById);      // GET un utilisateur par ID
router.post('/users', userController.createUser);          // POST un nouvel utilisateur
router.put('/users/:id', userController.updateUser);       // PUT (maj) un utilisateur
router.delete('/users/:id', userController.deleteUser);    // DELETE un utilisateur

module.exports = router;