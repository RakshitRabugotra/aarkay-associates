/* The title of the application */
export const TITLE = 'Aarkay Associates — Build Dreams'
export const FIRM_NAME = 'Aarkay Associates'
export const FIRM_LOCATION = 'Pathankot'
export const FIRM_INTRO =
  "Crafting innovative designs, shaping inspirations for sustainable living in tomorrow's world. We specialize in creating timeless homes that blend beauty, functionality, and environmental responsibility."

/* Logo of the page */
export const LOGO_LIGHT = '/logo-white.svg'
export const LOGO_DARK = '/logo-black.svg'

export const DEMO_AVAILABLE = false

/* Description of the website */
export const DESCRIPTION =
  "Discover AarKay Associates, your premier destination for architectural excellence. From concept to completion, we blend creativity with functionality to craft spaces that inspire and transform. With a team dedicated to innovation and client collaboration, we're here to turn your dreams into reality. Explore our portfolio and experience the difference with AarKay Associates."

/* Contact Us page content */
export const CONTACT_US =
  "Have a vision that needs a blueprint?  We turn dreams into designed realities. Our team of passionate architects is just a click, call, or carrier pigeon away - ready to collaborate and bring your project to life. Let's chat!"

/* Portfolio page content */
export const PORTFOLIO =
  "Step into a world where innovation meets inspiration. Explore our portfolio, a curated collection of architectural marvels that push boundaries and redefine spaces. We don't just design buildings, we craft experiences. Dive in and discover what your vision can become."

/* The domain for this website */
export const SELF_DOMAIN = 'https://github.com/RakshitRabugotra'

/* Section name of the page */
export interface ISection {
  name: string
  id: string
}

export const SECTIONS = {
  about: { name: 'Why Choose Us?', id: 'about-us' },
  services: { name: 'Services', id: 'services' },
  portfolio: { name: 'Our Work', id: 'portfolio' },
  testimonials: { name: 'Hear from our Clients', id: 'testimonials' },
}

/* Images for the website */
export type ImageCard = {
  src: string
  location: string
  description: string
  alt: string
}

export const BUILDINGS_IMG: ImageCard[] = [
  {
    src: '/assets/buildings/image1.jpg',
    location: 'New York, USA',
    description:
      'Inspired from the shape of a pineapple, this marvel took 10 years to build',
    alt: 'pine tree building',
  },
  {
    src: '/assets/buildings/image2.jpg',
    location: 'New Delhi, India',
    description:
      'This building blends in with the old as well as the young, simple design makes it appealing for office use',
    alt: 'ambient building',
  },
  {
    src: '/assets/buildings/image3.jpg',
    location: 'Chandigarh, India',
    description:
      'This cafe is made to live and breath with the nature, providing a perfect ambient setting to chill and relax',
    alt: 'green cafe',
  },
  {
    src: '/assets/buildings/image4.jpg',
    location: 'Shimla, India',
    description:
      'This hotel live within the deep valleys of Himachal Pradesh, perfect spot for tourism',
    alt: 'la aqua',
  },
  {
    src: '/assets/buildings/image5.jpg',
    location: 'Ambala, India',
    description:
      'This home is crafted to fit in any location and generation, hence the name Ageless',
    alt: 'ageless home',
  },
  {
    src: '/assets/buildings/image6.jpg',
    location: 'Chandigarh, India',
    description: 'The sleek designs says it all',
    alt: 'sleek home',
  },
  {
    src: '/assets/buildings/image7.jpg',
    location: 'Mumbai, India',
    description:
      'Building to accommodate Architectural students where they learn and have joyful moments of youth',
    alt: 'IEP',
  },
  {
    src: '/assets/buildings/image8.jpg',
    location: 'Jammu, India',
    description:
      'This house is named ambiguous because its beauty lies in the eyes of the beholder',
    alt: 'ambiguous',
  },
]

/* Why Us? */
export type WorkDescription = { title: string; description: string }

export const WORK_DESCRIPTIONS: WorkDescription[] = [
  {
    title: 'Design Solutions',
    description: 'Our firm is dedicated to pushing the boundaries of design',
  },
  {
    title: 'Building Practices',
    description:
      'We prioritize sustainability in our designs, aiming to create buildings',
  },
  {
    title: 'Expertise, Experience',
    description:
      'With years of experience in the field, our team has the expertise',
  },
  {
    title: 'Centric Approach',
    description:
      'We believe in a collaborative process, working closely with our clients',
  },
]

/* Services provided by the firm */
export interface IService {
  name: string
  imgSrc: string
  description: string
}

export const SERVICES: IService[] = [
  {
    name: 'Interior Design',
    imgSrc: 'interior-designing.jpg',
    description:
      'Tailored interiors enhancing ambiance, blending function and aesthetics, aligning with client preferences.',
  },
  {
    name: 'Architectural Design',
    imgSrc: 'architectural-design.jpg',
    description:
      "We specialize in innovative designs for residential, commercial, and institutional projects, ensuring they reflect clients' visions while meeting functional needs.",
  },
  {
    name: 'Master Planning',
    imgSrc: 'master-planning.jpg',
    description:
      'Strategic visioning, land use planning, and infrastructure design for sustainable, vibrant communities.',
  },
  {
    name: 'Renovation and Restoration',
    imgSrc: 'renovation.jpg',
    description:
      'Refreshing existing structures, restoring historic charm, enhancing functionality, and value.',
  },
  {
    name: 'Project Management',
    imgSrc: 'project-management.jpg',
    description:
      'Professional oversight ensuring timely, budget-friendly, high-quality project execution.',
  },
  {
    name: 'Consulting Services',
    imgSrc: 'consulting.jpg',
    description:
      'Expert advice on zoning regulations, building codes, and project feasibility, optimizing outcomes.',
  },
]

/* Testimonials from clients */
export const RATING_MAX = 5

export type TestimonialCard = {
  rating: number
  statement: string
  username: string
}

export const TESTIMONIALS: TestimonialCard[] = [
  {
    username: 'Rajesh Gupta',
    rating: 4,
    statement:
      'AarKay Associates transformed my house into a dream home. Their attention to detail and innovative design exceeded expectations. Grateful for their professionalism and dedication.',
  },
  {
    username: 'Anjali Sharma',
    rating: 4,
    statement:
      'AarKay Associates added immense value to our real estate projects. Their blend of traditional Indian architecture with modern design is remarkable. Highly recommend their innovative solutions.',
  },
  {
    username: 'Vikram Patel',
    rating: 5,
    statement:
      'Choosing AarKay Associates for our office space was a great decision. They understood our brand and created a space that enhances productivity. Seamless process, outstanding outcome.',
  },
  {
    username: 'Manyu Rajnibala',
    rating: 4,
    statement:
      'AarKay Associates is our trusted partner in property ventures. Their expertise and commitment to quality are unmatched. Confident in their ability, eager for future collaborations.',
  },
  {
    username: 'Ritu Singh',
    rating: 5,
    statement:
      'Collaborating with AarKay Associates elevates my projects. Their passion for design and attention to detail shine through. Seamless integration of architectural and interior elements. Highly recommended for innovative solutions.',
  },
]

/* Links for socials */
export type SocialMedia = { name: string; svgSrc: string; href: string }

export const SOCIALS: SocialMedia[] = [
  {
    name: 'Instagram',
    svgSrc: '/assets/socials/instagram.svg',
    href: 'https://www.instagram.com/thisisbillgates/',
  },
  {
    name: 'Gmail',
    svgSrc: '/assets/socials/google.svg',
    href: 'mailto:rakshit.rabugotra360@gmail.com',
  },
  {
    name: 'Phone',
    svgSrc: '/assets/socials/phone.svg',
    href: 'tel:+919569764949',
  },
]

/* Illustrations for pages */
export type IllustrationType = {
  src: string
  alt: string
}
export const ILLUSTRATIONS = [
  {
    src: '/assets/illustration/illustration-architect.jpg',
    alt: 'architect illustration',
  },
]

/* Error page handing */
export type ErrorType = { code: number; text: string; imgSrc: string }

export const ERROR = {
  e404: {
    code: 404,
    text: "You've landed somewhere you should not have. Even google does not know this page exists.",
    imgSrc: '',
  },
}
