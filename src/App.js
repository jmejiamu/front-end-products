
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";

const App = () => {
    const [id, setId] = useState();
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/' render={props => <Home {...props} setId={setId} />} />
                <Route exact={true} path='/detail' render={props => <Details {...props} id={id} />} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
