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
library.add(fab, fas)
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello"
                           exact={true}
                           element={<HelloWorld/>}/>
                    <Route path="/"
                           exact={true}
                           element={<Labs/>}/>
                    <Route path="/tuiter"
                           exact={true}
                           element={<Tuiter/>}/>
                    <Route path="/tuiter/home" element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" element={<ExploreScreen/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;