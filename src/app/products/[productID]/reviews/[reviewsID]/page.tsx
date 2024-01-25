import { notFound } from "next/navigation";
import { Metadata } from "next";

interface ParamsProps {
    params: {
        productID: string;
        reviewsID: string;
    };
}

export const generateMetadata = async ({
    params,
}: ParamsProps): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone reviwes ${params.reviewsID}`);
        }, 100);
    });

    return {
        title: `Title ${title}`,
    };
};

export default function ProductIdReview({ params }: ParamsProps) {
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
