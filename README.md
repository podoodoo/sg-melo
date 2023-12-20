# sg-melo

Simple e-commerce application

## Dependencies:

-   React
-   React Router
-   Vite
-   TailwindCSS
-   Fake Store API (seed data)
-   Zustand (state management)
-   Jest

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

### Inspo:

-   https://reactjsexample.com/tag/ecommerce/
-   ChatGPT
