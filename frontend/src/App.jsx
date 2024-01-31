import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
function App() {

  return (
   <>
          <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} /> */}
        </Routes>
      </Router>

   </>
  )
}

export default App
