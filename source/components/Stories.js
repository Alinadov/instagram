// Core
import React, { Component } from 'react';

// Instruments
import stories from '../theme/assets/stories';

// Components
import Story from './Story';

export default class Stories extends Component {
    render () {
        const storyJSX = stories.map((story) => {
            return (
                <Story key = { story.id } src = { story.src } message = { story.message }/>
            );
        });

        return <div className = 'stories'> { storyJSX } </div>;
    }
}
