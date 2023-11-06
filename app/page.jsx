import HeaderSix from "../components/layout/headers/HeaderSix";
import HeroSix from "@/components/homes/heros/HeroSix";
import CategoriesTwo from "@/components/homes/categories/CategoriesTwo";
import FooterOne from "../components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import CoursesThree from "../components/homes/courses/CoursesThree";
import LearningSolutions from "../components/homes/LearningPath/LearningSolutions";
import Pricing from "@/components/homes/pricing/Pricing";
import BlogsFive from "@/components/homes/blogs/BlogsFive";




export const metadata = {
  title: 'Educrat',
  description:
    'lms system',
  
}

export default function HomePage() {
  return (
    <>
      <Preloader />
      <HeaderSix />
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HeroSix />
        <CategoriesTwo />
        <CoursesThree />
        <LearningSolutions />
        <Pricing />
        <BlogsFive />

        <FooterOne />
      </div>
    </>
  );
}
