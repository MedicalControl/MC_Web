import { useState } from 'react'
import './Expediente.css'

export default function Expediente() {
  const [isHidden, setIsHidden] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <div className="container container-expediente" style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px' }}>
      <div className={`card card-expediente ${isHidden ? 'hidden' : ''}`} style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <div className="card-header-expediente" >
          <div className="flex flex-container-expediente">
            <h2 className="title-expediente" >Expediente del Paciente</h2>
            <button 
              className="btn-outline btn-expediente" 
              onClick={() => setIsHidden(!isHidden)}
            >
              {isHidden ? 'Mostrar Expediente' : 'Ocultar Expediente'}
            </button>
          </div>
        </div>
        
        <div className={`card-content-expediente ${isHidden ? 'hidden' : ''}`}>
          <div className="tabs" style={{ width: '100%' }}>
            <div className="tabs-list" >
                {['Notas de enfermeria', 'Historia Clinica', 'Resultados de Laboratorio', 'Recetas Medicas'].map((tab, index) => (

                    <button
                        className={`tab-trigger small-tab ${activeTab === index ? 'active' : ''}`} 
                        onClick={() => handleTabClick(index)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="tabs-content-expediente">
              <table className="table-expediente">
                <thead>
                  <tr>
                    <th className='th-expediente' >Fecha</th>
                    <th className='th-expediente' >Hora</th>
                    <th className='th-expediente' >Observaciones y Cuidados de Enfermería</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className='td-expediente' ></td>
                      <td className='td-expediente' ></td>
                      <td className='td-expediente' ></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ marginTop: '20px' }}>
                <button 
                  className="btn-save-expediente" 
                >
                  Guardar Notas Enfermería
                </button>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}