import React, { Component } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import NewBlog from "./components/Blog/NewBlog";
import LoginForm from "./components/User/LoginForm";
import RegisterForm from "./components/User/RegisterForm";
import Logout from "./components/User/Logout";
import auth from "../src/services/userService";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header user={this.state.user} />
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={LoginForm} />
            <Route path="/newblog" component={NewBlog} />
            <Route path="/:id" component={Blog} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
