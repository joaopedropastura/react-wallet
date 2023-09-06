const country = (elem) => {
    return(
        <>
            <div>
                <div>
                    <span>{elem.name.common}</span>
                    <span>{elem.capital[0]}</span>
                    <span>{elem.region}</span>
                </div>
                <img src={elem.flags.png}></img>
            </div>
        </>
    )
}