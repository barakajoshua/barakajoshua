import Head from "next/head";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Baraka Joshua",
    url: "https://barakajoshua.com",
    image: "https://barakajoshua.com/images/josh2.webp",
    description: "Full Stack Developer specializing in web and mobile development",
    jobTitle: "Full Stack Developer",
    email: "balakajoshuah@gmail.com",
    telephone: "+250789414780",
    sameAs: [
      "https://www.facebook.com/baraka.joshua.7",
      "https://www.instagram.com/baraka_joshua/",
      "https://github.com/barakajoshua",
      "https://www.linkedin.com/in/baraka-joshua/",
    ],
    knowsAbout: [
      "React",
      "Node.js",
      "Python",
      "PHP",
      "HTML5",
      "CSS3",
      "JavaScript",
      "MongoDB",
      "Express",
      "Laravel",
      "Figma",
      "Flutter",
      "MySQL",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Self-employed",
    },
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
