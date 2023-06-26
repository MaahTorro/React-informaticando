// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { useState, useEffect } from 'react'

function Produtos({preco, image}) {

  const [products, setProducts] = useState([])

  useEffect(() => {
  async function fetchData(){
  //  const res = await fetch(url);
  const data = await res.json();
  setProducts(data);
  }
  fetchData();
  }, []);

  return (
    <div className="produto">
        <div className='prods'>
        <Card
        style={{ width: '18rem' }}>
        <Card.Img variant="top" className='imgcard' src={image} />
        <Card.Body>
            <Card.Text>
            R$: {preco}
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
    </div>
  );
}

export default Produtos;