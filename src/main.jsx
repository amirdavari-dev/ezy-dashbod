import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/signin/signin.jsx';
import Signup from './pages/signup/signup.jsx';
import Wallet from './pages/dashbord/wallet/wallet.jsx';
import Orders from './pages/dashbord/orders/customerorders.jsx';
import Statistics from './pages/dashbord/statistics/statistics.jsx';
import Dashbordself from './pages/dashbord/selfDashbord/dashbordself.jsx';
import Dashbord from './pages/dashbord/dashbord.jsx';
import Customerorders from './pages/dashbord/orders/customerorders.jsx';
import Homecontent from './pages/home/homecontent/homecontent.jsx';
import Learning from './pages/home/learning/learning.jsx';
import Blog from './pages/home/blog/blog.jsx';
import Aboutus from './pages/home/aboutus/aboutus.jsx';
import Questionrepeat from './pages/home/questionrepeat/questionrepeat.jsx';
import PanelUserEzy from './components/dashbord/panelUserEzy/panelUserEzy.jsx';


AOS.init({
  duration: '800',
  once: true,
  easing: true
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App}>
          <Route index Component={Homecontent} />
          <Route path='learning' Component={Learning} />
          <Route path='blog' Component={Blog} />
          <Route path='about-us' Component={Aboutus} />
          <Route path='repeat-question' Component={Questionrepeat} />
        </Route>
        <Route path='/user' Component={Signin} />
        <Route path='/user/register' Component={Signup} />
        <Route path='/dashbord' element={<Dashbord />}>
          <Route index element={<Dashbordself />} />
          <Route path='wallet' element={<Wallet />} />
          <Route path='orders' element={<Orders />}>
            <Route path='customer-orders' element={<Customerorders />} />
            <Route path='my-purchases' element={<Orders />} />
          </Route>
          <Route path='statistics' element={<Statistics />} />
        </Route>
        <Route path='dashbord/ezy/:userId' element={<PanelUserEzy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
