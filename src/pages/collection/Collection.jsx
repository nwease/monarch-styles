import React from 'react';
import { connect } from 'react-redux';
import Items from '../../components/items/Items';
import {selectCollection} from '../../redux/shop/shop-selectors';
import './styles/collection.scss';

const Collection = ({collection}) => {

    const {title, items} = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>
                {title}
            </h2>

            <div className='items'>
                {
                    items.map(item => (<Items key={item.id} item={item}/>))
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps) (Collection);
