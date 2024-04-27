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
    subDetail: 'A money transfer startup company',
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
    name: 'Blotocol',
    longName: 'Blotocol Philippines',
    subDetail: 'formerly IVP Global Inc.',
    url: 'https://blotocol.com/',
    position: 'Senior Software Engineer',
    duration: 'Nov 2016 - Feb 2020',
    logo: {
      light: '/worked_at_logos/ivp/blotocol_logo-dark.png',
      dark: '/worked_at_logos/ivp/blotocol-logo-white.png',
    },
    roles: [
      <>
        Developed a Twitter Raffle Campaign / Contest Bot called Camps with
        statistics similar to Facebook Ads.
      </>,
      <>
        In 2019 got promoted as Senior Software Engineer and worked with Cryto
        Exchange, Smart Contracts and other APIs using several techs such as
        NodeJS, .NET Core and React.
      </>,
      <>
        Create highly scalable Japanese e-commerce sites. Most notable clients
        were TV Tokyo, Layla EC using .NET.
      </>,
      <>
        Hired at 2016, Undergone Japanese language training first. Shortly
        after, worked with in-house .NET MVC Framework called ERS.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.SCG,
  Experiences.Blotocol,
]
