const Informacion = () => {
    const array = {
      Nombre: "Tony",
      Apellido: "Ospino",
      Edad: 27,
      Correo: "perezpapillon@gmail.com"
    }
    return (
      <div className='App'>
        <ul>
          <li>Nombre: {array.Nombre}</li>
          <li>Apellido: {array.Apellido}</li>
          <li>Edad: {array.Edad}</li>
          <li>Correo: {array.Correo}</li>
        </ul>
      </div>
    )
  }

export default Informacion