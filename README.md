<p align="center">
  <img src="./.github/banner-logo.png" alt="WAITERAPP" />
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/leonardo-vilela95/">
    <img
      alt="Linkedin"
      src="https://img.shields.io/badge/-Leonardo%20Vilela-5b0b0d?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leonardo-vilela95/"
    />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img
      alt="Typescript"
      src="https://img.shields.io/badge/Typescript-710e10.svg?style=flat-square&logo=typescript&logoColor=white"
    />
  </a>
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="https://img.shields.io/badge/Node.js-8a1114.svg?style=flat-square&logo=node.js&logoColor=white"
    />
  </a>
  <a href="https://reactjs.org/">
    <img
      alt="React"
      src="https://img.shields.io/badge/React-9f1416.svg?style=flat-square&logo=react&logoColor=white"
    />
  </a>
  <a href="https://reactnative.dev/">
    <img
      alt="React Native"
      src="https://img.shields.io/badge/React%20Native-b61619.svg?style=flat-square&logo=react&logoColor=white"
    />
  </a>
  <a href="https://www.mongodb.com/">
    <img
      alt="MongoDB"
      src="https://img.shields.io/badge/MongoDB-cc191c.svg?style=flat-square&logo=mongodb&logoColor=white"
    />
  </a>
  <a href="https://expo.dev/">
    <img
      alt="Expo"
      src="https://img.shields.io/badge/Expo-e31c1f.svg?style=flat-square&logo=expo&logoColor=white"
    />
  </a>
</p>

<br />

# 👨‍🍳 Sobre

**WAITER**APP é um software de gerenciamento de pedidos para restaurantes!

Nele, garçons podem anotar pedidos pelo app e enviá-los para o dashboard web, em formato de kanban,
dividido em 3 colunas: 🕒 Fila de espera, 👨‍🍳 Em produção e ✅ Pronto!

O projeto foi desenvolvido inteiramente em Typescript durante o evento [O Poder do JS](https://opoderdojs.jstack.com.br/),
ministrado pelo [Mateus Silva](https://www.linkedin.com/in/mateusilva/).

O frontend web e mobile foram construídos usando React, React Native, Expo, Vite e Styled Components.
Já a api, usando Node.js, Express e MongoDB.

<br />

# 🎨 Layout

Os layouts do app estão disponíveis no **Figma**: https://www.figma.com/file/dm7tP9X81c5loLur8Z3Y91/WAITERAPP

<p align="center">
  <img src="./.github/layout.png" alt="WAITERAPP" />
</p>

<br />

# 🤔 Como executar

Para clonar esse repositório pelo terminal, utilize o [Git](https://git-scm.com/).

```bash
# Clonando por HTTPS
git clone https://github.com/leovile/waiter-app.git
# Clonando por SSH
git clone git@github.com:leovile/waiter-app.git
# Entre na pasta do projeto
cd waiter-app
```

Para instalar as dependências e executar o projeto, é necessário possuir o [Node.js](https://nodejs.org/) instalado em sua máquina. Neste projeto, foi utilizada a versão LTS [18.12.0](https://nodejs.org/en/blog/release/v18.12.0/).

O app mobile pode ser visualizado através do [Expo](https://expo.dev/) em um dispositivo físico ou emulador (Android ou iOS).

Para executar o banco de dados MongoDB, foi utilizado um [Docker container](https://www.docker.com/resources/what-container/), mas existem outras alternativas como [MongoDB Atlas](https://www.mongodb.com/atlas/database) e [MongoDB Community](https://www.mongodb.com/try/download/community).

<table>
<tr>
<td align="center">Docker</td><td align="center">API</td>
</tr>
<tr>
<tr>
<td>

```bash
# Crie o container na porta padrão
docker run --name mongo -p 27017:27017 -d mongo
# Verifique se está ativo
docker ps -a
```

</td>
<td>

```bash
# Dependências da API back-end
cd api && npm install
# Execute a API
npm run dev
```

</td>
</tr>
<tr>
<td align="center">Web</td><td align="center">Mobile</td>
</tr>
<tr>
<td>

```bash
# Dependências do front-end web
cd web && npm install
# Execute o front-end web
npm run dev
```

</td>
<td>

```bash
# Dependências do app mobile
cd mobile && npm install
# Execute o app mobile (Expo)
npx expo start
```

</td>
</tr>
</table>

<br />

# 📮 Entre em contato

**Linkedin**: https://www.linkedin.com/in/leonardo-vilela95/

Desenvolvido por **Leonardo Vilela** 👋🏻
