// [Créez un tableau initial nommé 'users' contenant quelques objets représentant des utilisateurs. Chaque objet doit avoir au moins un 'id', un 'name' et un 'email'. Ajoutez d'autres propriétés si vous le souhaitez.]
let users = [
    // [Exemple : { id: 1, name: "Alice", email: "alice@example.com" }]
  ];
  
  // [Fonction pour récupérer tous les utilisateurs. Retourne le tableau 'users'.]
  const getAllUsers = () => {
    // [Ajoutez votre logique ici]
  };
  
  // [Fonction pour récupérer un utilisateur par son ID. Retourne l'utilisateur ou null s'il n'existe pas.]
  const getUserById = (id) => {
    // [Ajoutez votre logique ici, par exemple en utilisant find()]
  };
  
  // [Fonction pour ajouter un nouvel utilisateur. 
  // Crée un objet avec les données fournies et l'ajoute au tableau. 
  // Retourne le nouvel utilisateur.]
  const createUser = (userData) => {
    // [Ajoutez votre logique ici. Générez un nouvel ID basé sur la longueur du tableau, par exemple.]
  };
  
  // [Fonction pour mettre à jour un utilisateur existant par son ID. 
  // Met à jour les champs fournis et retourne l'utilisateur modifié ou null s'il n'existe pas.]
  const updateUser = (id, userData) => {
    // [Ajoutez votre logique ici, par exemple en utilisant findIndex()]
  };
  
  // [Fonction pour supprimer un utilisateur par son ID. 
  // Retire l'utilisateur du tableau et retourne l'utilisateur supprimé ou null s'il n'existe pas.]
  const deleteUser = (id) => {
    // [Ajoutez votre logique ici]
  };
  
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
  
  /**
   * Note : Pour cet atelier, il n’est pas nécessaire d’utiliser une base de données.
   * Le tableau 'users' agit comme une source de données en mémoire pour simplifier l’apprentissage.
   */