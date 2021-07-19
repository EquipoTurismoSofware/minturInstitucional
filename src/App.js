import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import React from "react";
import { Provider } from "./context";
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import DefaultNavbar from "components/DefaultNavbar"; 
import Register from 'pages/Register';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import PNovedades from "pages/Novedades/PNovedades";
import PNovedad from "pages/Novedades/PNovedad";
import PListadoEstadisticas from "pages/Estadisticas/PListadoEstadisticas";

function App() {
    return (
         <Provider>
            <Router history={Router.hashHistory}>
                <React.Fragment>
                    <div className="absolute w-full z-20">
                        <DefaultNavbar />
                    </div>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/estadisticas" component={PListadoEstadisticas} />
                        <Route exact path="/novedades" component={PNovedades} />
                        <Route exact path="/novedad/:id" component={PNovedad} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </React.Fragment>
            </Router>
          </Provider>
    );
}

export default App;
