import { sanityFetch } from "@/sanity/lib/live";
import { CONTENT_QUERY } from '@/sanity/lib/queries';

export default async function Welcome() {
    const { data: welcomeData } = await sanityFetch({ query: CONTENT_QUERY, params: { sectionId: 'singleton-welcome' } });

    return (
        <section className='Welcome'>
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-6 position-relative z-3">
                        <div className="d-flex flex-column h-100 gap-md-4 gap-3 text-center text-md-start align-items-center align-items-md-start">
                            <h5 className="fw-normal">{welcomeData.subTitle}</h5>
                            <h3>{welcomeData.title}</h3>
                            <p>{welcomeData.description}</p>
                            <div className="mt-2">
                                <a className="hover3" href={welcomeData.buttonUrl} target="_blank">{welcomeData.buttonText}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <figure className="position-absolute z-3">
                            <img src="/welcome.png" alt="welcome" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}