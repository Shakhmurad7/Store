
import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";

const url = 'https://book-db-shakhmurad.vercel.app/Post-Store';

interface SearchProps {
  user: any;
  dispatch: React.Dispatch<any>;
}

type cartData ={
  item:string,
  id:number,
  title:string,
  img:string,


}

function Search({ user, dispatch }: SearchProps) {
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      dispatch({
        type: 'data',
        payload: data,
      });
      console.log(data);
    });
  }, []);

  return (
    <div className="search-container">
      <div className="secrch-input">
        <input type="text" />
        <button>Искать</button>
      </div>

      <div className="cart-container">
        <div className="cart-block">
          {
            user.slice(0,3).map(({item , title , img , id }:cartData)=>(
              <div key={id} className="cart-box">
                  <div className="cart-text">
                      <h2>{item}</h2>
                      <p>{title}</p>
                  </div>
                  <img src={`./img/${img}.png`} />
              </div>
              )
            )
          }
          </div>
        <div className="cart-block">
          {
            user.slice(3,6).map(({item , title , img , id }:cartData)=>(
              <div key={id} className="cart-box">
                  <div className="cart-text">
                      <h2>{item}</h2>
                      <p>{title}</p>
                  </div>
                  <img src={`./img/${img}.png`} />
              </div>
              )
            )
          }
          </div>
      </div>
    </div>
  );
}

const mapState =(state:any)=> ({
  user: state.user
})
const connector = connect(mapState) 
export default connector(Search);



