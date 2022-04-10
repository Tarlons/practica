import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {MAIN_ROUTE, LOGIN_ROUTE} from "../utils/const";
import {Container, Form, Button, Card} from "react-bootstrap";
import {registration} from "../http/userAPI";
import { observer } from 'mobx-react-lite';
import {Context} from "../index";

const Registration = observer (() => {
	const {user} = useContext(Context)
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
		
	const register = async () => {
        try {	
            let data;
              data = await registration(email, password);
            	user.setUser(user)
            	user.setIsAuth(true)
           navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
	

	return(
		 <Container className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}>
							<Card style={{width: 600}} className="p-5">	
							<h2 className="m-auto">Регистрация</h2>
			 <Form className='p-3'>
				 <Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email</Form.Label>
							<Form.Control type='email' placeholder='Введите email' vlaue={email}
								onChange={e => setEmail(e.target.value)}/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label className='mt-3'>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Введите password'
								vlaue={password}
								onChange={e => setPassword(e.target.value)}
							/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicCheckbox'>
					</Form.Group>
					<Button
						className='mb-3'
						variant='outline-danger'
						onClick={register}
						>
						Зарегистрироваться
					</Button>
					<div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink></div>
			</Form>
			</Card>
		</Container>
	)})

export default Registration