import { notFound } from "next/navigation";

export default function ProductsDetails({
    params,
}: {
    params: { productID: string };
}) {
    if (parseInt(params.productID) > 100) {
        return notFound();
    }
    return (
        <>
            <h1>{params.productID}</h1>
            <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                dolorem dolorum veniam repudiandae, sed cumque ab accusantium
                sit hic itaque recusandae corporis corrupti quas sunt quasi
                dignissimos labore modi? Qui.
            </p>
        </>
    );
}
