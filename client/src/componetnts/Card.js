import React from 'react'
import { Link } from 'react-router-dom'
import plus from '../img/btn-plus.svg'
import checked from '../img/btn-checked.svg'
import unliked from '../img/heart-unliked.svg'
import liked from '../img/heart-liked.svg'

function Card({ price, title, imageUrl, onFavorite, onPlus }) {
	const [isAdded, setIsAdded] = React.useState(false)
	const [isFavorite, setIsFavorite] = React.useState(false)

	const onClickFavorite = () => {
		setIsFavorite(!isFavorite)
	}
	const onClickPlus = () => {
		onPlus({ title, price, imageUrl })
		setIsAdded(!isAdded)
	}

	return (
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
					<img width={133} height={112} src={imageUrl} alt='a' />
					<Link to='/2' className='text-decoration-none text-reset'>
						<p>{title}</p>
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
							<b>{price} руб.</b>
						</div>
						<img
							className=' cu-p'
							onClick={onClickPlus}
							src={isAdded ? checked : plus}
							alt='plus'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
