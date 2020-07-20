import React, { useState, useEffect } from 'react'
import Card from '../card/Card'
import styles from './home.module.css'
// import axios from 'axios'
import { connect } from 'react-redux'
import { removeCharacterAction, addToFavoritesAction } from '../../redux/charsDuck'

// Deleted
// let URL = "https://rickandmortyapi.com/api"

function Home({ chars, removeCharacterAction, addToFavoritesAction }) {

    // Deleted
    // let [chars, setChars] = useState([])

    // Deleted
    // useEffect(() => {
    //     getCharacters()
    // }, [])

    // Deleted
    // function nextChar() {
    //     chars.shift()
    //     if (!chars.length) {
    //         //get more characters
    //     }
    //     setChars([...chars])
    // }

    // changed
    // function renderCharacter() {
    //     let char = chars[0]
    //     return (
    //         <Card leftClick={nextChar} {...char} />
    //     )
    // }

    // Deleted
    // function getCharacters() {
    //     return axios.get(`${URL}/character`)
    //         .then(res => {
    //             setChars(res.data.results)
    //         })
    // }

    function renderCharacter() {
        let char = chars[0]
        return (
            <Card
                rightClick={addFav}
                leftClick={nextCharacter}
                {...char}
            />
        )
    }

    function nextCharacter() {
        removeCharacterAction()
    }

    function addFav() {
        addToFavoritesAction()
    }

    return (
        <div className={styles.container}>
            <h2>Personajes de Rick y Morty</h2>
            <div>
                {renderCharacter()}
            </div>
        </div>
    )
}

function mapStateToProps( state ) {
    return {
        chars: state.characters.array
    }
}



export default connect(mapStateToProps, { removeCharacterAction, addToFavoritesAction })(Home)