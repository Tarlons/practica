import React from 'react';
import {Col} from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import a from '../img/a.jpg'
import {PRODUCT_ROUTE} from '../utils/const'
import plus from '../img/btn-plus.svg'
import checked from '../img/btn-checked.svg'
import unliked from '../img/heart-unliked.svg'
import liked from '../img/heart-liked.svg'


const ProductItem = ({product,  onFavorite, onPlus }) => {
	const [isAdded, setIsAdded] = React.useState(false)
	const [isFavorite, setIsFavorite] = React.useState(false)

	const onClickFavorite = () => {
		setIsFavorite(!isFavorite)
	}

	const onClickPlus = () => {
		setIsAdded(!isAdded)
	}

	const navigate = useNavigate()
	console.log(navigate)
	return (
		<Col md={3} onClick={() => navigate (PRODUCT_ROUTE + '/' + product.id)}>
		<div class='products'>
			<div class='product-wrapper'>
				<div className='product'>
					<div className='favorite' onClick={onFavorite}>
						<img
							onClick={onClickFavorite}
							src={isFavorite ? liked : unliked}
							alt='unliked'
						/>
					</div>
					<img width={133} height={112} src={a} alt='a' />
					<Link to='/2' className='text-decoration-none text-reset'>
						<p>123</p>
					</Link>
					<div
						className='d-flex justify-between align-center'
						style={{
							justifyContent: 'space-between',
							marginRight: '10px',
						}}
					>
						<div className='d-flex flex-column'>
							<span>Цена:</span>
							<b> руб.</b>
						</div>
						<img
							onClick={onClickPlus}
							src={isAdded ? checked : plus}
							className=' cu-p'
							alt='plus'
						/>
					</div>
				</div>
			</div>
		</div>
		</Col>
	)
}

export default ProductItem;