import "./App.css";

import Login from "./components/Login";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import User from "./components/User";
import AddNewBook from "./components/AddNewBook";

import Categories from "./components/Categories";
import Books from "./components/Books";
import EditBooks from "./components/EditBooks";
import Search from "./components/SearchBar";
import MyBooks from "./components/MyBooks";
import Signup from "./components/Signup";

import Library from "./components/Library";

import ForgotPassword from "./components/FrogotPassword";

import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./firebase";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route exact path="/" element={<PrivateRoute />}>
                  <Route exact path="/" element={<Library />} />
                </Route>
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>

      {/* <Sidebar>
        <User />
        <AddNewBook />
        <MyBooks />
        <Categories />
      </Sidebar>

      <Main>
        <Books />
        <EditBooks />
      </Main> */}
    </div>
  );
}

export default App;
