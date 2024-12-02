import { sanityFetch } from "@/sanity/lib/live";
import { CONTENT_QUERY } from '@/sanity/lib/queries';
import Image from "next/image";
import leaves from "@/public/leaves.png";

export default async function JoinUs() {
    const { data: joinData } = await sanityFetch({ query: CONTENT_QUERY, params: { sectionId: 'singleton-join' } });

    return (
        <section className='Join_Us'>
            <div className="container">
                <div className="d-flex flex-column gap-4 text-center align-items-center">
                    <h3>{joinData.title}</h3>
                    <p className="px-3 px-md-0">{joinData.description}</p>
                    <div className="mt-2">
                        <a className="hover2" href={joinData.buttonUrl} target="_blank">{joinData.buttonText}</a>
                    </div>
                </div>
                <Image className="d-none d-md-block" src={leaves} alt="leaves" />
            </div>
        </section>
    )
}