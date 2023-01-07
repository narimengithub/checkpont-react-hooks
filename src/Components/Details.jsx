import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({list}) => {
    const {id}=useParams()
    const movie=list.find(el=>el.id==id)
    console.log(movie)
  return (
    <div>
        {/* <img src={movie.image} alt={movie.name} style={{width:"30%"}} /> */}
        <div>
        <iframe src={movie.url} width="560" height="375"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default Details