import { Footer, Header } from "../components";

const Home:React.FC = () => {
  return(
    <div className="w-screen h-screen flex flex-col">
      <Header/>
      {/* <h2></h2> */}
      <Footer/>
    </div>
  )
}

export default Home;