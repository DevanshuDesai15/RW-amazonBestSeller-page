import React from 'react'
import reactDom from 'react-dom'


const BestSeller = (props) => {

    const {img,title,author,id}=props

    return (
        <div>
                <article className='book'>
                    <h3 style={{'textAlign':'left'}}>{id}</h3>
                    <img src={img} alt=''/>
                    <h1><a>{title}</a></h1>
                    <h4><a>{author}</a></h4>
                </article>
        </div>
    )
}

export default BestSeller
