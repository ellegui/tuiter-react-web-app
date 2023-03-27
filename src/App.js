import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Profile from "./tuiter/profile";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/*" element={<Labs/>}/>
                    <Route path="/*"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;