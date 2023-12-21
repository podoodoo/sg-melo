# sg-melo

Simple e-commerce application

## Dependencies:

-   React
-   React Router
-   Vite
-   TailwindCSS
-   Fake Store API (seed data)
-   Zustand (state management)
-   Vitest

## Getting Started

1. **Clone the repository**

```
git clone https://github.com/podoodoo/sg-melo.git
cd sg-melo
```

2. **Install dependencies and run application**

```
npm install
npm run dev
```

## File structure

```
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── components
│   │   ├── CartItemCard.jsx
│   │   ├── ItemCard.jsx
│   │   └── Navbar.jsx
│   ├── hooks
│   │   └── useFakeStoreApi.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── cart
│   │   │   └── index.jsx
│   │   └── shop
│   │       ├── Mens.jsx
│   │       ├── Womens.jsx
│   │       └── index.jsx
│   ├── stores
│   │   └── cartStore.js
│   ├── test
│   │   └── utils.test.js
│   └── utils
│       └── utils.js
```

## How it works / behind the scenes

Uses a modern tech stack for a clean, responsive, and responsive e-commerce application. React was for building frontend components, and employs Vite for a more streamlined development workflow (and because CRA is bloated and dying). TailwindCSS was used for ensuring clean, responsive, mobile-first design. Behind the scenes, Fake Store API was used to fetch store feed data. The API was designed to be RESTful and allowed for fetching data with constraints and was utilized by the Mens and Womens shop pages. Zustand was chosen to be used because it provided a lightweight, easy-to-use developer experience.

For further improvements to achieve a more robust application, different shop category pages can be created based on the categories from the API. Additional improvements can be made for a better user experience such as toasts/notifications, filter function, individual item selection, graphics, user login, sessions, etc. React Suspense can be used in place of or in conjunction with React NavLinks. Error handling can also be improved from fetching from the API as well as integration and/or e2e testing.

How I approached creating this project was first going through some React examples of simple ecommerce sites for inspiration and to minimize reinventing the wheel. Along the way, I made a list of the tech stacks I could utilize. React & Nodejs was suggested to me from a earlier discussion so I went along with that. Vite, TailwindCSS, and Zustand were used because I wanted a truly minimal viable product. Considered were Redux and Context API for state management, MUI and ChakraUI for styling. For testing, I tried using Jest but configuring babel for Vite gave me headaches so I used Vitest. ChatGPT helped too.

For file structure, I usually like to put component files that are used in multiple pages in the component folder. The other files can all be in the src folder, but I like to compartmentalize it in case of future developments. I try to implement good React architecture patterns to create reusable code that separate logic and views. 

### Inspo:

-   https://reactjsexample.com/tag/ecommerce/
-   ChatGPT
