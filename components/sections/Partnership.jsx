import { sanityFetch } from "@/sanity/lib/live";
import { CONTENT_QUERY } from '@/sanity/lib/queries';
import Link from "next/link";

export default async function Partnership() {
    const { data: partnershipData } = await sanityFetch({ query: CONTENT_QUERY, params: { sectionId: 'singleton-partnership' } });

    return (
        <section className='Partnership'>
            <div className="container">
                <div className="d-flex flex-column gap-2 text-center align-items-center">
                    <h1>{partnershipData.title}</h1>
                    <p>{partnershipData.description}</p>
                    <div className="mt-4">
                        <Link className="hover2" href='/become-a-partner'>{partnershipData.buttonText}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}