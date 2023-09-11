import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import FormField from '../../components/formField'
import CountryComponent from '../../components/country'
import './style.sass'
import { Button, Form } from 'react-bootstrap'
import useBind from '../../hooks/useBind'

const Countries = () => {

    const [country, setCountry, reset] = useBind('')
    const [result, setRes] = useState({})
    let countries = []

    const countriesGet = async () => {
        const res = await axios.get(`https://restcountries.com/v3.1/all`)
        countries = res.data
    }
    
    const findContry = async() => { 
        await countriesGet()
        setRes(await countries.filter((x) => x.name.common.toLowerCase() == country.toLowerCase())[0])
    } 

    const RenderCountry = () => {
        return Object.keys(result).length > 0 ? <CountryComponent elem = {result}/> : <div></div>
    }
    
    useEffect(() => {
        countriesGet();
    }, []);
    
    return (
        <div className='content'>
        <div>
            <Form>
                <FormField text="país" placeholder="digite um pais" {...setCountry}/>
            </Form>            
            <div className='searchContent'>
                <Button onClick={() => findContry()}> search </Button>
            </div>
        </div>
        <div className='listCard'>
            <RenderCountry className='card'/>
        </div>
        </div>
    )
}

export default Countries