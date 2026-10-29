import Container from "@/components/layouts/containers/container";
import PageBody from "@/components/layouts/containers/page-body";
import PageMainHeader from "@/components/layouts/headers/page-main-header";
import CursiveText from "@/components/text/cursive-text";
import ContentDivider from "@/components/widgets/content-divider";

/**
 * Home page component for the Cyan JPX Portfolio application.
 * Serves as the landing page displaying a welcome message and navigation instructions.
 *
 * @returns JSX element representing the home page view.
 */

export default function Home() {
    return (
        <>
            <PageMainHeader>Cyan JPX Portfolio</PageMainHeader>
            <PageBody>
                <p>Welcome to portfolio home page of CyanJPX.</p>
                <p>Use the menu to visit the different sections.</p>
                <ContentDivider />
                <Container margin="md:mb-4">
                    <CursiveText fontSize={"text-5xl"}>About me</CursiveText>
                </Container>
                <p>
                    I am a full stack software engineer specializing in frontend
                    work using React, TypeScript and other tools,
                </p>
                <p>
                    in combination with A.I. agentic work style. I build
                    responsive and user-friendly web and mobile apps from
                    concept to release.
                </p>
            </PageBody>
        </>
    );
}
