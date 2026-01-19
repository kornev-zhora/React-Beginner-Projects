import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from 'routes';
import {BrowserRouter as Router} from "react-router";
// import {BrowserRouter as Router} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    return (
        <div className="App">
            <h3>Welcome here is our app</h3>
            <Router>
                <Routes />
            </Router>
        </div>
    )
};

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
