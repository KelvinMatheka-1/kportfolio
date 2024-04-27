import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaMailBulk,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Mail',
    href: 'mailto:kelvinmatheka321@gmail.com',
    icon: FaMailBulk,

  },
  // {
  //   label: 'Instagram',
  //   href: 'https://www.instagram.com/kllawingco/',
  //   icon: FaInstagram,
  // },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kelvin-m-924668205/',
    icon: FaLinkedin,
  },
  // {
  //   label: 'StackOverflow',
  //   href: 'https://stackoverflow.com/users/3867490/keysl',
  //   icon: FaStackOverflow,
  // },
  // {
  //   label: 'Youtube',
  //   href: 'https://www.youtube.com/channel/UCV-MiUVsKJrKJKKfUK58nhg',
  //   icon: FaYoutube,
  // },
  {
    label: 'Github',
    href: 'https://github.com/KelvinMatheka-1',
    icon: FaGithub,
  },
  // {
  //   label: 'Dev.to',
  //   href: 'https://dev.to/klawingco',
  //   icon: FaDev,
  // },
]
