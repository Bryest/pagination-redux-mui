# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Commands

`npm create vite@latest`

`npm install @mui/material @emotion/react @emotion/styled`

`npm install @mui/icons-material`

`npm i react-router-dom`

`npm i react-toastify`

`npm i redux react-redux redux-thunk axios redux-logger @reduxjs/toolkit`

## Package description

| Package name     | Detail                                                                 |
| ---------------- | ---------------------------------------------------------------------- |
| redux            | the core of redux                                                      |
| react-redux      | binding react ui with redux                                            |
| redux-thunk      | some delayed work for redux. Interact with dispatch & getState methods |
| axios            | instance to consume APIs                                               |
| redux-logger     | To log redux info                                                      |
| @reduxjs/toolkit | to write redux logic                                                   |

## JSON SERVER

[How to Use JSON Server for Front-end Development](https://www.freecodecamp.org/news/json-server-for-frontend-development/)

1. `npm i -g json-server`
2. `json-server --watch src/Data/db.json --port 8000`

## Reference

https://www.youtube.com/watch?v=Lr0Sy8xE1hY
