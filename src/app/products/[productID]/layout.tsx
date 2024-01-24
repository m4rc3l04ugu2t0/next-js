export default function LayoutProducts({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {" "}
            <p>Products Details</p>
            {children}{" "}
        </>
    );
}
