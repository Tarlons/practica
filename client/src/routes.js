import { ADMIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE,  LOGIN_ROUTE, MAIN_ROUTE, ABOUTE_ROUTE, CONTACTS_ROUTE, ERROR_ROUTE, CABINET_ROUTE } from './utils/const'
import Admin from './pages/Admin'
import Basket from './componetnts/Cart'
import Cotalog from './pages/Cotalog'
import Main from './pages/Main'
import Aboute from './pages/About'
import Contacts from './pages/Contacts'
import Cabinet from './pages/Cabinet'
import Error from './pages/Error404'
import Login from './pages/Authorization'
import Registration from './pages/Registration'
import ProductPage from './pages/ProductPage'

export const authRoutes = [
	{
		path: ADMIN_ROUTE,
		Component: Admin
	},
	{
		path: CABINET_ROUTE,
		Component: Cabinet
	},
]

export const publicRoutes = [
	{
		path: MAIN_ROUTE,
		Component: Main
	},
	{
		path: ABOUTE_ROUTE,
		Component: Aboute
	},
	{
		path: CONTACTS_ROUTE,
		Component: Contacts
	},
	{
		path: SHOP_ROUTE,
		Component: Cotalog
	},
	{
		path:  LOGIN_ROUTE,
		Component: Login
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Registration
	},
	{
		path: PRODUCT_ROUTE + '/:id',
		Component: ProductPage
	},
	{
		path: ERROR_ROUTE,
		Component: Error
	}
]