import { Routes, Route } from "react-router-dom"
import HomePages from "./pages/HomePages.jsx"
import About from "./pages/About.jsx"
import Register from "./pages/Auth/Register.jsx"
import Contact from "./pages/Contact.jsx"
import Policy from "./pages/policy.jsx"
import Pagenotfound from "./pages/pagenotfound.jsx"
// for notifications using npm toastify 
import 'react-toastify/dist/ReactToastify.css'
import Login from "./pages/Auth/Login"
import Dashboard from "./pages/user/Dashboard.jsx"
import PrivateRoute from "./Components/Routes/Private.jsx";
import ForgotPasssword from "./pages/Auth/ForgotPasssword.jsx";
import AdminRoute from "./Components/Routes/AdminRoute.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import CreateCategory from "./pages/Admin/CreateCategory.jsx"// for admin
import CreateProduct from "./pages/Admin/CreateProduct.jsx";
import UpdateProduct from "./pages/Admin/UpdateProduct.jsx"; // for admin
import Products from  "./pages/Admin/Products.jsx"// for admin
import Users from "./pages/Admin/Users.jsx"
import Orders from "./pages/user/Orders.jsx" // for user
import Profile from "./pages/user/Profile.jsx"
import Search from "./pages/Search.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Categories from "./pages/Categories.jsx";
import CategoryProduct from "./pages/CategoryProduct.jsx";
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