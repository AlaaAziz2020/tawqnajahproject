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
// import MaddiSupport from './component/MaddiSupport/MaddiSupport';
import MyOrdDetails from './component/MyOrdDetails/MyOrdDetails'
import Categories from './component/Categories/Categories';
import ProductsSection from './component/ProductsSection/ProductsSection';
import CategoryFilter from './component/CategoryFilter/CategoryFilter';
import CategoryPage from './component/CategoryPage/CategoryPage';
import Shopping from './component/Shopping/Shopping';
import Orders from './component/Orders/Orders';
import PaymentPage from './component/PaymentPage/PaymentPage';
import EyeSupport from './component/EyeSupport/EyeSupport';
import FinancialSupport from './component/FinancialSupport/FinancialSupport';
import EyeSuccess from './component/EyeSuccess/EyeSuccess';
import FinancialSuccess from './component/FinancialSuccess/FinancialSuccess';
import Favorites from './component/Favorites/Favorites';
import CustomerRegister from './component/Register/Register'
import CategoryDetails from './component/CategoryDetails/CategoryDetails';
import OffersTawq from './component/OffersTawq/OffersTawq';
import FSuccess from './component/FSuccess/FSuccess';
import ProductsElectronics  from './component/ProductsElectronics/ProductsElectronics';
import ProductsFurniture from './component/ProductsFurniture/ProductsFurniture';
import ProductsKitchen from './component/ProductsKitchen/ProductsKitchen';
import CategoriesSlider from './component/CategoriesSlider/CategoriesSlider';
import Abouttawq from './component/Abouttawq/Abouttawq';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [

{ index: true, element: <Login /> },
{ path: 'login', element: <Login /> },
{ path: 'home', element: <Home /> },
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
{ path: 'product/:id', element: <ProductDetails /> },    // ← مصححة
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
{ path: 'emptyadvertisement', element: <EmptyAdvertisement /> },
{ path: 'choosesupport', element: <ChooseSupport /> },
// { path: 'maddisupport', element: <MaddiSupport /> },      // ← مصححة
{ path: 'eyesupport', element: <EyeSupport /> },
{ path: 'myorddetails', element: <MyOrdDetails /> },
{ path: 'categories', element: <Categories /> },
{ path: 'productssection', element: <ProductsSection /> },
{ path: 'categoryfilter', element: <CategoryFilter /> },
{ path: 'categorypage', element: <CategoryPage /> },
{ path: 'shopping', element: <Shopping /> },
{ path: 'orders', element: <Orders /> },
{ path: 'paymentpage', element: <PaymentPage /> },
{ path: 'financialsupport', element: <FinancialSupport /> },
{ path: 'eyesuccess', element: <EyeSuccess /> },
{ path: 'financialsuccess', element: <FinancialSuccess /> },
{ path: 'morerelated', element: <MoreRelated /> },
{ path: 'favorites', element: <Favorites /> },
{path:'categorydetails',element:<CategoryDetails/>},
{path:'offerstawq',element:<OffersTawq/>},
{ path:"/customer/register", element:<CustomerRegister />} ,
{path:'productselectronis',element:<ProductsElectronics/>},
{path:'productsfurnature',element:<ProductsFurniture/>},
{path:'productskitchen',element:<ProductsKitchen/>},
{path:'fsuccess',element:<FSuccess/>},
{path:'categoriesslider',element:<CategoriesSlider/>},
{path:'abouttawq' ,element:<Abouttawq/>},
{path:"offerstawq",element:<OffersTawq/>},
// { path:"/saller/register", element:<SellerRegister />} ,


     
    ],
  },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
