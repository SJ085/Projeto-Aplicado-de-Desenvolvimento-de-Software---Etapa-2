const Parse = require('parse/node');

// Configurações do Back4App
Parse.initialize("7dSGhRME1sWvHdbkzBgxIesJ11zipcHh7P9fJtmU", "HjifmXBfFlqz7Nx6732qm4wYe78dvIEqAa0aowO9");
Parse.serverURL = "https://parseapi.back4app.com/";

// Testando conexão
async function testConnection() {
    const TestObject = Parse.Object.extend("TestObject");
    const testObject = new TestObject();
    try {
        await testObject.save({ foo: "bar" });
        console.log("Conexão bem-sucedida com o Back4App!");
    } catch (error) {
        console.error("Erro ao conectar ao Back4App:", error);
    }
}

testConnection();
