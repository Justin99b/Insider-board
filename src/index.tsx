import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {MantineProvider} from "@mantine/core";
import {Layout} from "./Components/Layout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QuotePage} from "./Pages/QuotePage";
import {QuoteStore} from "./Store/QuoteStore";
import {QuotesPage} from "./Pages/QuotesPage";
import {Observer} from "mobx-react-lite";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let quoteStore = new QuoteStore();

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'quotes',
                element: <QuotesPage store={quoteStore}/>,
            },
            {
                path: 'quotes/:id',
                element: <Observer>{() => (<QuotePage store={quoteStore}/>)}</Observer>
            }
        ]
    }
])

root.render(
    <React.StrictMode>
        <MantineProvider theme={{colorScheme: 'dark'}} withGlobalStyles withNormalizeCSS>
            <RouterProvider router={router}/>
        </MantineProvider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
