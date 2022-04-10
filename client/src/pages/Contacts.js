import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import vc from '../img/vc.png'
import insta from '../img/insta.png'
import tel from '../img/tel.png'
import adress from '../img/adress.png'
import email from '../img/email.png'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

function Contacts() {
	const mapData = {
		center: [57.000358, 40.930927],
		zoom: 15,
	}
	const coordinates = [[57.000358, 40.930927]]
	return (
		<>
			<Container style={{ marginTop: '20px' }}>
				<p>
					<img
						style={{ marginRight: '5px' }}
						src={adress}
						height='20'
						width='15'
						classname='d-inline-block align-top'
						alt='adress'
					/>
					Адрес: г. Иваново, ул. Шевченко, д. 2.
				</p>
				<p>
					<img
						style={{ marginRight: '5px' }}
						src={tel}
						height='15'
						width='15'
						classname='d-inline-block align-top'
						alt='tel'
					/>
					Телефон: <a href='tel: +79303418461'>+7 930 341 84 61</a>
				</p>
				<p>
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
				</p>
				<p>Соц. сети:</p>
				<p>
					<a href='https://vk.com/roza5080'>
						<img
							style={{ marginRight: '5px' }}
							src={vc}
							height='15'
							width='15'
							classname='d-inline-block align-top'
							alt='vc'
						/>
						https://vk.com/roza5080
					</a>
				</p>
				<p>
					<a href='https://www.instagram.com/cvetochnidomik/'>
						<img
							style={{ marginRight: '5px' }}
							src={insta}
							height='15'
							width='15'
							classname='d-inline-block align-top'
							alt='insta'
						/>
						https://www.instagram.com/cvetochnidomik/
					</a>
				</p>
				<YMaps>
					<Map defaultState={mapData} width='100%' height='400px'>
						{coordinates.map(coordinate => (
							<Placemark geometry={coordinate} />
						))}
					</Map>
				</YMaps>
			</Container>
			<Container style={{ width: '500px', marginTop: '1em' }}>
				<h1 className='text-center'>Свяжитесь с нами</h1>
				<Form>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Email</Form.Label>
						<Form.Control type='email' placeholder='Введите email' />
						<Form.Text>
							мы никогда не передадим вашу электронную почту кому-либо еще
						</Form.Text>
					</Form.Group>
					<Form.Group controlId='formBasicPassword'>
						<Form.Label>Оставьте ваш отзыв</Form.Label>
						<Form.Control as='textarea' rows='3' />
					</Form.Group>
					<Form.Group controlId='formBasicChekbox'>
						<Form.Check type='checkbox' label='Я соглашаюсь с условиями' />
					</Form.Group>
					<Button variant='primary' type='submit'>
						Отправить
					</Button>
				</Form>
			</Container>
		</>
	)
}

export default Contacts
