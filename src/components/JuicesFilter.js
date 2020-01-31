import React from 'react'
import { useContext } from 'react'
import { JuiceContext } from '../control/context'
import Title from './Title'
import './JuicesFilter.css'

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}


const getIngredients = (items) => {
    const mySet = new Set();
    (items.map(item => {
        item.ingredients.map(i => mySet.add(i))
        return mySet;
    }
    ))
    return mySet;
}



export default function JuicesFilter({ juices }) {
    const context = useContext(JuiceContext);
    const { handleChange, type, ingredients } = context;
    // get unique types
    let types = getUnique(juices, 'type');
    //add all
    types = ['Todos', ...types];
    // map 
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    // get unique ingredients
    let extrasValores = getIngredients(juices);
    //add all
    extrasValores = ['Todos', ...extrasValores];
    // map 
    extrasValores = extrasValores.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="Encuentra tu favorito"></Title>
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">Por su origen</label>
                    <select id="type"
                        name="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                        {types}
                    </select>
                    {/*select type*/}
                    <label htmlFor="ingredients">Ingrediente</label>
                    <select id="ingredients"
                        name="ingredients"
                        className="form-control"
                        value={ingredients}
                        onChange={handleChange}>
                        {extrasValores}
                    </select>
                </div>
            </form>
        </section>

    )
}
