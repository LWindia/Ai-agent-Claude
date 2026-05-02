import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import GlobalScrollGlow from './components/ui/GlobalScrollGlow'
import HeroSection from './components/sections/HeroSection'
import WhatYouBuildSection from './components/sections/WhatYouBuildSection'
import CurriculumSection from './components/sections/CurriculumSection'
import WhoIsItForSection from './components/sections/WhoIsItForSection'
import WhyCourseSection from './components/sections/WhyCourseSection'
import MentorSection from './components/sections/MentorSection'
import OutcomesSection from './components/sections/OutcomesSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import PricingSection from './components/sections/PricingSection'
import FinalCTASection from './components/sections/FinalCTASection'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary">
      <GlobalScrollGlow />
      <ScrollProgressBar />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <WhatYouBuildSection />
        <CurriculumSection />
        <WhoIsItForSection />
        <WhyCourseSection />
        <MentorSection />
        <OutcomesSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
