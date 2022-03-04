import { useEffect, useState } from 'react'
import { Character } from './Character'

import './Characters.scss'

export const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {

        const loadData = async () => {

            const response = await fetch('https://rickandmortyapi.com/api/character/')

            const data = await response.json()

            setCharacters(data.results)

        }

        loadData()

    }, [])
    

    return (

        <div className='Characters'>
            {
                characters.map(character => (
                    <Character key={character.id} character={character} />
                ))
            }
        </div>
    )
}