import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FormField({ text, value, onChange, type }){
     
    return (
        <Form.Group className="mb-3" >
            <Form.Label>{ text }</Form.Label>
            <Form.Control type={type} {...{ value, onChange, type }}  />
        </Form.Group>
    )
}