import{ createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Home/Home/Home';
import About from '../../../Components/About/About';
import Service from '../../Service/Service';
import Menu from '../../Menu/Menu';
import Pages from '../../Pages/Pages/Pages';
import Contact from '../../Contact/Contact';
import BookAtable from '../../BookAtable/BookAtable';


const router = createBrowserRouter ([
            { path: '/',
            element: <Main></Main>,
            children:[
              {
                path:'/',
                element: <Home></Home>
              },
              {
                path:'/About',
                element:<About></About>
              },
              {
                path:'/Service',
                element: <Service></Service>
              },
              {
                path:'/Menu',
                element: <Menu></Menu>
              },
              {
                path:'/Pages',
                element: <Pages></Pages>
              },
              {
                path:'/Contact',
                element:<Contact></Contact>
              },
              {
                path:'/BookAtable',
                element:<BookAtable></BookAtable>
              },
             
            ]
},




])
export default router
