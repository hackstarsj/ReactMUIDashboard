import { RouterProvider,createBrowserRouter } from "react-router-dom";
import SampleComponent from "./SampleComponent";
import Layout from "./layout/layout";
import Auth from "./auth/Auth";
import ButtonExample from "./examples/Buttons";
const  App=()=>{
  let sidebarItems=[
    {
      name:"Auth Pages",
      icon:"home",
      link:"/ReactMUIDashboard/auth"
    },
    {
      name:"Home",
      icon:"home",
      link:"/"
    },
    {
      name:"About",
      icon:"info",
      link:"/about"
    },
    {
      name:"Contact",
      icon:"phone",
      link:"/contact"
    },
    {
      name:"Services",
      icon:"settings",
      link:"/services"
    },
    {
      name:"Products",
      icon:"shop",
      link:"/products"
    },
    {
      name:"Login",
      icon:"login",
      link:"/login"
    },
    {
      name:"Register",
      icon:"register",
      link:"/register"
    },
    {
      name:"Ecommerce",
      icon:"ecommerce",
      children:[
        {
          name:"Dashboard",
          icon:"dashboard",
          link:"/dashboard"
        },
        {
          name:"Orders",
          icon:"orders",
          link:"/orders"
        },
        {
          name:"Products",
          icon:"products",
          link:"/products"
        },
        {
          name:"Customers",
          icon:"customers",
          link:"/customers"
        },
        {
          name:"Settings",
          icon:"settings",
          link:"/settings"
        },
        {
          name:"Logout",
          icon:"logout",
          link:"/logout"
        }
      ]
    },
    {
      name:"School",
      icon:"school",
      children:[
        {
          name:"Students",
          icon:"students",
          link:"/students"
        },
        {
          name:"Teachers",
          icon:"teachers",
          link:"/teachers"
        },
        {
          name:"Courses",
          icon:"courses",
          link:"/courses"
        },
        {
          name:"Exams",
          icon:"exams",
          link:"/exams"
        },
        {
          name:"Results",
          icon:"results",
          link:"/results"
        },
        {
          name:"Attendance",
          icon:"attendance",
          link:"/attendance"
        },
        {
          name:"Logout",
          icon:"logout",
          link:"/logout"
        }
      ]
    }
  ]

  const router=createBrowserRouter([
    {
      'path':'/ReactMUIDashboard/auth',
      'element':<Auth/>
    },
    {
      'path':'/ReactMUIDashboard/',
      'element':<Layout sidebarList={sidebarItems}/>,
      'children':[
        {
          'path':'',
          'element':<SampleComponent/>
        },
        {
          'path':'button',
          'element':<ButtonExample/>
        }
      ]
    }
  ])

  return <RouterProvider router={router}  />
}
export default App;