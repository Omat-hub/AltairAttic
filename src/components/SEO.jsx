// src/components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index,follow" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* LinkedIn */}
    <meta property="og:site_name" content="Altair Attic Limited" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />

    {/* Pinterest */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />

    {/* Google+ */}
    <meta itemprop="name" content={title} />
    <meta itemprop="description" content={description} />
    <meta itemprop="image" content={image} />

    {/* Bing */}
    <meta name="msvalidate.01" content="BING_SITE_VERIFICATION_CODE" />
    
    {/* Schema.org markup for Google+ */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Altair Attic Limited",
          "url": "${url}",
          "logo": "https://www.altairattic.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/altairattic",
            "https://www.twitter.com/altairattic",
            "https://www.linkedin.com/company/altairattic",
            "https://www.pinterest.com/altairattic",
            "https://plus.google.com/+altairattic"
          ]
        }
      `}
    </script>
  </Helmet>
);

export default SEO;
