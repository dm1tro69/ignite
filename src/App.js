import Home from "./pages/Home";
import Globalstyles from "./components/Globalstyles";
import {Route, Switch} from "react-router-dom";
import GameDetail from "./components/GameDetail";
import Nav from "./components/Nav";


function App() {


  return (
    <div>
       <Globalstyles/>
        <Nav/>
        <Switch>
            <Route exact path={['/game/:id', '/']}>
                <Home/>
            </Route>

        </Switch>

    </div>
  );
}

export default App;
