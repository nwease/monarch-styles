import React from 'react';
import { Route } from 'react-router-dom';
import Collection from '../collection/Collection';
import Collections from '../../components/collections/Collections';

const Shop = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={Collections} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
);

export default Shop;