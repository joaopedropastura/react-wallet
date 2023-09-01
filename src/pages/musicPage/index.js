import axios from 'axios'
import { useEffect, useState } from 'react'
import FormField from '../../components/formField'
import { Button, Form } from 'react-bootstrap'
import useBind from '../../hooks/useBind'


export default function MusicPage(){

    const [titulo, setTitulo] = useBind('')
    const [autor, setAutor] = useBind('')
    const [gravadora, setGravadora] = useBind('')
    const [ano, setAno] = useBind('')

    useEffect(() => {
        
    }, [])

    const submit = () => {
        
    }

    return (
        <Form>
            <FormField text="titulo" {...setTitulo}/>
            <FormField text="nome autor" {...setAutor}/>
            <FormField text="gravadora" {...setGravadora}/>
            <FormField text="ano lançamento" {...setAno}/>
            <Button onClick={() => submit()}>submit</Button>
        </Form>
    )
}