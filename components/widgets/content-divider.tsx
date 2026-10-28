/**
 * Add space and 2 newlines
 */
export default function ContentDivider({
    mt = "mt-4",
    mb = "mb-4",
    mdmt = "md:mt-8",
    mdmb = "md:mb-8",
}: {
    mt?: String;
    mb?: String;
    mdmt?: String;
    mdmb?: String;
}) {
    return (
        <>
            <hr
                className={`${mt} ${mb} ${mdmt} ${mdmb} text-lime-700 light:text-stone-200`}
            />
        </>
    );
}
