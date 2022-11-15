import { Routes, Route } from "react-router-dom";
import Home from "../../routes/Home";
import Users from "../../routes/Users";
import Error from "../../routes/Error";
import Expenses from "../../routes/Expenses";
import './style.scss'
import User from "../../routes/Users/User/component";


const Output = () =>{
    return(
        <main>
            <h1>User App</h1>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/users" element={<Users />}>
                  <Route path=":userId" element={<User />} />
              </Route>
              <Route path="/expenses" element={<Expenses/>}/>
              <Route path="*" element={<Error/>} />
          </Routes>
        </main>
    )
}

export default Output;