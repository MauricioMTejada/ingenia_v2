import React from 'react'
import CardComentshome from '../../Card/CardComentshome'
import { Stack } from '@mui/material'
import { useSelector } from 'react-redux'


export default function HomeCardComents() {
  
  const articuls = useSelector((state)=>state.articulos);
  const comentarios = articuls.data?.slice(2, 10);

  return (
    <>
    <Stack
    sx={{ marginRight: "50px" }}
     spacing={4}
    >
    {comentarios?.map((comentario, index) => (
          <CardComentshome key={index}
            name={comentario.User?.name}
            lastName={comentario.User?.lastname}
            articulo={comentario.subtitleTwo}
            articulo1={comentario.text}
          />
        ))}
    </Stack>
    </>
  )
}
