import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Provider } from "./context";
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
         <Provider>
            <Router history={Router.hashHistory}>
                <React.Fragment>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </React.Fragment>
            </Router>
          </Provider>
    );
}

export default App;
