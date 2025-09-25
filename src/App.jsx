import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/profile"
import Feed from "./components/Feed"

function App() {

  return (
    <>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path={"/"} element={<Feed/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/test" element={<div>Test Page</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
