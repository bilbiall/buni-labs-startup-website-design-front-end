export function ServiceSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://bunilabs.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://bunilabs.com#services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "About",
              item: "https://bunilabs.com#about",
            },
          ],
        }),
      }}
    />
  )
}
