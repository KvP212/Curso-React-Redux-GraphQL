import React, { useEffect, usestate } from 'react'
import Card from '../card/Card'
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo'

export default function GraphHome() {
  
  //Query
  let query = gql`
    {
      characters{
        results{
          name
          image
        }
      }
    }
  `
  
  let { data, loading, error } = useQuery(query)
  
  if ( loading ) return <h2>Cargando...</h2>

  return (
    <Card
      
      
      {...data.characters.results[0]}
    />
  )
}