import Home from "./Pages/Home/Home";
import Questions from "./Pages/Questions/Questions";
import Order from "./Pages/Order/Order";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Page from "./Pages/Page/Page";
import ContactUs from "./Pages/ContactUs/ContactUs";


const routes = [
    { path: "/", element: <Home />, element: <Home /> },
    { path: "/questions", element: <Questions /> },
    { path: "/order", element: <Order /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/pages", element: <Page /> },
]

export default routes;