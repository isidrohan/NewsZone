import React, { Component } from 'react'

const Newsitem = (props)=> {
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
        <div className="card">
        <img src={!imageUrl?"https://images.news18.com/ibnlive/uploads/2023/02/moon-2-167626041916x9.png":imageUrl} className="card-img-top" alt="..."/>
        {/* <img src={imageUrl} className="card-img-top" alt="..."/> */}
        <div className="card-body">
          <h5 className="card-title">{title} 
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zindex: '1'}}>{source}
  </span></h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">by {author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target='blank' className="btn btn-dark">Read more</a>
        </div>
      </div>
    )

}
export default Newsitem;