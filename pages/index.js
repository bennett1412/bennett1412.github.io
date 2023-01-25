import { Inter } from '@next/font/google'
import CircularMenu from '../components/CircularMenu'
import Experiences from '../components/Experiences'
import Intro from '../components/Intro'
import Projects from '../components/Projects'


export default function Home() {
  return (
    <>
      <Intro />
      <Experiences />
      <Projects />
      <CircularMenu />
    </>
  )
}
