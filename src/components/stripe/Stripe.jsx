import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Stripe = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_5ofIzCRXDJDsAD1BHnvh7rC4';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Monarch Styles BV'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default Stripe;
