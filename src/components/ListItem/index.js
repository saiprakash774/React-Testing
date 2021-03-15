import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ListItem extends Component {
    render() {
        const {title,desc}=this.props;
        if(!title){
            return null;
        }
        return (
            <div data-test="ListItemComponent">
                <h2 data-test="componentTitle">{title}</h2>
                <div data-test="componentDescription">{desc}</div>
            </div>
        );
    }
}

ListItem.propTypes={
    title:PropTypes.string,
    desc:PropTypes.string
}
export default ListItem
