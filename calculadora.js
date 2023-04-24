({
    // Função que realiza a soma entre os números
    Add: function(component, event, helper) {
      var a = component.get("v.num1"); // Obtém o valor do primeiro número
      var b = component.get("v.num2"); // Obtém o valor do segundo número
      var total = parseInt(a) + parseInt(b); // Realiza a soma dos valores convertendo-os para inteiro
      component.set("v.total", total); // Define o valor total na variável total
      component.set("v.isAdd", true); // Define o booleano de adição como true
      component.set("v.isSub", false); // Define o booleano de subtração como false
      component.set("v.isMul", false); // Define o booleano de multiplicação como false
      component.set("v.isDiv", false); // Define o booleano de divisão como false
    },
  
    // Função que realiza a subtração entre os números
    Sub: function(component, event, helper) {
      var a = component.get("v.num1"); // Obtém o valor do primeiro número
      var b = component.get("v.num2"); // Obtém o valor do segundo número
      var total = parseInt(a) - parseInt(b); // Realiza a subtração dos valores convertendo-os para inteiro
      component.set("v.total", total); // Define o valor total na variável total
      component.set("v.isAdd", false); // Define o booleano de adição como false
      component.set("v.isSub", true); // Define o booleano de subtração como true
      component.set("v.isMul", false); // Define o booleano de multiplicação como false
      component.set("v.isDiv", false); // Define o booleano de divisão como false
    },
  
    // Função que realiza a multiplicação entre os números
    Mul: function(component, event, helper) {
      var a = component.get("v.num1"); // Obtém o valor do primeiro número
      var b = component.get("v.num2"); // Obtém o valor do segundo número
      var total = parseInt(a) * parseInt(b); // Realiza a multiplicação dos valores convertendo-os para inteiro
      component.set("v.total", total); // Define o valor total na variável total
      component.set("v.isAdd", false); // Define o booleano de adição como false
      component.set("v.isSub", false); // Define o booleano de subtração como false
      component.set("v.isMul", true); // Define o booleano de multiplicação como true
      component.set("v.isDiv", false); // Define o booleano de divisão como false
    },
  
    // Função que realiza a divisão entre os números
    Divi: function(component, event, helper) {
      var a = component.get("v.num1"); // Obtém o valor do primeiro número
      var b = component.get("v.num2"); // Obtém o valor do segundo número
      var total = parseInt(a) / parseInt(b); // Realiza a divisão dos valores convertendo-os para inteiro
      component.set("v.total", total); // Define o valor total na variável total
      component.set("v.isAdd", false); // Define o booleano de adição como false
      component.set("v.isSub", false); // Define o booleano de subtração como false
      component.set("v.isMul", false); // Define o booleano de multiplicação como false
      component.set("v.isDiv", true); // Define o booleano de divisão como true
    },
  
    //Função que limpa as informações da calculadora
    Clear: function(component, event, helper) {
      component.set("v.total", 0); //Define o valor do atributo "total" como zero.
      component.set("v.num1", 0); //Define o valor do atributo "num1" como zero.
      component.set("v.num2", 0); //Define o valor do atributo "num2" como zero.
      component.set("v.isAdd", false); //Define o valor do atributo "isAdd" como falso.
      component.set("v.isSub", false); //Define o valor do atributo "isSub" como falso.
      component.set("v.isMul", false); //Define o valor do atributo "isMul" como falso.
    }
  });