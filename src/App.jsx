import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dishes from './components/Dishes'
import About from './components/About'
import Menu from './components/Menu'
import Review from './components/Review'
import Footer from './components/Footer'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AboutUS from "./pages/AboutUS";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
     children: [
{
          path: "/login",
          element: <Login />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },

        {
          path: "/about-us",
          element: <AboutUS/>,
        },
        
        
      ],
    },
  ]);

  return (
    <>
 <RouterProvider router={router} />

   <div>
    <Navbar />

    <main>
      <div id="home">
        <Home />
      </div>
      <div id="dishes">
        <Dishes />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="review">
        <Review />
      </div>
    </main>
    <Footer />
   </div>
   </>
  )
}

export default App