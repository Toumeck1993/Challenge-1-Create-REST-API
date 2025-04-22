const userService = require('../services/userService');


// GET /users - Récupérer tous les utilisateurs
const getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.status(200).json(users);
};

// GET /users/:id - Récupérer un utilisateur par ID
const getUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = userService.getUserById(id);

  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  res.status(200).json(user);
};

// POST /users - Créer un nouvel utilisateur
const createUser = (req, res) => {
  const userData = req.body;

  if (!userData.name || !userData.email) {
    return res.status(400).json({ message: "Nom et email sont requis" });
  }

  const newUser = userService.createUser(userData);
  res.status(201).json(newUser);
};

// PUT /users/:id - Mettre à jour un utilisateur existant
const updateUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const userData = req.body;

  const updatedUser = userService.updateUser(id, userData);

  if (!updatedUser) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  res.status(200).json(updatedUser);
};

// DELETE /users/:id - Supprimer un utilisateur
const deleteUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const deletedUser = userService.deleteUser(id);

  if (!deletedUser) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  res.status(200).json(deletedUser);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};