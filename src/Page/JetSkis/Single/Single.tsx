import axios from "axios"
import { useEffect} from "react"
import { connect } from "react-redux"
import { useParams } from "react-router"
const url = `https://book-db-shakhmurad.vercel.app/JetSki/`
function SingleJetSki({JetSki , dispatch}:any) {

    const {id} = useParams()

    useEffect(()=>{
        axios.get(url + id).then(({data})=>{
            console.log(data);
          dispatch({
            type:'JetSki',
            payload: data
          })
          
        })
      } , [])

  return (
    <>
        <div>Single</div>
         <h1>{id}</h1>
    </>
  )
}

const mapState = (state:any) => state 

export default connect(mapState)(SingleJetSki)