import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'SCG' | 'Blotocol'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  SCG: {
    name: 'Tutadoo',
    longName: '',
    subDetail: 'events ticketing platform',
    url: 'https://www.tutadoo.com/',
    position: 'Backend Software Engineer',
    duration: 'june 2022',
    logo: {
      light: '/worked_at_logos/deloitte/Deloitte_logo_black.png',
      dark: '/worked_at_logos/deloitte/Deloitte_logo.png',
    },
    roles: [
      <>
        Contributed to the development and maintenance of Tutadoo's backend infrastructure: This involved working
        with databases, APIs, servers, and other tools to ensure smooth operation and scalability.
      </>,
      <>
      Wrote and tested code: I built new features, fixed bugs, and optimized existing functionalities.
      </>,
      <>
      I maintained clear and concise documentation to ensure understanding and maintainability of the codebase.
      </>,
    ],
    
  },
  Deloitte: {
    name: 'CtrlSend',
    longName: 'Scentregroup Limited AU',
    subDetail: 'a money transfer startup company',
    url: 'https://ctrlsend.framer.website/',
    position: 'Founder, Developer',
    duration: '2023 - present',
    logo: {
      light: '/worked_at_logos/scg/SCG_400x400.jpg',
      dark: '/worked_at_logos/scg/SCG.png',
    },
    roles: [
      <>
      I conceived the idea, built the initial prototype, and established the vision and mission of the company. 
      </>,
      <>
      I coded the backend infrastructure, implemented key features, and ensured the functionality and performance of the application. 
      </>,
      <>
      Leveraging my expertise in both business development and technical implementation, I effectively communicate CtrlSend's value proposition and demonstrate its functionality to potential stakeholders and investors.
      </>,
    ],
  },
  Blotocol: {
    name: 'upwork',
    longName: 'Blotocol Philippines',
    subDetail: 'freelancing platform. Formerly Elance-oDesk',
    url: '',
    position: 'Freelance web developer',
    duration: 'Nov 2020 - Feb 2020',
    logo: {
      light: '/worked_at_logos/ivp/blotocol_logo-dark.png',
      dark: '/worked_at_logos/ivp/blotocol-logo-white.png',
    },
    roles: [
      <>
        Functioned as a proficient WordPress Developer with expertise in theme customization, plugin development, and site optimization. 
      </>,
      <>
        Served as a dynamic Software Engineer with a passion for developing robust and scalable software solutions.
      </>,
      <>
         Held the role of a detail-oriented Database Developer/Administrator experienced in designing and optimizing database systems. Skilled in SQL, NoSQL, and database administration.
      </>,
      <>
         Utilized skills in HTML/CSS, JavaScript, React, and Node.js to deliver custom web solutions for diverse clients,
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.SCG,
  Experiences.Blotocol,
]
