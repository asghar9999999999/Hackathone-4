// import { NextResponse } from 'next/server';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//     apiVersion: '2025-01-27.acacia',
// });

// export async function POST(req: Request) {
//     const { amount } = await req.json();

//     try {
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: amount,
//             currency: 'usd',
//             payment_method_types: ['card'],
//         });

//         return NextResponse.json({ clientSecret: paymentIntent.client_secret });
//     } catch (error: any) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-01-27.acacia', // Use the latest stable API version
   // Use the latest stable API version
});

export async function POST(req: Request) {
    const { amount } = await req.json();

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            payment_method_types: ['card'],
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: unknown) {
        // Type-check the error properly
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json(
            { error: 'An unexpected error occurred' },
            { status: 500 }
        );
    }
}
