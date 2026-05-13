import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import GlobalScrollGlow from './components/ui/GlobalScrollGlow'
import SectionReveal from './components/ui/SectionReveal'
import HeroSection from './components/sections/HeroSection'
import TechStackSection from './components/sections/TechStackSection'
import WhatYouBuildSection from './components/sections/WhatYouBuildSection'
import CurriculumSection from './components/sections/CurriculumSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
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
      <main id="main-content" className="relative z-10">

        {/* Hero — has its own scroll system */}
        <HeroSection />

        {/* Tech stack strip — subtle drift */}
        <SectionReveal parallaxStrength={0.04}>
          <TechStackSection />
        </SectionReveal>

        {/* What You Build — medium drift */}
        <SectionReveal parallaxStrength={0.06}>
          <WhatYouBuildSection />
        </SectionReveal>

        {/* Curriculum — gentle drift (tall section) */}
        <SectionReveal parallaxStrength={0.03}>
          <CurriculumSection />
        </SectionReveal>

        {/* How It Works — medium drift */}
        <SectionReveal parallaxStrength={0.06}>
          <HowItWorksSection />
        </SectionReveal>

        {/* Who It's For — medium drift */}
        <SectionReveal parallaxStrength={0.06}>
          <WhoIsItForSection />
        </SectionReveal>

        {/* Why This Program — medium drift */}
        <SectionReveal parallaxStrength={0.06}>
          <WhyCourseSection />
        </SectionReveal>

        {/* Mentor — slow, dreamy drift */}
        <SectionReveal parallaxStrength={0.05}>
          <MentorSection />
        </SectionReveal>

        {/* Outcomes — medium drift */}
        <SectionReveal parallaxStrength={0.06}>
          <OutcomesSection />
        </SectionReveal>

        {/* Testimonials — medium drift */}
        <SectionReveal parallaxStrength={0.06}>
          <TestimonialsSection />
        </SectionReveal>

        {/* Pricing — subtle drift */}
        <SectionReveal parallaxStrength={0.05}>
          <PricingSection />
        </SectionReveal>

        {/* Final CTA — dramatic drift */}
        <SectionReveal parallaxStrength={0.08}>
          <FinalCTASection />
        </SectionReveal>

      </main>
      <Footer />
    </div>
  )
}
