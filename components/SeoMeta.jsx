/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

const metaDefaults = {
  description:
    'Space provides space travel and tourism that is truly out of this world.',
  ogImage: '/images/social-image.jpg',
  ogType: 'website',
};

/**
 * Ensures the passed URL contains the site domain.
 * @param {string} url The URL to ensure contains the site domain.
 * @return {string} The formatted URL with the site domain included.
 */
const ensureDomain = (url) => {
  if (!url) return null;
  if (/^https?:\/\//.test(url)) return url;

  return `${process.env.SITE_URL}${/^\//.test(url) ? '' : '/'}${url}`;
};

/**
 * Compiles the passed metadata into a uniform object with proper defaults.
 * @param {object} meta Raw metadata object passed into the component.
 * @param {string} path The current path from Next Router.
 * @return {object} The normalized metadata object.
 */
const buildMetadata = (meta, path) => {
  const {
    ogType, twitterTitle, twitterDescription, twitterImage,
  } = meta;
  const baseTitle = meta.baseTitle || 'Space';
  const title = meta.title || '';
  const description = meta.description || meta.ogDescription || metaDefaults.description;
  const ogUrl = ensureDomain(meta.ogUrl || path);
  const canonicalUrl = ensureDomain(meta.canonicalUrl) || ogUrl;
  const ogTitle = meta.ogTitle || title;
  const ogDescription = meta.ogDescription || description;
  const ogImage = ensureDomain(meta.ogImage || metaDefaults.ogImage);

  const fullTitle = title ? [baseTitle, title].join(' | ') : baseTitle;

  return {
    title: fullTitle,
    description,
    canonicalUrl,
    ogUrl,
    ogTitle: fullTitle,
    ogDescription,
    ogType: ogType || metaDefaults.ogType,
    ogImage,
    twitterTitle: twitterTitle || ogTitle,
    twitterDescription: twitterDescription || ogDescription,
    twitterImage: ensureDomain(twitterImage || ogImage),
  };
};

const SeoMeta = ({ meta, children = null, noIndex = false }) => {
  const router = useRouter();
  const metadata = buildMetadata(meta, router?.asPath || '/');

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta
        name="description"
        content={metadata.description}
      />
      <meta
        property="og:title"
        content={metadata.ogTitle}
      />
      <meta
        property="og:url"
        content={metadata.ogUrl}
      />
      <meta
        property="og:image"
        content={metadata.ogImage}
      />
      <meta
        property="og:type"
        content={metadata.ogType}
      />
      <meta
        property="og:description"
        content={metadata.ogDescription}
      />
      <meta
        name="twitter:title"
        content={metadata.twitterTitle}
      />
      <meta
        name="twitter:description"
        content={metadata.twitterDescription}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:image"
        content={metadata.twitterImage}
      />
      {noIndex && (
      <meta
        name="robots"
        content="noindex"
      />
      )}
      <link
        rel="canonical"
        href={metadata.canonicalUrl}
      />
      {children}
    </Head>
  );
};

SeoMeta.defaultProps = {
  children: null,
  noIndex: false,
};

SeoMeta.propTypes = {
  /**
   * Metadata to set in the <head> for the page as an object. The only required property is **title**, the rest are
   * defaulted from other properties. Pass any additional properties to override the default for the page.
   */
  meta: PropTypes.shape({
    /**
     * The title of the page. This value will be appended to "Space | ". For example, if you set this to
     * "Home", the title would be "Space | Home".
     */
    title: PropTypes.string.isRequired,

    /**
     * The base title for the page. By default, this is set to "Space", but it may be overridden.
     */
    baseTitle: PropTypes.string,

    /**
     * The meta description for the page. This is defaulted to `ogDescription` or a hardcoded description.
     */
    description: PropTypes.string,

    /**
     * The canonical URL for the page. If not provided, this is automatically generated from the current page path.
     */
    canonicalUrl: PropTypes.string,

    /**
     * The Open Graph URL for the page. If not provided, this is automatically generated from the current page path.
     */
    ogUrl: PropTypes.string,

    /**
     * The Open Graph Title for the page. This value works the same as `title` and will default to the provided `title`.
     */
    ogTitle: PropTypes.string,

    /**
     * The Open Graph Description for the page. This is defaulted to `description` or a hardcoded description.
     */
    ogDescription: PropTypes.string,

    /**
     * The Open Graph Type for this page. Must be one of "website", "article", or "profile". Defaults to "website".
     */
    ogType: PropTypes.oneOf(['website', 'article', 'profile']),

    /**
     * The Open Graph Image for this page. It must either be the absolute path to the image with or without the site
     * domain. Defaults to a standard image.
     */
    ogImage: PropTypes.string,

    /**
     * The Twitter Title for the page. Defaults to `ogTitle` or `title`.
     */
    twitterTitle: PropTypes.string,

    /**
     * The Twitter Description for the page. Defaults to `ogDescription` or `description`.
     */
    twitterDescription: PropTypes.string,

    /**
     * The Twitter Image for the page. Defaults to `ogImage`.
     */
    twitterImage: PropTypes.string,
  }).isRequired,

  /**
   * Include additional elements into the `<head>` for the specific page.
   */
  children: PropTypes.node,

  /**
   * Disable search engine indexing for the page. Adds a meta tag with `noindex` to the `<head>`. You should
   * also add an exclude pattern to `next-sitemap.js` as well.
   */
  noIndex: PropTypes.bool,
};

export default SeoMeta;
