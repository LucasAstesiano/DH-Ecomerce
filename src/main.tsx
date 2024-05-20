import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutMain from "./components/Layout/LayoutMain";
import "./index.css";
import Home from "./pages/Home/Home";
import { CartProvider } from "./context/CartProvider";
import Checkout from "./pages/Checkout/Checkout";
import {  QueryClient, QueryClientProvider} from 'react-query'
import Login from "./pages/Login/Login";
import Dasboard from "./pages/Dashboard/Dasboard";


const queryClient = new QueryClient()

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutMain />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/checkout", element: <Checkout /> }
		]
	},
	{path:"/login",element:<Login/>},
	{path:"/dashboard",element:<Dasboard/>}
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<CartProvider>
				<RouterProvider router={router} />
			</CartProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
