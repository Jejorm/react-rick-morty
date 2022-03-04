import './Character.scss'

export const Character = ({ character}) => {

    return (
        <div className='Character'>
            <img className='image' src={character.image} />
            <div className='info'>
                <h4>
                    <span>Name: </span>
                    {character.name}
                </h4>
                <h4><span>Status: </span>{character.status}</h4>
                <h4><span>Specie: </span>{character.species}</h4>
                <h4><span>Origin: </span>{character.origin.name}</h4>
            </div>
        </div>
    )
}