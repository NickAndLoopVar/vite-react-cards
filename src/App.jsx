import './App.css'
import Card from "./components/Card"
import equipos from "./data/equipos"

function App() {
  const ListasEquipos = equipos.map((l,index)=>{
    return <Card key={index} proyecto={l.nproyecto} descripcion={l.ndescripcion} integrante={l.nintegrantes}></Card>
  })

  return (
    <div clasName="App">
      <h1>Proyectos en curso</h1>
      <div className='container'>
      {ListasEquipos}
      </div>
    </div>
  )
}
 
export default App
