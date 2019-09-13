import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Collection from '../collection/Collection';
import CollectionPreview from '../../components/collection-preview/Collection-Preview';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {updateCollections} from "../../redux/shop/shop.actions";

class Shop extends Component{

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot =collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            console.log(collectionsMap)
        })
    }

    render() {

        const { match } = this.props;

        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionPreview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections)
});

export default connect(mapDispatchToProps) (Shop);