import { Helmet } from "react-helmet-async";

export default function SEO({
    title = "Jejen — Front-End Developer",
    description = "Front-End Developer specializing in React and Tailwind CSS. Building responsive, modern, and user-friendly web applications.",
    url = "https://jejen.dev",
}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#060606" />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}
