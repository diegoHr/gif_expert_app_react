import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {images, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3> { category } </h3>

            <div className="card-grid">
                {loading && 
                    <p className = "animate__animated animate__flash">
                            Cargando...
                    </p>}
                {
                    images.map(image => (
                        <GifGridItem 
                            key={image.id} 
                            {...image}
                        />
                    ))
                }
                
            </div> 
        </>
    )
}
