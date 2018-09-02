// Core
import React, { Component } from 'react';

export default (props) => {
    return  (
        <div className = 'story'>
            <div>
                <img src = { props.src }/>
            </div>

            <span>
                { props.message }
            </span>
        </div>
    )
};