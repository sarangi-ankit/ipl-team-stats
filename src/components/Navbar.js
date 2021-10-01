import React from 'react'

const Navbar = ({handleInput,sortCountry,sortName,sortStats}) => {
    return (
        <div className="nav-component">
            <div className="sub-component">
                <div className="logo-sec">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png" alt="mi.png" />
                </div>
                <div className="input">
                    <input type="text" onChange={handleInput} placeholder="Search Player..." />
                </div>
                
            </div>
            <div className="btns">
                <button className="btn" onClick={sortCountry}>Country</button>
                <button className="btn" onClick={sortName}>Name</button>
                <button className="btn" onClick={sortStats}>Stats</button>
            </div>
        </div>
    )
}

export default Navbar
