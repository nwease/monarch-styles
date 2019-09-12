import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop-selectors';
import Preview from '../preview/Preview';
import { CollectionsContainer } from './Collections-Overview.styles';
// import './styles/collections.scss';

const CollectionsOverview = ({collections}) => {
    return (
        <CollectionsContainer>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <Preview key={id} {...otherCollectionProps} />
                ))
            }
        </CollectionsContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps) (CollectionsOverview);
