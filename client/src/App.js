import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './componetnts/Footer'
import Header from './componetnts/Header'
import Cart from './componetnts/Cart'
import AppRouter from './componetnts/AppRouter'
import { Context } from './index'
import { observer } from 'mobx-react-lite'
import { check } from './http/userAPI'
import { Spinner } from 'react-bootstrap'

const App = observer(() => {
	const { user } = useContext(Context)
	const [loading, setLoading] = useState(true)

	const [cartOpened, setCartOpened] = React.useState(false)
	const [cartItems, setCartItems] = React.useState([])

	 useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

	return (
		<div className='page-container'>
			<div className='content-wrap'>
				{cartOpened && (
					<Cart items={cartItems} onClose={() => setCartOpened(false)} />
				)}
				<BrowserRouter>
					<Header onClickCart={() => setCartOpened(true)} />
					<AppRouter />
				</BrowserRouter>
			</div>
			<Footer />
		</div>
	)
})

export default App
