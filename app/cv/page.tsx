import PageMainHeader from "@/components/layouts/page/page-header";
import PageBody from "@/components/layouts/page/page-body";
import PageParagraph from "@/components/layouts/page/page-paragraph";
import ContentDivider from "@/components/widgets/content-divider";
import AboutSection from "@/components/layouts/page/about-section";

export default function CVPage() {
    return <>
        <PageMainHeader>About - C.V.</PageMainHeader>
        <PageBody>
            <PageParagraph>
                <AboutSection h2Content="Full Stack Software Engineer" h3Content="Nodis.io Inc." mainText="
                    Design and develop robust, user-friendly, stable and secure web and mobile software applications based on complex business requirements, while ensuring maintainability, expandability and reusability.
                    Design and build frontend components using ReactJS, NextJS, TypeScript, Vanilla JavaScript, HTML5, CSS3, SASS, Tailwind CSS, Material UI libraries, etc. Build backend APIs and services using NodeJS, MongoDB, MySQL, AWS, Google Firebase, etc. Build mobile applications using React Native and Flutter, etc.
                    Implement and troubleshoot using A.I tools like Cursor, ChatGPT and Midjourney." />
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Software Programmer Analyst" h3Content="University of Toronto Libraries" mainText="Develop, implement and troubleshoot software applications and integrations based on Java/Spring, PHP/CMS, HTML/CSS, Python, Linux DevOps and others. Interact with university patrons to identify and achieve technical goals with their research projects. Adapt to changing requirements quickly in a positive manner regarding both technical and non-technical aspects. Participate in team plans, including testing and deployment, for all new and legacy features." />
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Project Mobile Software Engineer" h3Content="BlackSheep Inc." mainText="Run a startup project with a small team to design and build mobile and web applications. Design and build frontend using Flutter, Material UI, ReactJS, NextJS, HTML5/CSS3, SASS. Build backend using Google Firebase, NoSQL, Git." />
            </PageParagraph>
            <PageParagraph>
                <AboutSection h2Content="Project Software Engineer" h3Content="Raymond Mowla Music" mainText="Analyze business requirements, design and develop new software components and maintain existing ones based on Vanilla TypeScript, HTML5, CSS3, SASS,  Material Design and Git. Develop and maintain CI/CD workflow with GitHub." />
            </PageParagraph >
            <PageParagraph>
                <AboutSection h2Content="Project Software Engineer" h3Content="Fellowship GTA" mainText="Design and build frontend applications using Vue.js, HTML5, CSS3, SASS and other tools. Deploy using Git. Manage hosting of applications on." />
            </PageParagraph>
        </PageBody>
    </>
}