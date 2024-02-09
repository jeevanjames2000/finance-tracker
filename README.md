# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm install`

To install Required Dependecies for this project 'required packages will be installed'

### `npm install @mui/material @emotion/react @emotion/styled`

Material Ui Library used in designing components please be sure to install
if you got any errors please refer to this

`https://mui.com/material-ui/getting-started/installation/`

### `npm i react-redux`

Make sure to install react-redux
in project i have used react-redux toolkit for state management for Main Dashboard

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# finance-tracker

# List of Dependecies used in Project

### `"dependencies": `{

    "@emotion/react": "^11.11.3",
    "@emotion/styled": "^11.11.0",
    "@iconify/react": "^4.1.1",
    "@mui/icons-material": "^5.15.9",
    "@mui/material": "^5.15.9",
    "@mui/styled-engine-sc": "^6.0.0-alpha.16",
    "@reduxjs/toolkit": "^2.1.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "chart.js": "^4.4.1",
    "react": "^18.2.0",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.50.1",
    "react-hot-toast": "^2.4.1",
    "react-redux": "^9.1.0",
    "react-router-dom": "^6.22.0",
    "react-scripts": "5.0.1",
    "styled-components": "^6.1.8",
    "web-vitals": "^2.1.4"

}`

### `AuthContext`

Implemented Context for state management inside pages mainly used for Authentication purpose
initiated Static login as of now use this credentials to login

# `email`:'jeevan', `password`:'1234'

Sign Up form is created but not integrated the logic to dynamically signup and sign in

### `Project Flow`

src/
|-- components/
| |-- Auth/
| | |-- Login.js //Login form
| | |-- SignUp.js //Sign Up form
| |-- Source/
| |-- FinanceTrack.js //Add Transactions and make transcations
| |-- TransactionHistory.js // Transaction history
|-- slice/
| |-- expenseSlice.js //Redux slice file where you define your Redux slice and reducers. created few reducers
|-- store/
| |-- store.js //store contains the Redux store file where you configure your Redux store.
|-- App.js //Top level components rendered
|-- index.js
