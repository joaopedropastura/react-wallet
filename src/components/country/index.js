import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.sass'

const country = ({elem}) => {
    return(
        <Card>
            <Card.Img className='img' variant="top" src={elem.flags.png}/>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="listDesc">
                    <span>País:</span>
                    {elem.name.common}
                </ListGroup.Item>

                <ListGroup.Item className="listDesc">
                    <span>Capital:</span>
                    {elem.capital[0]}
                </ListGroup.Item>

                <ListGroup.Item className="listDesc">
                    <span>Região:</span> 
                    {elem.region}
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}


export default country