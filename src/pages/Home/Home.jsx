import { useLocation } from "react-router"; 
import Header from '../../components/Head/Header'
import Posts from "../../components/posts/Posts";
import "./Home.css"
export default function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    <Header/>
    <div className='Home'>
     <Posts/>
      </div>
      </>
  )
}
