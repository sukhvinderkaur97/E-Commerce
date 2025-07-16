import { Routes, Route } from "react-router-dom"
import HomePages from "./pages/HomePages"
import About from "./pages/About"
import Register from "./pages/Auth/Register"
import Contact from "./pages/contact"
import Policy from "./pages/policy"
import Pagenotfound from "./pages/pagenotfound"
// for notifications using npm toastify 
import 'react-toastify/dist/ReactToastify.css'
import Login from "./pages/Auth/Login"
import Dashboard from "./pages/user/Dashboard"
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory"// for admin
import CreateProduct from "./pages/Admin/CreateProduct";
import UpdateProduct from "./pages/Admin/UpdateProduct"; // for admin
import Products from  "./pages/Admin/Products"// for admin
import Users from "./pages/Admin/Users"
import Orders from "./pages/user/Orders" // for user
import Profile from "./pages/user/Profile"
import Search from "./pages/Search.jsx";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage.jsx"
import TestDropIn from "./pages/TestDropIn.jsx";




function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/product/:slug" element={<ProductDetails />} />
         <Route path="/categories" element={<Categories />} />
         <Route path="/cart" element={<CartPage />} />
          <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        {/* Private routes ke liye yaha use kar rahe hai kon saa route private rakha h kon saa nhi Auth ke basic pe acces ho  */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders/>} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        {/* Private routes for Admin  */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
           <Route path="admin/product/:slug" element={<UpdateProduct/>} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
           <Route path="admin/orders" element={<Orders />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
        <Route path="/test-payment" element={<TestDropIn />} />
      </Routes>
    </>
  )
}

export default App


/// Note : Routes container ki traha use hota hai jahan multiple Route use hota hai 