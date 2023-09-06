import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import FormField from '../../components/formField'
import countryComponent from '../../components/country'

import { Button, Form } from 'react-bootstrap'
import useBind from '../../hooks/useBind'

const Countries = () => {
    const [country, setCountry, reset] = useBind('')
    let countries = []
    const countriesGet = async () => {
        const res = await axios.get(`https://restcountries.com/v3.1/all`)
        countries = res.data
        console.log(countries)
    }
    const findContry = async() => { 
        await countries.map((x) => x.name.common == country)
        
    } 
    
    useEffect(() => {
        countriesGet();
    }, []);
    


    return (
        <>
        <Form>
            <FormField text="país" placeholder="digite um pais" {...setCountry}/>
        </Form>            
            <Button onClick={() => findContry()}> search </Button>
        </>
    )
}

export default Countries