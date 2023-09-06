import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import FormField from '../../components/formField'
import { Button, Form } from 'react-bootstrap'
import useBind from '../../hooks/useBind'


export default function MusicPage(){

    const [titulo, setTitulo, resetTitulo] = useBind('')
    const [autor, setAutor, resetAutor] = useBind('')
    const [gravadora, setGravadora, resetGravadora] = useBind('')
    const [ano, setAno, resetAno] = useBind('')

    const submit = async () => {
        const musica = {
            titulo ,
            autor ,
            gravadora,
            ano,
        }
        resetTitulo()
        resetAutor()
        resetGravadora()
        resetAno()
        const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, musica)
        console.log(res)
        
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