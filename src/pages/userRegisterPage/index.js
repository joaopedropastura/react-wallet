import { Form, Button } from "react-bootstrap"
import FormField from "../../components/formField"
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import useBind from "../../hooks/useBind";
import User from '../../models/newUser'

const RegisterPage = () => {
    
    const [email, setEmail, resetEmail] = useBind('')
    const [name, setName, resetName] = useBind('')
    const [password, setPassword, resetPassword] = useBind('')
    const userRegister = () => {
        
        
        const newUser = new User({
            email,
            name,
            password
        })
    }

    return (
        <>
            <Form>
                <FormField text="email" placeholder="digite seu email" {...setEmail}/>
                <FormField text="nome" placeholder="digite seu nome" {...setName} />
                <FormField text="senha" placeholder="digite sua senha" {...setPassword} />                
            </Form>

            <div className="loginBtn">
                <Button onClick={() => userRegister()}>Create account</Button>
            </div>
        </>
    )
}

export default RegisterPage