import React, {Component} from 'react';
import ShopData from './shop.data';
import Preview from '../../components/preview/Preview';

class Shop extends Component {
    constructor(props){
        super(props);

        this.state = {
            collections: ShopData
        }
    }

    render() {

        const {collections} = this.state;

        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <Preview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Shop;