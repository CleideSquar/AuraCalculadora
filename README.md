# AuraCalculadora

**Projeto de Calculadora Básica**

Este projeto consiste em uma calculadora básica implementada em Aura Components, uma framework do Salesforce Lightning.

## Estrutura do Componente Aura
O componente Aura é composto por diversos elementos, como a declaração de interfaces, atributos, campos de entrada e botões. A seguir, serão apresentados os principais elementos utilizados no componente:

- **implements:** define as interfaces que o componente implementa. No caso deste projeto, foram utilizadas as interfaces force:appHostable, flexipage:availableForAllPageTypes, flexipage:availableForRecordHome, force:hasRecordId, forceCommunity:availableForAllPageTypes e force:lightningQuickAction.
- **attribute:** define os atributos do componente, que podem ser usados para armazenar valores ou controlar comportamentos. Neste projeto, foram criados três atributos do tipo inteiro (num1, num2 e total) e quatro atributos do tipo booleano (isAdd, isSub, isMul e isDiv).
- **input:** cria campos de entrada do tipo lightning:input para inserir os números a serem calculados.
- **button:** cria botões para realizar as operações matemáticas (Adicionar, Subtrair, Multiplicar, Dividir e Limpar). Cada botão tem uma classe específica que define sua aparência e um evento onclick que chama a operação matemática correspondente.
- **if:** estrutura condicional que mostra o resultado da operação aritmética selecionada pelo usuário.

## Operações Aritméticas
As quatro operações aritméticas básicas (adição, subtração, multiplicação e divisão) foram implementadas no componente Aura. Quando um dos botões é clicado, a operação correspondente é executada e o resultado é exibido no campo total. Além disso, os booleanos isAdd, isSub, isMul e isDiv são atualizados para controlar qual operação foi executada.

## Como Usar
Para utilizar a calculadora, basta adicionar o componente Aura a uma página ou tela do Salesforce Lightning. O componente pode ser usado tanto em ambientes de aplicativos (force:appHostable) quanto em ambientes de comunidade (forceCommunity:availableForAllPageTypes).

## Limitações
Esta calculadora foi desenvolvida apenas como uma demonstração do uso da framework Aura Components e não é recomendada para uso em ambientes de produção. Além disso, ela apresenta algumas limitações, como a falta de tratamento de erros e a impossibilidade de lidar com números decimais ou grandes demais.
