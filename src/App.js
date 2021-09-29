import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadGames} from "./actions/gamesActions";



function App() {
    const dispatch = useDispatch()

    useEffect(()=> {
       dispatch(loadGames())
    },[])

  return (
    <div>
       <h1>Hello ignite</h1>
    </div>
  );
}

export default App;
