import React from 'react'

class List extends React.Component {
    constructor(){
        super()

        this.state = {
            movies:[]
        }
    }


    render(){
        return(
            <div className ='App'>
                <h1 className ='movie-list-title'>The Most Amazing Movie List</h1>
                <List/>
            </div>
        )
    }
}   



