import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { useDispatch, useSelector } from "react-redux";
import NewProduct from "./pages/CreateProduct/NewProduct";
import ProductPage from "./pages/Product/ProductPage";
import CategoryPage from "./pages/Category/CategoryPage";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import CartPage from "./pages/Cart/CartPage";
import OrdersPage from "./pages/Order/OrdersPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import EditProductPage from "./pages/EditProduct/EditProductPage";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { addNotification } from "./Action/userAccount";
import Footer from "./components/Footer/Footer";

function App() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        const socket = io("ws://localhost:8080");
        socket.off("notification").on("notification", (msgObj, user_id) => {
       
            if (user_id === user._id) {
                dispatch(addNotification(msgObj));
            }
        });

        socket.off("new-order").on("new-order", (msgObj) => {
            if (user.isAdmin) {
                dispatch(addNotification(msgObj));
            }
        });
    }, []);
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Header/>
                <Routes>
                    <Route index element={<Home />} />
                    {!user && (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </>
                    )}

                    {user && (
                        <>
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/orders" element={<OrdersPage />} />
                        </>
                    )}
                    {user && user.isAdmin && (
                        <>
                            <Route path="/admin" element={<AdminDashboard />} />
                            <Route path="/product/:id/edit" element={<EditProductPage />} />
                        </>
                    )}
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/category/:category" element={<CategoryPage />} />

                    <Route path="/new-product" element={<NewProduct />} />

                    <Route path="*" element={<Home />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
