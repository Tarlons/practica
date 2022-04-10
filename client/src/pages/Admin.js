import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateProduct from '../componetnts/modals/CreateProduct';
import CreateType from '../componetnts/modals/CreateType';

function Admin() {
    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)

	return(
		<Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setProductVisible(true)}
            >
                Добавить товар
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
        </Container>
	) }

export default Admin