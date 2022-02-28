export interface PageProps {
  Component?: React.ComponentType;
  children?: React.ReactNode;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
  };
  heroImage?: {
    className?: string;
    alt?: string;
    src: string;
    layout?: string;
    objectFit?: string;
  };
  pageProps?: any;
}
