import Header from '../components/header'
import FixedButtons from '../components/fixedButtom'
import Main from '../components/main'
import Timeline from '../components/timeline'

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <FixedButtons />
        <Timeline/>
    </>
  )
}
