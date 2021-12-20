const Cards = ({Title,Item1, Item2, Item3, background}) => {
  const obj ={background: background}
    return (
      <div className='Cards' style ={obj}>
        <h3>{Title}</h3>
        <ul>
         <li>{Item1}</li>
         <li>{Item2}</li>
         <li>{Item3}</li>
        </ul>
      </div>
    )
  
  }

export default Cards