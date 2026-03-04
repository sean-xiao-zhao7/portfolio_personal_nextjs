import PageMainHeader from "@/components/layouts/page/page-header";
import PageBody from "@/components/layouts/page/page-body";
import PageParagraph from "@/components/layouts/page/page-paragraph";
import AboutSection from "@/components/cv/about-section";

export default function CVPage() {
    return <>
        <PageMainHeader>Curriculum Vitae</PageMainHeader>
        <PageBody>
            <PageParagraph>
                <AboutSection h2Content="Full Stack Software Developer" h3Content="FellowshipGTA, Toronto.">
                    <p>As a member of a small team, design and build web and mobile applications.</p>
                    <p>
                        Focus on responsive design, UI/UX usability, aesthetics, maintainability and scalability.
                        Translate requirements into prototypes, then build, test and release. Collaborate with cross-functional teams on a regular basis by responding to user feedback, management requests, bug-fixes, planning and other operations.
                    </p>
                    <p>Frontend:		TypeScript, React.js, Next.js, Flutter, Vue.js, React Native.</p>
                    <p>Design: 		HTML5, CSS3, SASS, MaterialUI, TailwindCSS, etc.</p>
                    <p>Backend:		Node.js, Google Cloud, AWS, MongoDB, MySQL, GraphQL.</p>
                    <p>Operational:	Git, Linux CLI, Figma, Codex/Cursor A.I. agents, XCode, etc.</p>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Senior Software Developer" h3Content="Nodis.io, Toronto.">
                    <p>As a core member of a software startup company in Toronto, plan, design, build and maintain web and mobile applications.</p>
                    <p>Learn and apply new technical knowledge in order to implement requirements. Learn as a team. Work under a tight schedule amid shifting requirements and unforeseen challenges.
                        Apply quality assurance for deployments, report issues and architect solutions.</p>
                    <p>Frontend:		React.js, React Native, PHP.</p>
                    <p>Design: 		HTML5, CSS3, SASS, Bootstrap, jQuery.</p>
                    <p>Backend:		Node.js, AWS, MongoDB, MySQL.</p>
                    <p>Operational:	Git, Linux CLI, JIRA, Slack.</p>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Programmer Analyst" h3Content="University of Toronto, Toronto.">
                    <p>As a member of the digital library at U of T, design, build, test and maintain various applications for researchers, video V.O.D./streaming projects.</p>
                    <p>Convert requirements into implementations via prototyping. Collaborate with a large team to ensure robust deployments and promptly respond to issues.</p>
                    <p>Frontend:		Java, PHP, Drupal CMS, ColdFusion, Ruby on Rails.</p>
                    <p>Design: 		HTML5, CSS3, Bootstrap, jQuery.</p>
                    <p>Backend:		Spring, Postgres, MySQL, NGINX, Apache.</p>
                    <p>Operational:	Git, Linux CLI, Jenkins, Chef, JIRA, FFmpeg with MPEG-DASH.</p>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Project Software Developer" h3Content="RaymondMowla Music, Toronto.">
                    <p>As the sole software developer of a musician digital portal, design, build, and maintain the structure and content of the portal. Ensure responsiveness.</p>
                    <p>Use vanilla modern TypeScript/JavaScript, HTML5/CSS3, SASS, Material UI, and others for interface development. Enable YouTube listening experience within the site, allow social media integrations.</p>
                    <p>Update site automatically with new releases. Update aesthetics of the design periodically. Ensure mobile responsiveness and accessibility of all parts of each application.</p>
                    <p>Frontend:		Vanilla ES6 JavaScript, HTML5, CSS3, SASS, MaterialUI.</p>
                    <p>Operational:	GitHub CI/CD, Linux CML, Figma.</p>
                </AboutSection>
            </PageParagraph >
            <PageParagraph>
                <AboutSection h2Content="Mobile Application Developer" h3Content="Nectar.io, Toronto.">
                    <p>Attempt to bootstrap a mobile application-centric startup service.</p>
                    <p>Use Flutter and Sigma to design a prototype mobile application that meets market research.
                    Conduct market research and do fundraising activities.
                    Consult experts in industry to assess viabliity before coding.</p>
                    <p>Heavily refine requirements, app design and workflows to adapt to market feedback.</p>
                </AboutSection>
            </PageParagraph>
        </PageBody >
    </>
}