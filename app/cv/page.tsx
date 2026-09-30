import PageMainHeader from "@/components/layouts/headers/page-main-header";
import PageBody from "@/components/layouts/containers/page-body";
import PageParagraph from "@/components/layouts/containers/page-paragraph";
import AboutSection from "@/components/layouts/containers/about-section";

export default function CVPage() {
    return <>
        <PageMainHeader>Sean Xiao's Homepage</PageMainHeader>
        <PageBody>
            <PageMainHeader>Curriculum Vitae</PageMainHeader>
            <PageParagraph>
                <AboutSection h2Content="Software Developer" h3Content="FellowshipGTA">
                    <p>Use JavaScript/TypeScript based tools like React.js/Next.js, Node/Express.js, HTML5/CSS3, and other tools to write responsive and accessible full stack web applications.</p>
                    <p>Take designs from Figma and mockups and code prototypes for designers to review. Ensure each iteration meets needs of the designers and manager; refine prototypes in a team setting to ensure projects progress at a reasonable pace and quality.</p>
                    <p>Ensure web applications follow current industry standards and best practices in order to achieve loading speed, pleasant presentation and maintainability. Document carefully code written and keep track of project progress. Learn new technologies as needed in a team setting.</p>
                    <ul>
                        <li>Frontend:		TypeScript, React.js, Next.js, Flutter, Vue.js, React Native.</li>
                        <li>Design: 		HTML5, CSS3, SASS, MaterialUI, TailwindCSS, etc.</li>
                        <li>Backend:		Node.js, Google Cloud, AWS, MongoDB, MySQL, GraphQL.</li>
                        <li>Operational:	Git, Linux CLI, Figma, Codex/Cursor A.I. agents, XCode, etc.</li>
                    </ul>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Software Engineer" h3Content="Nodis.io">
                    <p>Provide technical leadership within an early Toronto startup of around 10 people, Use React.js, Node.js, MongoDB, AWS EC2, HTML/CSS, and React Native to build frontend website and mobile app. </p>
                    <p>Build REST API using Node, MongoDB and SQL database. Properly test all parts of the software stack. Navigate complex communication within a fast-paced environment, ensuring the team comply with the agile development principle.</p>
                    <p>Assess the viability of React.js and other tools as a team, carefully conduct prototyping that proves feasibility to all members of the team. Carefully document the learning process and its results.</p>
                    <ul>
                        <li>Frontend:		React.js, React Native, PHP.</li>
                        <li>Design: 		HTML5, CSS3, SASS, Bootstrap, jQuery.</li>
                        <li>Backend:		Node.js, AWS, MongoDB, MySQL.</li>
                        <li>Operational:	Git, Linux CLI, JIRA, Slack.</li>
                    </ul>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Programmer Analyst" h3Content="University of Toronto">
                    <p>Maintain legacy software such as Drupal CMS systems, Java and PHP based MVC frameworks; design responsive and AODA compliant interfaces using HTML, CSS, existing theme libraries; conduct PostgreSQL and MySQL database administration, and work with DevOps team to build automated deployment using Jenkins. </p>
                    <p>Collaborate with teams of all levels to integrate and migrate existing legacy software into newer technologies such as JavaScript, Ruby and Python based systems. Share and learn technical knowledge within the team of developers, designers, librarians, DevOps and other members.</p>
                    <ul>
                        <li>Frontend:		Java, PHP, Drupal CMS, ColdFusion, Ruby on Rails.</li>
                        <li>Design: 		HTML5, CSS3, Bootstrap, jQuery.</li>
                        <li>Backend:		Spring, Postgres, MySQL, NGINX, Apache.</li>
                        <li>Operational:	Git, Linux CLI, Jenkins, Chef, JIRA, FFmpeg with MPEG-DASH.</li>
                    </ul>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Project Developer" h3Content="RaymondMowla Music, Toronto.">
                    <p>As the sole software developer of a musician digital portal, design, build, and maintain the structure and content of the portal. Ensure responsiveness.</p>
                    <p>Use vanilla modern TypeScript/JavaScript, HTML5/CSS3, SASS, Material UI, and others for interface development. Enable YouTube listening experience within the site, allow social media integrations.</p>
                    <p>Update site automatically with new releases. Update aesthetics of the design periodically. Ensure mobile responsiveness and accessibility of all parts of each application.</p>
                    <ul>
                        <li>Frontend:		Vanilla ES6 JavaScript, HTML5, CSS3, SASS, MaterialUI.</li>
                        <li>Operational:	GitHub CI/CD, Linux CML, Figma.</li>
                    </ul>
                </AboutSection>
            </PageParagraph >
        </PageBody >
    </>
}