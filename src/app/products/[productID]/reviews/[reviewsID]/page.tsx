export default function ProductIdReview({
    params,
}: {
    params: { productID: string; reviewsID: string };
}) {
    return (
        <h1>
            Product id: <strong>{params.productID}</strong>
            <br />
            ProductReviews: <strong>{params.reviewsID}</strong>
        </h1>
    );
}
