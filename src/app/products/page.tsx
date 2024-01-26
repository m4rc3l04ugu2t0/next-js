import Link from "next/link";

export default function Products() {
    return (
        <>
            <h1>Lists Products</h1>
            <h2>
                <Link href="/products/1" replace>
                    Product 1
                </Link>
            </h2>
            <h2>
                <Link href="/products/2">Product 2</Link>
            </h2>
            <h2>
                <Link href="/products/3">Product 3</Link>
            </h2>
        </>
    );
}
