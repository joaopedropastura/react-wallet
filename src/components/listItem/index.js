import './style.sass'

const Item = ({ item }) => {
    
    return (
        <>
        
            <div className="item">
                <span>{item.name}</span>
                <span>{item.date}</span>
                <span>{item.value}</span>
            </div>
                
        </>
    )
}

export default Item