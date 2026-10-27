import PageBody from "@/components/layouts/containers/page-body";
import PageParagraph from "@/components/layouts/containers/page-paragraph";
import PageMainHeader from "@/components/layouts/headers/page-main-header";

/**
 * Global Not Found (404) Page Component for Next.js App Router.
 * Rendered automatically when a route is missing or when notFound() is explicitly triggered.
 *
 * @returns JSX element representing the 404 error screen.
 */
export default function NotFound() {
    return (
        <PageBody>
            <PageMainHeader>Page Not Found - 404</PageMainHeader>
            <PageParagraph>
                <p>This resource does not exist.</p>
            </PageParagraph>
        </PageBody>
    );
}
