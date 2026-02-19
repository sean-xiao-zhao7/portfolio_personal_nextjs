import PageMainHeader from "@/components/layouts/page/page-header";
import PageBody from "@/components/layouts/page/page-body";
import PageParagraph from "@/components/layouts/page/page-paragraph";
import AboutSection from "@/components/cv/about-section";

export default function CVPage() {
    return <>
        <PageMainHeader>Curriculum Vitae</PageMainHeader>
        <PageBody>
            <PageParagraph>
                <AboutSection h2Content="Full Stack Software Developer" h3Content="BlackSheep Inc. Startup enterprise. Toronto, ON, Canada.">
                    <p>Responsible for the whole software development of web and mobile applications, in a startup environment.</p>
                    <p>Use Flutter to build mobile application stack. Utilize Material UI for frontend, and Firebase for backend.</p>
                    <p>Use ReactJS/NextJS, TypeScript, HTML5/SASS/CSS3 to build web application.</p>
                    <p>Use SQL and MongoDB to build database and utilize for applications.</p>
                    <p>Participate in agile workflow; attend meetings with stakeholders; analyze requirements and convert them into roadmaps.</p>
                    <p>Maintain and deploy mobile applications on Apple/Android storefronts. Manage policies and national requirements for release.</p>
                    <p>Ensure applications are usable 24/7, respond to urgent fixes, unexpected downs and other requests.</p>
                    <p>Ensure mobile responsiveness and accessibility of all parts of each application.</p>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Lead Software Developer" h3Content="Nodis.io Inc. Toronto, ON, Canada.">
                    <p>Build front and back ends of a rewards application on mobile and desktop, based on a proprietary cryptocurrency backend.</p>
                    <p>Use ReactJS, HTML/CSS, React Native, VueJS and other tools for frontend.</p>
                    <p>Use NodeJS, Express, MongoDB, to build storage, authentication and middleware layers.</p>
                    <p>Participate in team sprints; plan projects and milestones; revise strategies in team meetings post launches.</p>
                    <p>Maintain mobile application after deployment; ensure user experiences are pleasant.</p>
                    <p>Refactor code and re-release applications as needed; participate in relaunch of app and ensure new user experiences.</p>
                    <p>Ensure mobile responsiveness and accessibility of all parts of each application.</p>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Application Programmer Analyst" h3Content="University of Toronto Libraries. Toronto, ON, Canada.">
                    <p>A member of library IT department, support a specific librarian's clients with digital needs.</p>
                    <p>Support users of web applications and add new features upon request.</p>
                    <p>Design and build web application using Java, PHP, Drupal, Python, SQL and other tools.</p>
                    <p>Build and maintain servers using Docker, Chef, Linux, Apache, NGINX and other tools.</p>
                    <p>Upgrade legacy applications in older frameworks; assess capability and find workarounds when needed.</p>
                    <p>Using CI/CD for testing and deployments.</p>
                    <p>Ensure mobile responsiveness and accessibility of all parts of each application.</p>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Frontend Software Developer" h3Content="Raymond Mowla Music. Toronto, ON, Canada.">
                    <p>Design and build a local musician online portfolio.</p>
                    <p>Use vanilla modern TypeScript/JavaScript, HTML5/CSS3, SASS, Material UI, and others for interface development.</p>
                    <p>Enable YouTube listening experience within the site, allow social media integrations.</p>
                    <p>Update site automatically with new releases. Update aesthetics of the design periodically.</p>
                    <p>Ensure mobile responsiveness and accessibility of all parts of each application.</p>
                </AboutSection>
            </PageParagraph >
            <PageParagraph>
                <AboutSection h2Content="Frontend Software Developer" h3Content="Fellowship GTA. Mississauga, ON, Canada.">
                    <p>Design and build a church website that is modern and accessible.</p>
                    <p>Use Vue.js, HTML5/CSS3, SASS, Material UI library to build a frontend application.</p>
                    <p>Communicate clearly with non-technical people about website features and development needs.</p>
                    <p>Maintain, deploy and update site periodically with new features, media and text.</p>
                    <p>Ensure mobile responsiveness and accessibility of all parts of each application.</p>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Lead Mobile Application Developer" h3Content="Nectar Inc. Early startup. Toronto, ON, Canada.">
                    <p>Attempt to bootstrap a mobile application-centric startup service.</p>
                    <p>Use Flutter and Sigma to design a prototype mobile application that meets market research.</p>
                    <p>Conduct market research and do fundraising activities.</p>
                    <p>Consult experts in industry to assess viabliity before coding.</p>
                    <p>Heavily refine requirements, app design and workflows to adapt to market feedback.</p>
                </AboutSection>
            </PageParagraph>
        </PageBody >
    </>
}