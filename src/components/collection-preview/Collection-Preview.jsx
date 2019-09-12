import React from 'react';
// import './styles/collection-preview.scss';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './Collection-Preview.styles';
import CheckoutItem from '../checkout-item/Checkout-Item';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;