### 3 Configurando o git
    no terminal: 
        git config --global core.editor code 
        git config --global --edit

    no arquivo .gitconfig 
        [user]
	        email = jessica.mec.ctc@gmail.com
	        name = Jéssica A. 
        [push]
	        followTags = true
        [core]
	        editor = code --wait
        [alias]
	        s = !git status -s
	        c = !git add --all && git commit -m
	        l = !git log --pretty=format:'%C(yellow)%h %C(white)%d%C(cyan) %s %C(white)- %C(magenta)%cn%C(white), %C(blue)%cr'
    
    observações: 
        %cn = commit name
        %H = hash completa do commit
        %h = hash reduzida do commit
        %d = mostra a branch
        %s = título do commmit
        %cr = data relativa do commit

        study about mock and spyOn
### 11 About jest

    configurações do jest no package.json 

      "scripts": {
        "test": "jest --passWithNoTests --silent --noStackTrace --runInBand",
        "test:verbose": "jest --passWithNoTests --runInBand",
        "test:unit": "npm test -- --watch -c jest-unit-config.js",
        "test:integration": "npm test -- --watch -c jest-integration-config.js",
        "test:staged": "npm test -- --findRelatedTests",
        "test:ci": "npm test -- --coverage"
        },

    flags: 
    --runInBand: faz com que todos os testes sejam rodados de forma sequencial. 
    -c:  executa os comandos especificados no arquivo jest-unit-config para rodar apenas os arquivos cuja extensão corresponde a .spec.ts

    ao rodar npm rum test:ci será criada a pasta coverage. Ela deve ser ignorada pelo git e pelo eslint. Logo, devemos incluir o nome da pasta em ambos os arquivos. Além disso, na pasta .husky.json configuramos para o husky para rodar o comado npm run test:ci antes que o push seja realizado.
    
    no .husky.json: 
    
    "hooks": {
        "pre-commit":"lint-staged",
        "pre-push": "npm run test:ci"
    }
    

    test:staged é rodado toda vez que fazemos um commit

    ... adicionamento scripts

    "test:unit": "npm test -- --watch"
        Quando eu escrevo "npm test -- " eu estou herdando tudo o que existe no meu script "teste".
    
    os testes unitários serão rodados com a extensão .spec, enquanto os testes de integração serão rodados com a extensão .test

    o jest reconhece naturalmente que os arquivos *.spec.ts e *.test.ts são arquivos de teste. 

    criar arquivo jest-unit-config.js chamando o arquivo jest.config.js para definir no package.json a diferença entre testes unitários e testes de integração com o objetivo de conseguir direcionar o jest para rodar especificamente os tipos de testes que desejamos, ao invés de rodar todos os arquivos de teste de uma única vez.

       
    
# Comand line
    git init
    npm init -y
    npm i -D git-commit-msg-linter@2.3.11
    npm i -D typescript@3.7.4 @types/node@13.1.6
    
    npm install --save-dev eslint@6.8.0 eslint-plugin-standard@4.0.1 eslint-plugin-promise@4.2.1 eslint-plugin-import@2.20.0 eslint-plugin-node@9.2.0 @typescript-eslint/eslint-plugin@2 eslint-config-standard-with-typescript@11.0.1
    
    Habilitar ESLint

    npm i -D husky@4.0.6

    npm i -D lint-staged@9.5.0


    GIT 
    …or push an existing repository from the command line
    git remote add origin https://github.com/jessicaapoli/tdd-mongo.git
    git branch -M main
    git push -u origin main

    OR 

    …or create a new repository on the command line
    echo "# tdd-mong0" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/jessicaapoli/tdd-mongo.git
    git push -u origin main

    npm i -D jest@24.9.0 @types/jest@24.0.25 ts-jest@24.3.0

    jest --init

    Configuração: 
    Yes
    Yes
    No
s
    npm test 
    para iniciar o jest. Este script de teste está definido em package.json


    exemplo TS 

    isValid (email: string): boolean {} 
    isValid receberá um email, que é uma string e deverá retornar num booleano.

    método (parâmetro: tipo do parâmeto): tipo de retorno do método.

    ### Aula 9 - Considerações 
    Aplicou-se: 
    i. ISP - Interface Segration Principle
    ii. S do SOLID - Single Responsability Principle - Segregar as Responsabilidades

### Criando o EmailValidatorAdapter e mockando o validator
    obs: sut means system under test
    npm i validator@12.1.0
    npm i @types/validator -D 
        ↑Esta é a biblioteca oficial do typescript para que ele reconheça os tipos do validator.


### 15 Criando BcriptAdapter e mockando o bcript
    Começo da criação da camada de infraestrutura 
    npm install bcrypt
    npm i @types/bcrypt -D

### 16 Configurando o MongoDb em memória
    
    @shelf/jest-mongodb     npmjs.com/package/@shelf/jest-mongodb
    no projeto fizemos: 
    npm i -D @shelf/jest-mongodb @types/mongodb
    npm i mongodb

    Sempre antes dos testes de integração deevemos conectar ao mongodb 
    e desconectar após os testes.

    Ler documentação para entender as alterações que foram feitas na lib para a versão atual: 
    https://github.com/mongodb/node-mongodb-native/blob/4.1/docs/CHANGES_4.0.0.md

    Git stash para commitar sem ter problema com o arquivo de test.
    Rever o video com a 

