// Core
import React, { Component } from 'react';

// Components
import Profile from './Profile';
import Images from './Images';
import Stories from "./Stories";

export default class Content extends Component {
    render () {
        return (
            <div className = 'content'>
                <Profile />
                <Stories />
                <Images />
            </div>
        );
    }
}
