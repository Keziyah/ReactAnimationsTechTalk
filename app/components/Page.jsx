import React from 'react'
import {Link} from 'react-router'

const Page = () => {
    return (
        <div className="anim">
            <div className="container">   
                <h1>Here's some content yay.</h1>
                <Link to="/results"><button>Results</button></Link>
            </div>
        </div>
    )
}

export default Page 