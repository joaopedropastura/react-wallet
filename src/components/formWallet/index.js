import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PaymentContext } from '../../context/payment';
import useBind from '../../hooks/useBind';



const FormWallet = () => {

  const { addList, list } = useContext(PaymentContext)

  const [name, bindName, resetName] = useBind('', 'Enter name')
  const [date, bindDate, resetDate] = useBind('', 'date')
  const [value, bindValue, resetValue] = useBind(0, 'Enter value')

  const submit = () => {
    addList({
      name,
      date,
      value
    })
    resetName()
    resetDate()
    resetValue()
  }

    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Bill name</Form.Label>
          <Form.Control type="text" {...bindName} />
          <Form.Control.Feedback type="invalid">
            Please provide a bill name.
          </Form.Control.Feedback>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" {...bindDate} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNum">
          <Form.Label>Value</Form.Label>
          <Form.Control type="number" {...bindValue} />
        </Form.Group>
        
        <Button variant="primary" type="button" onClick={() => submit()}>
          Submit
        </Button>

      </Form>
    );
  }
  
  export default FormWallet;