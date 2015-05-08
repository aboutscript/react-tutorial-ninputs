import React from 'react';
import {PropTypes, addons} from 'react';

export default class TodoItem {
    static propTypes = {};

    render(){
        return (
            <div>
                <input
                    value={this.props.value.text}
                    onChange={this.handleChange.bind(this)} />
            </div>
        );
    }

    handleChange(event){
        const value = addons.update(this.props.value, {
            text: {$set: event.target.value}
        });
        this.props.onChange(value);
    }
}
