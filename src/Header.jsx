import React from 'react'

export default function Header({ outerHandleSave }) {

    const handleClick = e => {
        e.preventDefault();
        outerHandleSave();
    }

    return <header>
        <h1>Title</h1>
        <button onClick={handleClick}>Save</button>
    </header>
}
