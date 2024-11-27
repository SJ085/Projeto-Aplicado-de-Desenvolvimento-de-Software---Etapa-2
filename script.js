Parse.initialize("7dSGhRME1sWvHdbkzBgxIesJ11zipcHh7P9fJtmU", "HjifmXBfFlqz7Nx6732qm4wYe78dvIEqAa0aowO9");
Parse.serverURL = "https://parseapi.back4app.com/";

// Função para adicionar um novo usuário
async function addUser(username, password) {
    const User = new Parse.User();
    User.set("username", username);
    User.set("password", password);
    try {
        await User.signUp();
        alert("Usuário cadastrado com sucesso!");
    } catch (error) {
        alert("Erro ao cadastrar: " + error.message);
    }
}
(async () => {
    try {
      const serverHealth = await fetch("https://parseapi.back4app.com/health");
      if (serverHealth.ok) {
        console.log("Conexão com o Back4App está funcionando!");
      } else {
        console.error("Problema ao conectar ao servidor do Back4App.");
      }
    } catch (error) {
      console.error("Erro ao verificar a conexão com o Back4App:", error);
    }
  })();
  document.getElementById("register").addEventListener("click", async () => {
    const user = new Parse.User();
    user.set("username", "testUser");
    user.set("password", "123456");
    user.set("email", "testuser@example.com");
  
    try {
      const result = await user.signUp();
      console.log("Usuário registrado com sucesso:", result);
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
    }
  });
    