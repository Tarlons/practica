import Avatar from '../img/Avatar.png'
import { Card } from 'react-bootstrap'

function Cabinet() {
	return (
		<div className='d-flex flex-row m-5 ml-5 align-items-center justify-content-center'>
			<Card className='p-3'>
				<img
					src={Avatar}
					height='100'
					width='100'
					classname='d-inline-block align-top'
					alt='Avatar'
				/>
			</Card>
			<h4 className='d-flex flex-row m-5'>Почта:user@mail.ru</h4>
		</div>
	)
}
export default Cabinet
