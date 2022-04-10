import React, {useContext, useEffect} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import a from '../img/a.jpg'
import b from '../img/b.jpg'
import c from '../img/c.jpg'
import search from '../img/search.png'
import Card from '../componetnts/Card'
import TypeBar from '../componetnts/TypeBar'
import ProductList from '../componetnts/ProductList'
import {Context} from "../index";
import { fetchProducts, fetchTypes} from "../http/productAPI";
import { observer } from 'mobx-react-lite'



const Cotalog = observer (() => {
	const {product} = useContext(Context)

	useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchProducts().then(data => product.setProducts(data.rows))
    }, [])



	return (
		<Container>
				<Row>	
					<Col sm={2}>
						<TypeBar/>	
					</Col>
					<Col sm={10}>
						<ProductList />
						</Col>
				</Row>	
		</Container>
	)
})
export default Cotalog
