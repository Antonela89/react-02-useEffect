import {Button, Card} from 'react-bootstrap';

const Presentacion = ({user}) => {
    if (!user) {
        return null; // Manejar el caso donde user es undefined o null
    }

    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={user.avatar} />
        <Card.Body>
            <Card.Title>{user.first_name} {user.last_name}</Card.Title>
            <Card.Text>
                E-mail: {user.email}
            </Card.Text>
            <Button variant="primary">Conoceme</Button>
        </Card.Body>
    </Card>
    ) 
}   

export default Presentacion
