import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = title ? `${title} | Nneji Chidi Ben` : 'Nneji Chidi Ben | Software Engineer';
  const siteDescription = description || "Portfolio of Nneji Chidi Ben - Software Engineer. Building high-performance digital ecosystems like VarianTrade & FluxPay.";
  const siteImage = image || "https://chidiportfolio.netlify.app/preview.jpg";
  const siteUrl = url || "https://chidiportfolio.netlify.app/";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name='description' content={siteDescription} />
      {keywords && <meta name='keywords' content={keywords} />}
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
    </Helmet>
  );
};

export default SEO;
