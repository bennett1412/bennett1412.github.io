import { Inter } from '@next/font/google'
import Menu from '../components/minorComponents/Menu'
import Experiences from '../components/Experiences'
import Intro from '../components/Intro'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <>
      <Intro />
      <Experiences />
      <Projects />
      <Menu />
    </>
  )
}
