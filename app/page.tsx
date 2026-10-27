import PageBody from "@/components/layouts/containers/page-body";
import PageMainHeader from "@/components/layouts/headers/page-main-header";

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
            </PageBody>
        </>
    );
}
