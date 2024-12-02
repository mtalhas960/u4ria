import Image from "next/image";
import logo from "@/public/logo.png";
import bgImg from "@/public/bg_leaves.jpg";

export default function Slogan() {

    return (
        <section className='Slogan'>
            <Image
                src={bgImg}
                alt=""
                layout="fill"
                objectFit="cover"
                priority
                className="z-0 pe-none"
            />
            <div className="container">
                <div className="d-flex flex-column gap-2 text-center position-relative z-3">
                    <figure className="pb-5">
                        <Image src={logo} alt="logo" />
                    </figure>
                    <h5>Designed For</h5>
                    <h2>Mind, Body & Soul</h2>
                </div>
            </div>
        </section>
    )
}