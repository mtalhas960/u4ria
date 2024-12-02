import { sanityFetch } from "@/sanity/lib/live";
import { CONTENT_QUERY } from '@/sanity/lib/queries';
import Image from "next/image";
import imgSrc from "@/public/features_phone.png";

export default async function Features() {
    const { data: featuresData } = await sanityFetch({ query: CONTENT_QUERY, params: { sectionId: 'singleton-feature' } });

    return (
        <section className='Features'>
            <div className="container-lg">
                <div className="d-flex flex-column gap-3 text-center align-items-center">
                    <h1>{featuresData.title}</h1>
                    <p className="px-3 px-md-0">{featuresData.description}</p>
                </div>
                <div className="row pt-md-5 pt-4 row-gap-4">
                    <div className="col-md-4 pe-md-0 py-md-3">
                        <div className="d-flex flex-column gap-4 text-center text-md-end h-100 justify-content-center">
                            {featuresData.features.slice(0, 6).map((feature, index) => (
                                <div className="d-flex flex-column gap-2" key={index}>
                                    <h5>{feature.name}</h5>
                                    <p className="p2">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <figure className="position-sticky d-flex justify-content-center">
                            <Image className="w-100" src={imgSrc} width={300} height={595} alt="appDemo" />
                        </figure>
                    </div>
                    <div className="col-md-4 ps-md-0 py-md-3">
                        <div className="d-flex flex-column gap-4 text-center text-md-start h-100 justify-content-center">
                            {featuresData.features.slice(6, 12).map((feature, index) => (
                                <div className="d-flex flex-column gap-2" key={index}>
                                    <h5>{feature.name}</h5>
                                    <p className="p2">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}