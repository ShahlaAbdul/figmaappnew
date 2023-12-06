import React, { useEffect, useState } from 'react'
import './style.css'
import FlagCard from '../FlagCard'

function FlagCards() {
    const [fetchData, setFetchData] = useState([])
   
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setFetchData(data))
    }, [])

  return (
    <div>
            <div className='cards'>
            {fetchData.map((x)=>
            <FlagCard flag={x.name.flag} name={x.name.common} population={x.population}  capital={x.capital} />
            )}
            </div>

    </div>
  )
}

export default FlagCards