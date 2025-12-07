import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './component/Login/Login';
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import Register from './component/Register/Register';
import ChangePassword from './component/ChangePassword/ChangePassword';
import ResetPassword from './component/ResetPassword/ResetPassword';
import ForgetPassword from './component/ForgetPassword/ForgetPassword';
import AccountType from './component/AccountType/AccountType';
import Admin from './component/Admin/Admin';
import Services from './component/Services/Services';
import RelatedProducts from './component/RelatedProducts/RelatedProducts';
import RelatedActivites from './component/RelatedActivites/RelatedActivites';
import SidebarFilters from './component/SidebarFilters/SidebarFilters';
import ProductList from './component/ProductList/ProductList';
import ProductCard from './component/ProductCard/ProductCard';
import MyStore from './component/MyStore/MyStore';
import NewOrders from './component/NewOrders/NewOrders';
import NewOrders2 from './component/NewOrders2/NewOrders2';
import NewordersDetails from './component/NewordersDetails/NewordersDetails';
import CanceledOrders from './component/CanceledOrders/CanceledOrders';
import CanceledOrdersDetails from './component/CanceledOrdersDetails/CanceledOrdersDetails';
import ProductDetails from './component/ProductDetails/ProductDetails';
import AddAdvertisement from './component/AddAdvertisement/AddAdvertisement';
import FinancialReports from './component/FinancialReports/FinancialReports';
import MysecodStore from './component/MysecodStore/MysecodStore';
import AddverisementDetails from './component/AdvertisementDetails/AdvertisementDetails';
import MyOrders from './component/MyOrders/MyOrders';
import ConfirmedOrders from './component/ConfirmedOrders/ConfirmedOrders';
import OrderDetails from './component/OrderDetails/OrderDetails';
import ShippedOrders from './component/ShippedOrders/ShippedOrders';
import OrdersDetails2 from './component/OrdersDetails2/OrdersDetails2';
import MyemptydeiveredOrders from './component/MyemptydeiveredOrders/MyemptydeiveredOrders';
import MydeliveredOrders from './component/MydeliveredOrders/MydeliveredOrders';
import Marketing from './component/Marketing/Marketing';
import ProfileAccount from './component/ProfileAccount/ProfileAccount';
import MarketingReferral from './component/MarketingReferral/MarketingReferral';
import LogoutConfirm from './component/LogoutConfirm/LogoutConfirm';
import ContractPage from './component/ContractPage/ContractPage';
import SecondContract from './component/SecondContract/SecondContract';
import BankAccount from './component/BankAccount/BankAccount';
import EmptyAdvertisement from './component/EmptyAdvertisement/EmptyAdvertisement';
import MoreRelated from './component/MoreRelated/MoreRelated'
import ChooseSupport from './component/ChooseSupport/ChooseSupport';
import AyniSupport from './component/AyniSupoort/AyniSupport';
import MaddiSupport from './component/MaddiSupport/MaddiSupport';
import MyOrdDetails from './component/MyOrdDetails/MyOrdDetails'
import FinancialDashboard from './component/FinancialDashboard/FinancialDashboard';
import ProductsSection from './component/ProductsSection/ProductsSection'
import Abouttawq from './component/Abouttawq/Abouttawq';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Login', element: <Login /> },
      { path: 'neworders2', element: <NewOrders2 /> },
      { path: 'newordersdetails', element: <NewordersDetails /> },
      { path: 'changepassword', element: <ChangePassword /> },
      { path: 'forgetpassword', element: <ForgetPassword /> },
      { path: 'resetpassword', element: <ResetPassword /> },
      { path: 'register', element: <Register /> },
      { path: 'accounttype', element: <AccountType /> },
      { path: 'admin', element: <Admin /> },
      { path: 'services', element: <Services /> },
      { path: 'relatedproducts', element: <RelatedProducts /> },
      { path: 'relatedactivites', element: <RelatedActivites /> },
      { path: 'sidebarfilters', element: <SidebarFilters /> },
      { path: 'productlist', element: <ProductList /> },
      { path: 'productcard', element: <ProductCard /> },
      { path: 'productdetails', element: <ProductDetails /> },
      { path: 'canceledorders', element: <CanceledOrders /> },
      { path: 'mystore', element: <MyStore /> },
      { path: 'neworders', element: <NewOrders /> },
      { path: 'canceledordersdetails', element: <CanceledOrdersDetails /> },
      { path: 'addadvertisement', element: <AddAdvertisement /> },
      { path: 'financialreports', element: <FinancialReports /> },
      { path: 'mysecondstore', element: <MysecodStore /> },
      { path: 'advertisementdetails', element: <AddverisementDetails /> },
      { path: 'myorders', element: <MyOrders /> },
      { path: 'confirmedorders', element: <ConfirmedOrders /> },
      { path: 'orderdetails', element: <OrderDetails /> },
      { path: 'shippedorders', element: <ShippedOrders /> },
      { path: 'ordersdetails2', element: <OrdersDetails2 /> },
      { path: 'myemptydeiveredorders', element: <MyemptydeiveredOrders /> },
      { path: 'mydeliveredorders', element: <MydeliveredOrders /> },
      { path: 'marketing', element: <Marketing /> },
      { path: 'profileaccount', element: <ProfileAccount /> },
      { path: 'marketingreferral', element: <MarketingReferral /> },
      { path: 'logoutconfirm', element: <LogoutConfirm /> },
      { path: 'contractpage', element: <ContractPage /> },
      { path: 'secondcontract', element: <SecondContract /> },
      { path: 'bankaccount', element: <BankAccount /> },
      {path:'emptyadvertisement',element:<EmptyAdvertisement/>},
      {path:'choosesupport',element:<ChooseSupport/>},
      { path:'/product/:id', element:<ProductDetails />} ,
      {path:'/maddisupport',element:<MaddiSupport/>},
      {path:'/aynisupport',element:<AyniSupport/>},
      {path:'myorddetails',element:<MyOrdDetails/>},
      {path:'financialdashboard',element:<FinancialDashboard/>},
      {path:'productsSection',element:<ProductsSection/>},
        { path: 'morerelated', element: <MoreRelated /> },
       {path:'abouttawq',element:<Abouttawq/>}
       
     
    ],
  },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
