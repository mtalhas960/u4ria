import Image from "next/image"
import imgSrc from "@/public/CTA.jpg"

const CTA = () => {
  return (
    <section className="CTA">
        <figure>
            <Image className="w-100" src={imgSrc} alt="CTA" />
        </figure>
    </section>
  )
}

export default CTA
