import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import PhoneCard from '../../components/phoneCard';
export default function ReqPage() {

    const [id, setid] = useState(1)
    const [name, setName] = useState('')
    const [prod, setProd] = useState({})

    useEffect(() => {
        handleGet();
    }, [id]);

    async function handleGet() {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log(res);
        setProd(res)
    }

     
    return (
        <>
            <Button onClick={() => setid(id + 1)}>+1 produto</Button>
            {prod.data &&
                <PhoneCard product={prod} />
            }
        </>
    )
}