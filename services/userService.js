// Tableau initial d'utilisateurs
let users = [
   { id: 1, name: "John wick", email: "john@wick.com", age: 32 }, 
     { id: 4, name: "Jack Reacher", email: "jack@reacher.com", age: 25 },
     { id: 2, name: "Lebron James", email: "lebron@james.com", age: 30 },
     { id: 3, name: "Nico Paz", email: "nico@paz.com", age: 28 }
   ];
 
  
// Fonction pour récupérer tous les utilisateurs
  const getAllUsers = () => {
    return users;
  };
  
  // Fonction pour récupérer un utilisateur par son ID
  const getUserById = (id) => {
    return users.find(user => user.id === id) || null;
  };
  
  // [Fonction pour ajouter un nouvel utilisateur. 
  // Crée un objet avec les données fournies et l'ajoute au tableau. 
  // Retourne le nouvel utilisateur.]
  const createUser = (userData) => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const newUser = { id: newId, ...userData };
  users.push(newUser);
  return newUser; 
};
  
  // [Fonction pour mettre à jour un utilisateur existant par son ID. 
  // Met à jour les champs fournis et retourne l'utilisateur modifié ou null s'il n'existe pas.]
  const updateUser = (id, userData) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;
  
    users[index] = { ...users[index], ...userData };
    return users[index];
  };
  
  // [Fonction pour supprimer un utilisateur par son ID. 
  // Retire l'utilisateur du tableau et retourne l'utilisateur supprimé ou null s'il n'existe pas.]
  const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;

  const deletedUser = users[index];
  users.splice(index, 1);
  return deletedUser;
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