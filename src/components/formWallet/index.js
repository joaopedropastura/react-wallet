import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PaymentContext } from '../../context/payment';



const FormWallet = () => {

  const { addList } = useContext(PaymentContext)

  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [value, setValue] = useState('')

    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>bill name</Form.Label>
          <Form.Control value={name} type="text" placeholder="Enter email" onChange={(e => setName(e.target.value))} />
          <Form.Control.Feedback type="invalid">
            Please provide a bill name.
          </Form.Control.Feedback>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>date</Form.Label>
          <Form.Control type="date" placeholder="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNum">
          <Form.Label>value</Form.Label>
          <Form.Control type="text" label="Check me out" />
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={() => addList({
          name,
          date,
          value
        })}>
          Submit
        </Button>
      </Form>
    );
  }
  
  export default FormWallet;