import React, { useEffect, useState} from 'react'
import axios from 'axios'

const DpoLgpd = () => {

    const [dpoLgpd, setDpoLgpd] = useState([])

        useEffect(() => {
            axios.get("http://localhost:3000/dpoLgpd") //request
            .then(response => setDpoLgpd(response.data)) //response
            .catch(error => console.error("Erro ao carregar o dpoLgpd:", error))
    }, [])

  return (
    <div>

        <h1>DpoLgpd</h1>
        <ul>
            {
                dpoLgpd.map((dpoLgpd) => (
                    <li key={dpoLgpd.id}>
                        <h2>{dpoLgpd.titulo}</h2>
                        
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default DpoLgpd