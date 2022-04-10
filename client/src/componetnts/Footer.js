import vc from '../img/vc.png'
import insta from '../img/insta.png'
import tel from '../img/tel.png'
import adress from '../img/adress.png'
import email from '../img/email.png'

function Footer() {
	return (
		<div className='main-footer'>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<h4>Где нас найти:</h4>
						<ul className='list-unstyled'>
							<li>
								<img
									style={{ marginRight: '5px' }}
									src={adress}
									height='20'
									width='15'
									classname='d-inline-block align-top'
									alt='adress'
								/>
								Адрес: г. Иваново, ул. Шевченко, д. 2.
							</li>
							<li>
								<img
									style={{ marginRight: '5px' }}
									src={tel}
									height='15'
									width='15'
									classname='d-inline-block align-top'
									alt='tel'
								/>
								Телефон: <a href='tel: +79303418461'>+7 930 341 84 61</a>
							</li>
							<li>
								<img
									style={{ marginRight: '5px' }}
									src={email}
									height='15'
									width='15'
									classname='d-inline-block align-top'
									alt='email'
								/>
								Email:{' '}
								<a href='mailto: Marya.ivanova.17@inbox.ru'>
									Marya.ivanova.17@inbox.ru
								</a>
							</li>
						</ul>
					</div>
					<div className='col'>
						<h4>Соц. сети:</h4>
						<ul className='list-unstyled'>
							<li>
								<img
									style={{ marginRight: '5px' }}
									src={vc}
									height='20'
									width='20'
									classname='d-inline-block align-top'
									alt='vc'
								/>
								<a href='https://vk.com/roza5080'>https://vk.com/roza5080</a>
							</li>
							<li>
								{' '}
								<img
									style={{ marginRight: '5px' }}
									src={insta}
									height='20'
									width='20'
									classname='d-inline-block align-top'
									alt='insta'
								/>
								<a href='https://www.instagram.com/cvetochnidomik/'>
									https://www.instagram.com/cvetochnidomik/
								</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className='row'>
					<p className='col-sm d-flex justify-content-center'>
						&copy;{new Date().getFullYear()} Цветочный домик | Все права
						защищены
					</p>
				</div>
			</div>
		</div>
	)
}
export default Footer
