import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import main1 from '../img/main1.png'
import main2 from '../img/main2.png'
import main3 from '../img/main3.png'
import main4 from '../img/main4.png'
import main5 from '../img/main5.png'
import main6 from '../img/main6.png'
import main7 from '../img/main7.png'
import main8 from '../img/main8.png'
import main9 from '../img/main9.png'
import main10 from '../img/main10.png'
import main11 from '../img/main11.png'
import main12 from '../img/main12.png'
import main13 from '../img/main13.png'
import main14 from '../img/main14.png'
import main15 from '../img/main15.png'
import CarouselBox from '../componetnts/CarouselBox'

function Main() {
	return (
		<>
			<CarouselBox />
			<Container>
				<ul className='clearfix mt-4'>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main1} alt='main1' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main2} alt='main2' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main3} alt='main3' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main4} alt='main4' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main5} alt='main5' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main6} alt='main6' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main7} alt='main7' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main8} alt='main8' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main9} alt='main9' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main10} alt='main10' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main11} alt='main11' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main12} alt='main12' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main13} alt='main13' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main14} alt='main14' />
								</Link>
							</div>
						</a>
					</li>
					<li className='category-wrapper'>
						<a href='' className='category'>
							<div class='category-photo'>
								<Link to={'/cotalog'}>
									<img src={main15} alt='main15' />
								</Link>
							</div>
						</a>
					</li>
				</ul>
			</Container>
		</>
	)
}
export default Main
