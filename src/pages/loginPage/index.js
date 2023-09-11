import { Form, Button } from "react-bootstrap"
import FormField from "../../components/formField"
import './style.sass'


const login = () => {


    return (
        <>
            <Form>
                <FormField text="email" placeholder="digite seu email"/>
                <FormField text="senha" placeholder="digite sua senha"/>                
            </Form>
            <div className="loginBtn">
                <Button>Login</Button>
            </div>
        </>
    )
}

export default login