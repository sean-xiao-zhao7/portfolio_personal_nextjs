import PageMainHeader from "@/components/layouts/page/page-main-header";
import PageBody from "@/components/layouts/page/page-body";
import PageParagraph from "@/components/layouts/page/page-paragraph";
import AboutSection from "@/components/cv/about-section";

export default function CVPage() {
    return <>
        <PageMainHeader>Sean Xiao - Curriculum Vitae</PageMainHeader>
        <PageBody>
            <PageMainHeader>Main career roles</PageMainHeader>
            <PageParagraph>
                <AboutSection h2Content="Full Stack Software Developer" h3Content="BlackSheep Inc.">
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
                <AboutSection h2Content="Web & Mobile Software Developer" h3Content="Nodis.io">
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
                <AboutSection h2Content="Software Developer & Maintainer" h3Content="RaymondMowla Music, Toronto.">
                    <p>As the sole software developer of a musician digital portal, design, build, and maintain the structure and content of the portal. Ensure responsiveness.</p>
                    <p>Use vanilla modern TypeScript/JavaScript, HTML5/CSS3, SASS, Material UI, and others for interface development. Enable YouTube listening experience within the site, allow social media integrations.</p>
                    <p>Update site automatically with new releases. Update aesthetics of the design periodically. Ensure mobile responsiveness and accessibility of all parts of each application.</p>
                    <ul>
                        <li>Frontend:		Vanilla ES6 JavaScript, HTML5, CSS3, SASS, MaterialUI.</li>
                        <li>Operational:	GitHub CI/CD, Linux CML, Figma.</li>
                    </ul>
                </AboutSection>
            </PageParagraph >
            <PageMainHeader>Projects and older career roles</PageMainHeader>
            <PageParagraph>
                <AboutSection h2Content="Flutter Mobile Application Developer" h3Content="Nectar, Toronto.">
                    <p>Attempt to bootstrap a mobile application-centric startup service.</p>
                    <p>Use Flutter and Sigma to design a prototype mobile application that meets market research.
                        Conduct market research and do fundraising activities.
                        Consult experts in industry to assess viabliity before coding.</p>
                    <p>Heavily refine requirements, app design and workflows to adapt to market feedback.</p>
                    <p>Frontend:		Flutter.</p>
                    <p>Operational:	Figma, Git, XCode.</p>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="React Web Portal Developer" h3Content="Samiya International, Maputo, Mozambique.">
                    <p>Design, build and maintain a web portal for Samiya - a children's aid foundation based in Africa.</p>
                    <p>Communicate remotely with owner, gather feedback on design and update portal with new content.</p>
                    <p>Frontend:		React, HTML5, CSS3, SASS.</p>
                    <p>Operational:	Git, Linux CLI.</p>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="React Native Mobile Developer" h3Content="JUZGO Inc., Mississauga.">
                    <p>Design, build and maintain a mobile application for real estate management.</p>
                    <p>Build, refine and test prototypes. Maintain frequent communication with project managers.</p>
                    <p>Frontend:		React Native.</p>
                    <p>Backend: AWS.</p>
                    <p>Operational:	Git, Linux CLI.</p>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Ruby on Rails Research Application Developer Intern" h3Content="The Riverwood Conservancy, Mississauga.">
                    <p>As a member of a team of interns, design, build and maintain a full stack web application for biological data.</p>
                    <p>Learn as a group Ruby On Rails, MySQL and related technologies. Collaborate with environmental researchers on data models and UI/UX.</p>
                    <p>Frontend:		Ruby On Rails, HTML4, CSS.</p>
                    <p>Operational:	Git, Linux CLI, MySQL.</p>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Ruby on Rails Application Developer" h3Content="Youth Unlimited / Youth For Christ, Toronto.">
                    <p>As a member of a team of interns, design, build and maintain a web application for youth growth.</p>
                    <p>Learn as a group Ruby On Rails and related technologies in order to apply in projects.</p>
                    <p>Frontend:		Ruby On Rails.</p>
                    <p>Operational:	Git, Linux CLI.</p>
                </AboutSection>
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Kitchen worker" h3Content="Fred's Not Here, Toronto.">
                    <p>As a member of a restaurant staff, prepare food and keep spaces tidy.</p>
                    <p>Ensure customer happiness, enable staff efficiency.</p>
                </AboutSection>
            </PageParagraph>
        </PageBody >
    </>
}