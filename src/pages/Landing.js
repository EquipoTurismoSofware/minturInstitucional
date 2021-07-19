import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import WorkingSection from 'components/landing/WorkingSection';
import TeamSection from 'components/landing/TeamSection';
import ContactSection from 'components/landing/ContactSection';
import React from 'react';

export default function Landing() {
    return (
        <React.Fragment>
            
            <main>
                <Header />
                <WorkingSection />
                <TeamSection />
                <ContactSection />
            </main>
            <DefaultFooter />
        </ React.Fragment>
    );
}
