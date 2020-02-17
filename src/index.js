import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

// Redux.
import configStore from "./redux/confiStore";
import { Provider as ReduxProvider} from "react-redux";

const store = configStore();

render(
    <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>,
    document.getElementById("app")
);
