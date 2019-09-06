import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop-selectors';
import Preview from '../preview/Preview';
import './styles/collections.scss';

const Collections = ({collections}) => {
    return (
        <div className='collections'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <Preview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps) (Collections);
