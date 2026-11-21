import Image from "next/image";
import { cacheLife } from "next/cache";

import SuspenseLoader from "../widgets/suspense-loader";
import ContainerMidShadow from "../layouts/containers/container-mid-shadow";
import CursiveText from "../text/cursive-text";
import ContentDivider from "../widgets/content-divider";

export default async function ImageItemTextRight({
    src,
    alt,
    captionBody,
    captionTitle,
}: {
    src: string;
    alt: string;
    captionBody: string;
    captionTitle: string;
}) {
    "use cache";
    cacheLife("hours");

    return (
        <ContainerMidShadow flex>
            <div className="h-100 md:w-100 md:h-100 relative flex items-center text-center">
                <SuspenseLoader>
                    <Image
                        src={src}
                        alt={alt}
                        fill={true}
                        sizes="auto"
                        style={{ objectFit: "cover" }}
                        placeholder="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 200'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter: url(%23b);' href='data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmrLxJ5EY36fBIg7ZIP51vzM4+RXP/2Q=='/%3E%3C/svg%3E"
                    />
                </SuspenseLoader>
            </div>
            <div className="p-5 w-full">
                <CursiveText fontSize={"text-5xl"}>{captionTitle}</CursiveText>
                <ContentDivider mdmt={"md:mt-4"} mdmb={"md:mb-4"} />
                <p>{captionBody}</p>
            </div>
        </ContainerMidShadow>
    );
}
