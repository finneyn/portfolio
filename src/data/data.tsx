import {
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
} from '@heroicons/react/24/outline';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioClient,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Nick Finney Web Developer Portfolio',
  description: "Nick Finney's Web Developer Portfolio and Resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Nick Finney`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Web developer with close to ten years of professional experience building and maintaining websites, with a recent focus on WordPress development and prior experience working extensively with Drupal. Specializing in delivering full website builds, custom block development, and ongoing site maintenance. Strong verbal and written communication skills with a collaborative, team-oriented approach.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Web developer with close to ten years of professional experience building and maintaining websites, with a recent focus on WordPress development and prior experience working extensively with Drupal. Specializing in delivering full website builds, custom block development, and ongoing site maintenance. Strong verbal and written communication skills with a collaborative, team-oriented approach.`,
  aboutItems: [
    {label: 'Location', text: 'Reno, NV', Icon: MapIcon},
    {label: 'Employment', text: 'Noble Studios', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend Technologies',
    skills: [
      {
        name: 'HTML / SCSS / PHP',
        level: 10,
      },
      {
        name: 'JavaScript / TypeScript / React',
        level: 9,
      },
      {
        name: 'Responsive Design / Figma',
        level: 9,
      },
    ],
  },
  {
    name: 'CMS & Development Tools',
    skills: [
      {
        name: 'WordPress / ACF / Gutenberg',
        level: 10,
      },
      {
        name: 'Drupal / Paragraph Types / Views / Twig',
        level: 8,
      },
      {
        name: 'Git / CLI / Docker / Lando',
        level: 9,
      },
      {
        name: 'Pantheon / WP Engine / Acquia / AWS',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioClients: PortfolioClient[] = [
  {
    name: 'Client One',
    description:
      'A comprehensive WordPress website build featuring custom Gutenberg blocks, responsive design, and seamless content management. Built with modern frontend practices and optimized for performance.',
    url: 'https://example.com',
    media: [
      {
        type: 'image',
        src: porfolioImage1,
        alt: 'Client One - Homepage',
      },
      {
        type: 'image',
        src: porfolioImage2,
        alt: 'Client One - About Page',
      },
      {
        type: 'video',
        src: '/videos/client-one-demo.mp4',
        thumbnail: porfolioImage3,
        alt: 'Client One - Site Walkthrough',
      },
      {
        type: 'image',
        src: porfolioImage4,
        alt: 'Client One - Contact Page',
      },
    ],
  },
  {
    name: 'Client Two',
    description:
      'A Drupal-based website for a higher education institution with complex content types, custom views, and advanced functionality. Features responsive design and accessibility compliance.',
    url: 'https://example.com',
    media: [
      {
        type: 'image',
        src: porfolioImage5,
        alt: 'Client Two - Homepage',
      },
      {
        type: 'video',
        src: '/videos/client-two-demo.mp4',
        thumbnail: porfolioImage6,
        alt: 'Client Two - Feature Demo',
      },
      {
        type: 'image',
        src: porfolioImage7,
        alt: 'Client Two - Programs Page',
      },
      {
        type: 'image',
        src: porfolioImage8,
        alt: 'Client Two - Events Page',
      },
      {
        type: 'video',
        src: '/videos/client-two-mobile.mp4',
        thumbnail: porfolioImage9,
        alt: 'Client Two - Mobile Experience',
      },
    ],
  },
];

// Legacy portfolio items (kept for backwards compatibility if needed)
export const portfolioItems: PortfolioItem[] = [];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const experience: TimelineItem[] = [
  {
    date: 'February 2021 – January 2026',
    location: 'Noble Studios',
    title: 'Web Developer',
    content: (
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>Web Developer on the Technical Services team at a digital marketing agency where we built and maintained multiple WordPress websites across tourism, B2B, financial services, public sector and nonprofit organizations.</li>
        <li>Collaborated with designers to implement Figma designs into pixel-perfect, responsive components using modern frontend best practices.</li>
        <li>Developed custom Gutenberg/ACF blocks using TypeScript, PHP, SCSS, and JavaScript to streamline content creation, improve editorial workflows, and enhance user experience across sites.</li>
        <li>Enhanced and extended a custom WordPress base theme used across new projects, building and refining Block Editor components to improve consistency, scalability, and developer efficiency.</li>
        <li>Managed monthly WordPress site maintenance across multiple properties, including accessibility updates, plugin/core upgrades, and Core Web Vitals performance enhancements.</li>
        <li>Leveraged AI-assisted development tools, including Cursor, to accelerate coding efficiency, troubleshoot issues, and enhance workflow.</li>
        <li>Served on the company's Noble Deeds Committee and acted as primary developer for the nonprofit recipient's 2025 website build.</li>
        <li>Managed WordPress deployments on Pantheon and WP Engine, collaborating through Git and pull requests, and leveraged Docker/Lando for local development and testing.</li>
        <li>Followed departmental development best practices, including BEM methodology for SCSS, to ensure maintainable and scalable code.</li>
        <li>Supported the performance marketing department on Technical SEO audits.</li>
        <li>Supported large-scale Drupal website for higher education client, working with content types, paragraph types, views, blocks, and Twig templates.</li>
        <li>Assisted with Drupal core and module updates, routine maintenance, and complex configuration tasks.</li>
        <li>Participated in major site redesign for Drupal client and collaborated with developers, project managers, and clients to meet strict deadlines.</li>
        <li>Worked with Acquia hosted Drupal environment, following established deployment and release best practices.</li>
      </ul>
    ),
  },
  {
    date: 'August 2018 – February 2021',
    location: 'Caesars Entertainment',
    title: 'Web Developer',
    content: (
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>Served as lead Drupal developer, managing multiple property and marketing website projects from design through deployment.</li>
        <li>Helped to develop a custom Drupal theme and child themes used across 20+ websites for consistent look and feel.</li>
        <li>Worked extensively with Drupal Content Types, Paragraph Types, Views, Blocks, Menus, Taxonomy, and more.</li>
        <li>Handled deployments to ensure production-ready code was released seamlessly and reliably.</li>
        <li>Managed site migrations and hosting setup, including large-scale AWS server configuration.</li>
        <li>Utilized Git/GitHub, Docker, and CLI for version control and local development.</li>
        <li>Trained and supported content editors on Drupal functionality, ensuring accurate content updates and feature adoption.</li>
        <li>Served in a project lead role during staffing changes, leading Dev Status meetings and overseeing completion of all tasks and projects.</li>
        <li>Expanded technical skillset by gaining initial experience with AEM, Java, and React during post-merger web development projects.</li>
      </ul>
    ),
  },
  {
    date: 'May 2016 – August 2018',
    location: 'Caesars Entertainment',
    title: 'Jr. Web Developer/Project Coordinator',
    content: (
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>Coordinated project workflows, managing task queues and leading Dev Status meetings to track progress and priorities.</li>
        <li>Developed new features for Drupal websites and supported onboarding of newly acquired properties, migrating content and addressing site-specific requirements.</li>
        <li>Trained content editors on Drupal usage, providing guidance for efficient content management.</li>
        <li>Built foundational skills in HTML, CSS/SCSS, JavaScript, and Twig through daily development tasks.</li>
      </ul>
    ),
  },
];

export const education: TimelineItem[] = [
  {
    date: 'December 2015',
    location: 'University of Nevada Reno',
    title: 'Bachelor of Science: Information Systems',
    content: <></>,
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out if you\'d like to discuss web development opportunities or collaborate on a project.',
  items: [
    {
      type: ContactType.Email,
      text: 'nick.finney21@gmail.com',
      href: 'mailto:nick.finney21@gmail.com',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [];

