import { Container } from 'react-bootstrap'
import a from '../img/a.jpg'

function ProductPage() {
	return (
		<Container>
			<div className='kontainer'>
				<div className='left-column'>
					<img src={a} alt='' />
				</div>
				<div className='right-column'>
					<div className='product-description'>
						<span>Букеты</span>
						<h1>Тюльпан</h1>
						<p>Описание товара</p>
					</div>
					<div className='product-configuration'>
						<div className='config'>
							<span>Выберите количество</span>
							<div className='choose'>
								<button>1 шт</button>
								<button>2 шт</button>
								<button>3 шт</button>
							</div>
							<a href='#spec'>Характеристики товара</a>
						</div>
					</div>
					<div className='product-price'>
						<span>500 руб.</span>
						<a href='#' className='cart-btn'>
							Добавить в корзину
						</a>
					</div>
				</div>
			</div>
			<div>
				<ul
					id='spec'
					className='specifications'
					style={{ marginTop: '4em', marginBottom: '4em' }}
				>
					<li>
						<div class='left'>
							<span class='item__label'>Вес</span>
						</div>
						<span class='item__cor'>1 гр</span>
					</li>
					<li>
						<div class='left'>
							<span class='item__label'>Цвет</span>
						</div>
						<span class='item__cor'>Розовый</span>
					</li>
				</ul>
			</div>
		</Container>
	)
}

export default ProductPage
