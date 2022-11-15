import logements from './logements.json';
import { RouterProvider } from "react-router-dom";
import LogementsContext from './logements-context';
import router from './router';

function App(){
    return(
        <div>
        <LogementsContext.Provider value= {logements}>
        <RouterProvider router={router}/>
        </LogementsContext.Provider>
        </div>
    )
}

export default App;