import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(["Dragon Ball", "One Punch Man", "Samurai X"])

    const handleAdd = (categorie) => {
        setCategories( [categorie, ...categories])
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { handleAdd }/>
            <hr/>


            <ol>
            {
                categories.map(category => (
                    <GifGrid key={category} category= { category }/>
                ))
            }
            </ol>
            
        </>
    )
}
