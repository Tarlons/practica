import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import ProductItem from "./ProductItem";
import ListGroup from "react-bootstrap/ListGroup";

const ProductList = observer(() => {
    const {product} = useContext(Context)

    return (
       <Row className="d-flex">
            {product.types.map(product =>
                <ProductItem key={product.id} device={product}/>
            )}
        </Row>
    );
});

export default ProductList;