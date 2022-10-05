import React from 'react';
import Image from 'react-bootstrap/Image'
// import Propa from '../../views/assets/servTecProp.jfif'
import { Card } from 'react-bootstrap';
import './ads.css';



function Ads({src}) {

    const styles = {
        width: '15rem',
        border: "3px solid #0a58ca",
        padding: "1.5em"
    }
    
    return <Card className="my-3 mb-3 px-3" border="primary" style={styles}>
        <Card.Title className='parpadea text' bg="info">Publique aqui!</Card.Title>
        <Image src={src} width="200px"  className="img" />
        </Card>
    }

export default Ads;
