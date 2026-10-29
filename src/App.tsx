import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CoreBenefits } from './components/CoreBenefits';
import { VisaCategories } from './components/VisaCategories';
import { DocumentChecklist } from './components/DocumentChecklist';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FaqSection } from './components/FaqSection';
import { ConsultationForm } from './components/ConsultationForm';
import { OfficesSection } from './components/OfficesSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingContactWidget } from './components/FloatingContactWidget';

export default function App() {
  const [selectedVisaCategory, setSelectedVisaCategory] = useState<string>('Du lịch');

  const scrollToForm = () => {
    const el = document.getElementById('tu-van');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectVisa = (category: string) => {
    setSelectedVisaCategory(category);
    scrollToForm();
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col antialiased selection:bg-[#d5e3ff] selection:text-[#001f41]">
      {/* Fixed Header */}
      <Header onSelectVisa={handleSelectVisa} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16">
        {/* Section 1: Hero */}
        <HeroSection onQuickConsult={scrollToForm} />

        {/* Section 2: 4 Core Benefits */}
        <CoreBenefits />

        {/* Section 3: Visa Categories */}
        <VisaCategories onSelectVisa={handleSelectVisa} />

        {/* Section 4: Document Checklist & Self-Audit */}
        <DocumentChecklist onGetChecklistConsultation={scrollToForm} />

        {/* Section 5: 5-Step Process */}
        <ProcessTimeline onStartConsult={scrollToForm} />

        {/* Section 6: Why Choose Visa5S */}
        <WhyChooseUs />

        {/* Section 7: FAQs */}
        <FaqSection />

        {/* Section 8: Consultation / Lead Form */}
        <ConsultationForm initialVisaType={selectedVisaCategory} />

        {/* Section 9: Office Network & Contacts */}
        <OfficesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Mobile Bottom Action Bar */}
      <MobileBottomNav onConsultClick={scrollToForm} />

      {/* Floating Contact Popup in Bottom Right Corner */}
      <FloatingContactWidget onOpenConsultationForm={scrollToForm} />
    </div>
  );
}
