import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description?: string;
}

/**
 * Hook to set page title and meta description
 * @param title - Page title (will be appended with " | Craig Allen" if needed)
 * @param description - Meta description for SEO
 */
export const usePageMeta = ({ title, description }: PageMetaProps) => {
  useEffect(() => {
    // Set page title
    document.title = `${title} | Craig Allen`;

    // Set meta description
    if (description) {
      let metaDescription = document.querySelector(
        'meta[name="description"]'
      ) as HTMLMetaElement;

      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }

      metaDescription.content = description;
    }
  }, [title, description]);
};
