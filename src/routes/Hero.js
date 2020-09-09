import React from 'react';

const Hero = props => {
    const { name, image } = props;

    return (
        <>
        <div className="hero">
            <img src={`http://cdn.dota2.com/${image}`} width='100' alt={name} />
        </div>
        </>
    )
}

export default Hero;
