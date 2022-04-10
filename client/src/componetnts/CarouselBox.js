import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slider from '../img/slider.jpg'
import sslider from '../img/i.jpg'

function CarouselBox() {
	return (
		<Carousel variant='dark'>
			<Carousel.Item>
				<a href='/cotalog'>
					<img className='d-block w-100' src={slider} alt='slider' />
				</a>
				<Carousel.Caption>
					<h3 style={{ color: '#eb3c95' }}>Цветочный домик</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href='/cotalog'>
					<img className='d-block w-100' src={sslider} alt='sslider' />
				</a>
				<Carousel.Caption>
					<h3 style={{ color: '#eb3c95' }}>Цветочный домик</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<a href='/cotalog'>
					<img className='d-block w-100' src={slider} alt='slider' />
				</a>
				<Carousel.Caption>
					<h3 style={{ color: '#eb3c95' }}>Цветочный домик</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}

export default CarouselBox
