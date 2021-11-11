import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home";
import AuthProvider from "./components/Context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import AddCar from "./components/AddCar/AddCar";
import Explore from "./components/Explore/Explore";
import CarDetail from "./components/CarDetail/CarDetail";
import AddReview from "./components/AddReview/AddReview";
import MyOrder from "./components/MyOrder/MyOrder";
import DashBoard from "./components/Dashboard/Dashboard";
import Pay from "./components/Pay/Pay";
import Manage from "./components/ManageProducts/ManageProducts";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";

function App() {
  return (
    <div className="bg-dark text-white">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addCar">
              <AddCar></AddCar>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/car/:_id">
              <CarDetail></CarDetail>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/review">
              <AddReview></AddReview>
            </Route>
            <Route path="/pay">
              <Pay></Pay>
            </Route>
            <Route path="/manageProducts">
              <Manage></Manage>
            </Route>
            <Route path="/manageAll">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
