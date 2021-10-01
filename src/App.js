import Home from "./pages/Home";
import Globalstyles from "./components/Globalstyles";
import {Route, Switch} from "react-router-dom";
import GameDetail from "./components/GameDetail";


function App() {


  return (
    <div>
       <Globalstyles/>
        <Switch>
            <Route exact path={['/game/:id', '/']}>
                <Home/>
            </Route>

        </Switch>

    </div>
  );
}

export default App;
