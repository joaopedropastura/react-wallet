import { useContext } from "react"
import Item from '../listItem'
import { PaymentContext } from "../../context/payment"
import './style.sass'

export default function ListBill() {

    const {list } = useContext(PaymentContext)


    
    return (
        <>
            <h2>Extrato de compras</h2>
            <div id='header'>
                <h4>Nome</h4>
                <h4>Data</h4>
                <h4>Valor</h4>
            </div>
            <hr/>
            <div className="list">
                {list.map(e => <Item item = {e}/>)}
            </div>
        </>
    )
}