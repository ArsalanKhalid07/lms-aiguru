






import Preloader from '@/components/common/Preloader'
import AuthImageMove from '@/components/others/AuthImageMove'
import ForgetForm from '@/components/others/ForgetForm'
import Terms from '@/components/terms/Terms'
import React from 'react'
export const metadata = {
  title: 'Login || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}
export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        {/* <HeaderAuth/> */}
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <section  className="form-page js-mouse-move-container">
                <AuthImageMove/>
                <ForgetForm/>
            </section>
           
            
            
        </div>

    </div>
  )
}
