import React from 'react';
import ListItem from '../ListItem/ListItem';
import { connect } from 'react-redux';
import { handleInput, addItem } from '../../ducks/reducer';

function List({ input, items = [], handleInput, addItem }) {
    return (
        <div>
            <ul>
                {items.map((text, i) => (
                    <ListItem
                        key={i}
                        id={i}
                        text={text}
                    />
                ))}
            </ul>
            <input onChange={handleInput} value={input} />
            <button onClick={addItem}>ADD ITEM</button>
        </div>
    );
}

const mapStateToProps = ({ items, input }) => ({ items, input });

export default connect(mapStateToProps, { handleInput, addItem })(List);
