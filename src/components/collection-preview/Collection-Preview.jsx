import React from 'react';
import { withRouter } from 'react-router-dom';

import CheckoutItem from '../checkout-item/Checkout-Item';
// import './styles/collection-preview.scss';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './Collection-Preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </TitleContainer>

        <PreviewContainer>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);