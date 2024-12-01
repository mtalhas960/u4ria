import { sanityFetch } from "@/sanity/lib/live";
import { CONTENT_QUERY } from '@/sanity/lib/queries';
import { RiArrowRightCircleFill, RiMoonLine } from "@remixicon/react";

export default async function Hero() {
  const { data: heroData } = await sanityFetch({ query: CONTENT_QUERY, params: { sectionId: 'singleton-hero' } });

  return (
    <section className='Hero'>
      <div className="container position-relative z-3">
        <div className="row row-gap-5">
          <div className="col-lg-6">
            <div className="d-flex flex-column h-100 gap-4 text-center text-md-start align-items-center align-items-md-start">
              <h3 className="fw-bolder">{heroData.title}</h3>
              <h5 className="fw-normal" dangerouslySetInnerHTML={{ __html: heroData.subtitle }} />
              <p>{heroData.description}</p>
              <div className="my-3">
                <a className="hover1 d-flex align-items-center gap-1" href={heroData.buttonUrl} target="_blank">{heroData.buttonText} <RiArrowRightCircleFill size={20} /></a>
              </div>
              <div className="hero_card position-relative d-flex flex-column gap-3">
                <h4>{heroData.cardTitle}</h4>
                <p className="p2">{heroData.cardDescription}</p>
                <div className="position-absolute">
                  <RiMoonLine />
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row gap-4">
                <a href={heroData.buttonUrl}>
                  <figure>
                    <img className="w-100" src="/apple.webp" alt="appleButton" />
                  </figure>
                </a>
                <figure>
                  <img className="w-100" src="/play.jpeg" alt="playButton" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <figure className='d-flex h-100 justify-content-lg-end justify-content-center align-items-center'>
              <img className="app_demo" src="/hero_phone.png" alt="appDemo" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}