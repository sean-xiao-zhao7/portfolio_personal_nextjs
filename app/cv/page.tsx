import PageMainHeader from "@/components/layouts/page/page-header";
import PageBody from "@/components/layouts/page/page-body";
import PageParagraph from "@/components/layouts/page/page-paragraph";
import AboutSection from "@/components/layouts/page/about-section";

export default function CVPage() {
    return <>
        <PageMainHeader>Curriculum Vitae</PageMainHeader>
        <PageBody>
            <PageParagraph>
                <AboutSection h2Content="Full Stack Software Engineer" h3Content="Nodis.io Inc.">
                    <p>Design and develop robust, user-friendly, stable and secure web and mobile software applications based on complex business requirements. Ensure maintainability, expandability and reusability.</p>
                    <p>Design and build frontend components using ReactJS, NextJS, TypeScript, Vanilla JavaScript, HTML5, CSS3, SASS, Tailwind CSS, Material UI libraries, etc.</p>
                    <p>Build backend APIs and services using NodeJS, MongoDB, MySQL, AWS, Google Firebase, etc. Build mobile applications using React Native and Flutter, etc.</p>
                    <p>Implement and troubleshoot using A.I tools like Cursor, ChatGPT and Midjourney.</p>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Software Programmer Analyst" h3Content="University of Toronto Libraries"><p>Develop, implement and troubleshoot software applications and integrations based on Java/Spring, PHP/CMS, HTML/CSS, Python, Linux DevOps and others.</p><p> Interact with university patrons to identify and achieve technical goals with their research projects.</p><p> Adapt to changing requirements quickly in a positive manner regarding both technical and non-technical aspects.</p>
                    <p>Participate in team plans, including testing and deployment, for all new and legacy features.</p></AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Project Mobile Software Engineer" h3Content="BlackSheep Inc."><p>Run a startup project with a small team to design and build mobile and web applications.</p><p>Design and build frontend using Flutter, Material UI, ReactJS, NextJS, HTML5/CSS3, SASS.</p>
                    <p>Build backend using Google Firebase, NoSQL, Git.</p></AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Project Software Engineer" h3Content="Raymond Mowla Music"><p>Analyze business requirements, design and develop new software components and maintain existing ones based on Vanilla TypeScript, HTML5, CSS3, SASS, Material Design and Git.</p>
                    <p>Develop and maintain CI/CD workflow with GitHub.</p></AboutSection>
            </PageParagraph >
            <PageParagraph>
                <AboutSection h2Content="Project Software Engineer" h3Content="Fellowship GTA"><p>Design and build frontend applications using Vue.js, HTML5, CSS3, SASS and other tools. Deploy using Git.</p><p>Manage hosting of applications on.</p></AboutSection>
            </PageParagraph>
        </PageBody >
    </>
}