import { IconType } from 'react-icons'
import {
  SiDotnet,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiApollographql,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiGhost,
  SiVuedotjs,
  SiDocker,
  SiGooglecloud,
  SiCpanel,
  SiRancher,
  SiGitlab,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiFlutter,
  SiMysql,
  SiMongodb,
  SiRuby,
  SiRedis,
  SiSocketdotio,
  SiMui,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiUnity,
  SiMicrosoft,
  SiElectron,
  SiPlaywright,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'
import { IoLogoPwa } from 'react-icons/io5'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'games'
  | 'desktop'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    // {
    //   name: 'C# - .NET.Core',
    //   icon: SiDotnet,
    // },
    {
      name: 'Node',
      icon: SiNodedotjs,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Graphql (JS, C#)',
      icon: SiGraphql,
    },
    {
      name: 'Ruby',
      icon: SiRuby,
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },
    {
      name: 'Apollo Graphql',
      icon: SiApollographql,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'Playwright',
      icon: SiPlaywright,
    },
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },

    {
      name: 'CPanel',
      icon: SiCpanel,
    },
    {
      name: 'GitlabCICD',
      icon: SiGitlab,
    },
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'ChakraUI',
      icon: BsQuestionSquare,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
    {
      name: 'Flutter',
      icon: SiFlutter,
    },
  ],
  games: [
    {
      name: 'Unity3D',
      icon: SiUnity,
    },
  ],
  desktop: [
    {
      name: 'Windows Forms, WPF',
      icon: SiMicrosoft,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
