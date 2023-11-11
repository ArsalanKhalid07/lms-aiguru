










import NotFound from '@/components/not-found/NotFound'
import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import  Link  from 'next/link'
import  Image  from 'next/image'
import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import React from 'react'
export const metadata = {
  title: 'Page not found || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}
export default function page() {
  return (
    <div className="main-content  ">

      <Preloader/>

        {/* <Header/> */}
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            {/* <PageLinks/> */}
            <div className="header__logo pr-30 xl:pr-20 md:pr-0 logoNoPage">
                <Link href="/">
                  <Image
                    width={140}
                    height={50}
                    src="/assets/img/general/logo-black.png"
                    alt="logo"
                  />
                </Link>
              </div>
            <NotFound/>
            {/* <FooterOne/> */}
        </div>

    </div>
  )
}
