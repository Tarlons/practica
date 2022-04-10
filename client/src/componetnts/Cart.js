import btnremove from '../img/btn-remove.svg'
import arrow from '../img/arrow.svg'
import empty from '../img/empty.png'

function Cart({ onClose, items = [] }) {
	return (
		<div className='clear'>
			<div className='overlay'>
				<div className='drawer'>
					<h2 className='d-flex justify-between'>
						Корзина
						<img
							onClick={onClose}
							className='cu-p'
							src={btnremove}
							alt='close'
						/>
					</h2>
					<div className='cartEmpty d-flex align-center justify-center flex-column flex'>
						<img
							className='mb-20'
							width='120px'
							height='120px'
							src={empty}
							alt='Empty'
						/>
						<h2>Корзина пустая</h2>
						<p className='opacity-6'>
							Добавьте хотя бы один товар, чтобы сделать заказ.
						</p>
						<button onClick={onClose} className='greenButton'>
							<img src={arrow} alt='Arrow' />
							Вернуться назад
						</button>
					</div>
					<div className='items'>
						{items.map(obj => (
							<div className='cartItem d-flex align-center mb-20 '>
								<div
									style={{ backgroundImage: `url(${obj.image})` }}
									className='cartItemImg'
								></div>
								<div className='mr-20'>
									<p className='mb-5'>{obj.title}</p>
									<b>{obj.price} руб.</b>
								</div>
								<img className='removeBtn' src={btnremove} alt='Remove' />
							</div>
						))}
					</div>

					<div className='cartTotalBlock'>
						<ul>
							<li>
								<span>Итого:</span>
								<div></div>
								<b>1 000 руб.</b>
							</li>
						</ul>
						<button className='greenButton'>
							Оформить заказ <img src={arrow} alt='arrow' />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
