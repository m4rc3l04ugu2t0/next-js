export default function Docs({ params }: { params: { slug: string[] } }) {
    console.log(params.slug);
    if (params.slug?.length === 2) {
        return (
            <h1>
                resource <strong>{params.slug[0]}</strong> you want and the
                concept <strong>{params.slug[1]}</strong>
            </h1>
        );
    } else if (params.slug?.length === 1) {
        return (
            <h1>
                resource <strong>{params.slug[0]}</strong>
            </h1>
        );
    }

    return <h1>Docs Home Page</h1>;
}
