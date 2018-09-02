// Core
import React, { Component } from 'react';

// Instruments
import links from "../theme/assets/links";

// Components
import Link from './Link'

export default class Footer extends Component {

    render () {
        const linkJSX = links.map((link) => {
            return (
                <Link key = { link.id } content = { link.message } />
            )
         });

        return (
        <div className = 'footer'>
            <ul>
                {linkJSX}
            </ul>
        </div>
        );
    }
}


