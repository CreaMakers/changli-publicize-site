import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "@/pages/LayoutPage";
import Home from "@/pages/Home";
import Contentus from '@/pages/Contentus'
import Information from '@/pages/Information'
import Project from '@/pages/Project'
 


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage/>,
    children: [
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "contentus",
        element: <Contentus/>
      },
      {
        path: "information",
        element: <Information/>
      },
      {
        path: "project",
        element: <Project/>
      },
    ],
  },
]);

export default router;