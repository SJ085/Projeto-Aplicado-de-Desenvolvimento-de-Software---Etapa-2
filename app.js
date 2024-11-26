// Importa o SDK do Parse
const Parse = require('parse/node');

// Inicializa o Parse com suas credenciais do Back4App
Parse.initialize("7dSGhRME1sWvHdbkzBgxIesJ11zipcHh7P9fJtmU", "HjifmXBfFlqz7Nx6732qm4wYe78dvIEqAa0aowO9");
Parse.serverURL = 'https://parseapi.back4app.com/';

// Função para cadastrar um novo usuário (Sign Up)
async function signUpUser(username, password, email) {
    const user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);

    try {
        // Tenta cadastrar o usuário
        const newUser = await user.signUp();
        console.log("Usuário criado:", newUser);
    } catch (error) {
        // Captura erro de e-mail já utilizado
        if (error.code === 202) {  // Código de erro para "Email already taken"
            console.error("Erro: Já existe uma conta com este e-mail.");
        } else {
            console.error("Erro ao criar o usuário:", error.message);
        }
    }
}

// Função para realizar o login do usuário
async function logInUser(username, password) {
    try {
        // Tenta realizar o login do usuário
        const user = await Parse.User.logIn(username, password);
        console.log("Usuário logado:", user);
    } catch (error) {
        // Exibe erro, caso ocorra
        console.error("Erro no login:", error.message);
    }
}

// Função para excluir um usuário
async function deleteUser(userId) {
    const user = new Parse.User();
    user.id = userId;

    try {
        // Verifica se o usuário está autenticado como administrador
        const currentUser = Parse.User.current();
        if (currentUser) {
            // Verifica se o usuário logado tem permissão para excluir
            const roleQuery = new Parse.Query(Parse.Role);
            roleQuery.equalTo('users', currentUser);
            const role = await roleQuery.first();
            if (role && role.get('name') === 'admin') {
                await user.destroy(); // Exclui o usuário
                console.log("Usuário excluído com sucesso");
            } else {
                console.error("Erro: Não há permissão suficiente para excluir o usuário.");
            }
        } else {
            console.error("Erro: Usuário não autenticado.");
        }
    } catch (error) {
        console.error("Erro ao excluir o usuário:", error.message);
    }
}

// Função para buscar um usuário pelo ID
async function getUserById(userId) {
    const currentUser = Parse.User.current(); // Verifica se o usuário está autenticado
    if (!currentUser) {
        console.error("Erro: Usuário não está autenticado.");
        return;
    }

    try {
        const user = await new Parse.Query(Parse.User).get(userId);
        console.log("Usuário encontrado:", user);
    } catch (error) {
        console.error("Erro ao buscar usuário:", error.message);
    }
}

// Testando as funções
async function test() {
    // Cadastro de usuário
    await signUpUser("usuarioTeste", "senha123", "email@dominio.com");

    // Login de usuário
    await logInUser("usuarioTeste", "senha123");

    // Após login, exclua ou busque o usuário (precisa do ID real do usuário)
    // Excluir usuário (após login, verifique se o usuário tem permissões de admin)
    const userId = "userIdAqui"; // Substitua pelo ID real
    await deleteUser(userId);

    // Buscar usuário por ID
    await getUserById(userId);
}

test();
