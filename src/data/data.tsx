import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
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
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
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
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
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
  name: `I'm Christopher Joshua`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Jakarta based <strong className="text-stone-100">Data Scientist Graduate</strong>, from University of Sydney
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
         I'd describe myself as someone who's assertive, logical, and resourceful – I genuinely enjoy tackling 
         different kinds of challenges and getting things done. 
         From <strong className="text-stone-100">Programming, Modelling, Analysis or Project Management </strong>
         I'm confident in my ability to pick up whatever new skills are needed{' '}
    
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
  description: `As a Data Scientist graduate from the University of Sydney, 
  my recent role as a Business Data Analyst at PT. Bank Central Asia has further 
  honed my analytical thinking and problem-solving skills.`,
  aboutItems: [
    {label: 'Location', text: 'Jakarta', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesian', Icon: FlagIcon},
    {label: 'Interests', text: 'Basketball, Gym, Guitar', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Sydney', Icon: AcademicCapIcon},
    {label: 'Employment', text: ' - ', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Machine Learning - Libraries',
    skills: [
      {
        name: 'Sci-kit-learn | Tensorflow | Keras | PyTorch',
        level: 8,
      },
      {
        name: 'Langchain | SpaCy',
        level: 8,
      },
      {
        name: 'Numpy | Pandas',
        level: 9,
      },
    ],
  },
  {
    name: 'Supporting Tools',
    skills: [
      {
        name: 'AWS',
        level: 8,
      },
      {
        name: 'Docker',
        level: 8,
      },
      { 
        name: 'Tableau',
        level: 9,
      },

    ],
  },
  {
    name: 'Database Management',
    skills: [
      {
        name: 'PostgreSQL',
        level: 9,
      },
      {
        name: 'MySQL',
        level: 9,
      },

    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'ReactJS',
        level: 7,
      },
      {
        name: 'HTML',
        level: 7,
      },
    ]
  },


];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2025',
    location: 'University of Sydney',
    title: 'Masters in Data Science',
    content: <p>Specialized in machine learning, AI engineering and visual analytics with hands-on experience in data pre-processing, model training, model testing, hyperparameter tuning, cloud computing and database management.</p>,
  },
  {
    date: '2019',
    location: 'Airlangga University',
    title: 'Bachelor in Mathematics',
    content: <p>Specialized in mathematical modelling and computer programming. Adept in areas such as network, operational research, statistics, business mathematics. </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2025',
    location: 'Metasense - Sydney',
    title: 'Machine Learning Engineer - Intern',
    content: (
      <p>
      As part of the battery analytics team, I successfully developed State of Health (SoH) prediction models for both cell-level and module-level lithium-ion batteries. 
      Doing ETL for multiple datasets, variety of machine learning techniques, I achieved high prediction accuracy with low MSE. 
      This dual-level modeling approach enables more precise health diagnostics and a more versatile use case for our battery management systems. 
      The models were validated and demonstrated strong generalization performance, making them suitable for real-world deployment in mobile phones and electric vehicles.
      </p>
    ),
  },
  {
    date: '2020 - 2024',
    location: 'Bank Central Asia - Jakarta',
    title: 'Senior Business Data Analyst',
    content: (
      <p>
        Turning business and users’ needs into requirements. Built data pipelines with Python from SQL databases for easy to use and sustainable reporting. I've also developed 
        impactful dashboards in Power BI to track quarterly project achievements that helped management track team and member productivity. I implemented test automation using 
        Selenium for repetitive and complex workflow data. My experience includes working on credit applications, risk analysis, integrating with governmental services, adhering 
        to regulatory requirements, and contributing to data warehouse development. I excel in presenting new ideas and product innovations to stakeholders.
      </p>
    ),
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
  description: 'You can e-mail or dm me on instagram.',
  items: [
    {
      type: ContactType.Email,
      text: 'chrisjosh1097@gmail.com',
      href: 'mailto:chrisjosh1097@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Jakarta, Indonesia',
      href: 'https://maps.app.goo.gl/LqGX61kEeAMHCHEx5',
    },
    {
      type: ContactType.Instagram,
      text: '@christojj',
      href: 'https://www.instagram.com/christojj/',
    },
    {
      type: ContactType.Github,
      text: 'chrisjosh1097',
      href: 'https://github.com/chrisjosh1097',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/chrisjosh1097'},
  // {label: 'HuggingFace', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/christopher-j-06ba5b183/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/christojj'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
