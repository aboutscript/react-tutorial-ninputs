import React from 'react';
import {PropTypes, addons} from 'react';
import TodoItem from './TodoItem';

export default class TodoList {
    static propTypes = {
        value: PropTypes.array.isRequired,
        onChange: PropTypes.func
    };

    render(){
        return (
            <div>
                {this.props.value.map((item, index) =>{
                    return (
                        <div>
                            <TodoItem
                                value={item}
                                onChange={this.handleItemChange.bind(this, index)}
                                key={item.id}/>
                            <a href="#" onClick={this.handleRemove.bind(this, index)}>x</a>
                            <hr />
                        </div>
                    );
                })}
                <button onClick={this.handleItemAdd.bind(this)}>Add</button>
            </div>
        );
    }

    handleRemove(index){
        const value = addons.update(this.props.value, {
            $splice: [
                [index, 1]
            ]
        });
        this.props.onChange(value);
    }

    handleItemAdd(){
        const value = addons.update(this.props.value, {
            $push: [
                {
                    text: '',
                    id: Math.random() + ''
                }
            ]
        });
        this.props.onChange(value);
    }

    handleItemChange(index, item){
        const value = addons.update(this.props.value, {
            [index]: {
                $set: item
            }
        });
        this.props.onChange(value);
    }
}
