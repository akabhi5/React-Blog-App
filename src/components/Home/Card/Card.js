import React from 'react';
import { Link } from 'react-router-dom';


const Card = (props) => {
    const { post } = props;
    return(
        <div className="card mt-3">
            <div className="card-body">
                <Link to={`/${post._id}`}>
                    <h5 className="card-title">{ post.title }</h5>
                </Link>
                <p className="card-text">
                { post.content }
                </p>
                <Link to={`/${post._id}`} className="btn btn-primary btn-sm float-right">
                    Read more
                </Link>
            </div>
        </div>
    )
}


export default Card;