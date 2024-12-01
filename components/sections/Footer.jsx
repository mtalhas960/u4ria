import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiMailLine, RiTiktokFill, RiTwitterXFill, RiYoutubeFill } from "@remixicon/react"
import Link from "next/link"
import SubscribeForm from "./SubscribeForm"

const Footer = () => {
  return (
    <footer className="pt-5 pb-4">
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-md-4 text-center text-md-start">
            <Link href='/'>
              <figure>
                <img src="/logo.png" alt="logo" />
              </figure>
              <h4 className="py-4">U4RIA</h4>
            </Link>
            <p>Designed For</p>
            <h6>Mind, Body & Soul</h6>
          </div>
          <div className="col-md-3 col-lg-4 text-center text-md-start">
            <h4>Company</h4>
            <ul className="d-flex flex-column gap-2 pt-3">
              <li>
                <Link href='/about'>About Us</Link>
              </li>
              <li>
                <Link href='/privacy-policy'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/terms-and-conditions'>Terms and Conditions</Link>
              </li>
              <li>
                <Link href='/faq'>FAQs</Link>
              </li>
              <li>
                <Link href='/blogs'>Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5 col-lg-4 text-center text-md-start">
            <h4>Subscribe to our Newsletter</h4>
            <SubscribeForm />
            <ul className="d-flex gap-2 justify-content-center justify-content-md-start">
              <li>
                <a href="mailto:info@u4riahub.com"><RiMailLine /></a>
              </li>
              <li>
                <a href="https://www.facebook.com/U4riaapp" target="_blank"><RiFacebookFill /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/u4ria.app" target="_blank"><RiInstagramLine /></a>
              </li>
              <li>
                <a href="https://www.youtube.com/@U4RIAApp" target="_blank"><RiYoutubeFill /></a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@u4ria.app" target="_blank"><RiTiktokFill /></a>
              </li>
              <li>
                <a href="https://twitter.com/u4riaapp" target="_blank"><RiTwitterXFill /></a>
              </li>
              <li>
                <a href="/" target="_blank"><RiLinkedinFill /></a>
              </li>
            </ul>
          </div>
        </div>
        <p className="pt-5 text-center">Copyright &copy; 2024 U4RIA | Designed for Mind, Body & Soul</p>
      </div>
    </footer>
  )
}

export default Footer
