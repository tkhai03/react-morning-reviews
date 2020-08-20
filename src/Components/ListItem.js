import React from 'react'


function ListItem(props) {
    const { movie } = props
    return <div className='ListItem'>
        <img src={props.movie.posterImg} className='movie-poster' alt={movie.title} />
        <div className='movie-info'>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
        </div>
    </div>
}

export default ListItem