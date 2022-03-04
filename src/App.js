import React from "react";
import UserReduxEx from "./userReduxEx";
import { useSelector, useDispatch } from "react-redux";
import store from "./redux/store";
import {darkTheme,lightTheme} from './redux/action/UserAction'

function App() {

  //use Slector hooks react-redux

  const app = useSelector((state)=>{
    console.log(state);
    return state.appReducer
  })

  console.log(app);

  const [count, setCount] = React.useState(0);
  const [toggle,setToggle] = React.useState(false);

  // const dispatch = store.dispatch;

// use useDispatch same store.dispatch
  const dispatch = useDispatch();
  console.log(toggle)

  React.useEffect(() => {
    if(toggle){
      dispatch(darkTheme())
    }else{
      dispatch(lightTheme())
    }
  },[toggle])

  return (
    <div style={{ backgroundColor : app.bgColor, color : app.color }}>
      <label>
            <input type="checkbox" 
            onChange={(event) => setToggle(event.currentTarget.checked)}
            checked={toggle}
            />
      </label>Change Theme
      <p>{count}</p>
      <h1><center>React + Redux</center></h1>
      <button onClick={()=>dispatch(darkTheme())}>Change Dark Theme</button>
      <button onClick={()=>dispatch(lightTheme())}>Change Light Theme</button>
      <button onClick={()=>setCount(prevState => prevState+1)}>Click</button>
      <UserReduxEx count={count}/>
    </div>
  );
}

//if we using hook or function component use useSelector from react-redux

// const mapStateToProps = (state) => {
//   return {
//     app : state.appReducer
//   }
// }

//if use useSelect to get get data no need connect and mapStateToProps

// export default connect(mapStateToProps)(App);

export default App;
