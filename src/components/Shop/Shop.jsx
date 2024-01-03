import Product from "../Product/Product";

export default function Shop() {
    const product = { id: 1, title: "Alex", rating: {rate: 6.9}, price: '$450', image: 'https://images.unsplash.com/photo-1597429926308-ffc8cd6f55fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDI1NjQ3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100' };
    return (
        <>
            <h1>Welcome to Shop!</h1>
            <Product product={product} />
        </>
    );
}