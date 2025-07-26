const Filter=({filter})=>{
    const filterValue=(event)=>{
        filter(event.target.value)
    }
    return(
        <>
            <p>Find contacts by name</p>
            <input type="text" onChange={filterValue}/>
        </>
    )
}
export default Filter