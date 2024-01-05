import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import Layout from './Components/Layout.jsx/Layout';
import About from './Components/About.jsx/About';
import Home from './Components/Home/Home';
import CategoryLayout from './Components/CategoryLayout/CategoryLayout';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import ItemDetailPage from './Components/Item/ItemDetailPage';
import store from './store/store.js'
import { Provider } from 'react-redux';
import AddItem from './Components/Item/AddItem.jsx';
import TermsAndConditions from './Components/Terms/TermsAndConditions.jsx';
import HowItWorks from './Components/HowItWorks/HowItWorks.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },    
      {
        path:"/about",
        element:<About/>
      }, 
      {
        path:"/howitworks",
        element:<HowItWorks/>
      },      
      {
        path:"/termsandcondition",
        element:<TermsAndConditions/>
      },           
      {
        path:"/add",
        element:<AddItem/>
      },
     
    ]

  },
  {
    path: "/home/:id",
    element: <Layout loggedIn={1} />,
    children:[
      {
        path:"/home/:id",
        element:<Home/>,
      },    
      {
        path:"/home/:id/about",
        element:<About/>

      },  
      {
        path:"/home/:id/add",
        element:<AddItem/>
      },
     
    ]

  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/Category",
    element: <CategoryLayout/>,
    children:[
      {
        path:"/Category/Id/:mainCategory/:subCategory/:type",
        element:<CategoryPage/>
      },
      {
        path:"/Category/Id/:categoryId/Item/:itemId",
        element:<ItemDetailPage isCity={0} isQuery={0} isCategory={1}/>
      },
      {
        path:"/Category/city/:city",
        element:<CategoryPage isCity={1} isQuery={0} isCategory={0}/>
      },
      {
        path:"/Category/query/:query",
        element:<CategoryPage isCity={0} isQuery={1} isCategory={0}/>
      },
    ]
  
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
