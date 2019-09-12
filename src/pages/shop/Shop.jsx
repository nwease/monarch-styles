import React from 'react';
import { Route } from 'react-router-dom';
import Collection from '../collection/Collection';
import CollectionPreview from '../../components/collection-preview/Collection-Preview';

const Shop = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionPreview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
);

export default Shop;