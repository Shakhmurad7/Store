import { Link } from "react-router-dom"
import style from "./index.module.scss"
import PageContainer from "../../Components/PageContainer"

const Contact =()=>{
    return(
        <>
        <PageContainer>
            <div className={style["content-top-text"]}>
              <h2>Contact Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>

          <div className={style["Big-content-container"]}>

            <div className={style["container-content"]}>
                <div className={style["content-row"]}>
                    <div className={style["content-input"]}>
                      <h3>Name</h3>
                      <input type="text" placeholder="Enter your name"/>
                    </div>
                    <div className={style["content-input"]}>
                      <h3>Email</h3>
                      <input type="email" placeholder="Enter your Emial"/>
                    </div>
                </div>
                <div className={style["content-row"]}>
                    <div className={style["content-input"]}>
                      <h3>Subject</h3>
                      <input type="text" placeholder="Provide context"/>
                    </div>
                    <div className={style["content-input"]}>
                      <h3>Subject</h3>
                      <input type="text" placeholder="Select Subject"/>
                    </div>
                </div>
                <div className={style["textarea"]}>
                    <h3>Subject</h3>
                     <textarea name="" id="" cols={10} rows={7} placeholder="Write your question here"></textarea>
                </div>
                <Link to="#">Send Messege</Link>
            </div>
          </div>
        </PageContainer>
        </>
    )
}
export default Contact