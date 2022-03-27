import './App.css';
import './vendors/bootstrap/bootstrap.min.css';
import HelloWorld from "./components/hello-world/hello-world";
import Labs from "./components/labs/index";
import Tuiter from "./components/tuiter/";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import HomeScreen from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen";
// import NotificationScreen from "./components/tuiter/NotificationScreen";


library.add(fab, fas)

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            {/*<Route path="notifications"*/}
                            {/*       element={<NotificationScreen/>}/>*/}
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;