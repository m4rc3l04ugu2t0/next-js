import { notFound } from "next/navigation";

export default function ProductIdReview({
    params,
}: {
    params: { productID: string; reviewsID: string };
}) {
    if (parseInt(params.reviewsID) > 100) {
        notFound();
    }
    return (
        <h1>
            Product id: <strong>{params.productID}</strong>
            <br />
            ProductReviews: <strong>{params.reviewsID}</strong>
        </h1>
    );
}
