import React from "react";
import { connect } from "react-redux";
import {UpdateName,UpdateID,UpdateYear,UpdateMonth} from "./redux/action/UserAction"
import store from "./redux/store";


function UserReduxEx(props) {
const dispatch = store.dispatch;
  React.useEffect(() => {
    console.log("API Calling..",props)
  })
  return (
    <>
    <div>
      <p>{props.user.userId} - {props.user.name}</p>
      {/* <button onClick={()=>props.changeName("Test")}>Change Name</button>
      <button onClick={()=>props.changeId("3303")}>Change ID</button> */}
      {/* without thunk middleware change static name */}
      {/* <button onClick={()=>dispatch(UpdateName("Test"))}>Change Name</button> */}
      {/* change name using api with thunk and middleware */}
      <button onClick={()=>dispatch(UpdateName())}>Change Name</button>
      <button onClick={()=>dispatch(UpdateID("3303"))}>Change ID</button>
    </div>
    <p>----------------------------------------------------------------------------</p>
    <div>
      <p>{props.emp.year} - {props.emp.month}</p>
      <button onClick={()=>dispatch(UpdateYear("2022"))}>Change Year</button>
      <button onClick={()=>dispatch(UpdateMonth("Feb"))}>Change Month</button>
    </div>

    </>
  );
}

const mapStateToProps = (state) => {
  console.log("reducer",state);
  return{
    user : state.userReducer,
    emp : state.empReducer
  }
}



// const mapDispatchToProps = (dispatch) => {
//   return{
   //   without Action Create Files use this 
// //   changeName:(name)=>{dispatch({type:"CHANGE_NAME", payload : name}) },
// //   changeId:(id)=>{dispatch({type:"CHANGE_ID", payload : id}) }   // without Action File

    // Created Action folder and file then we use simple short code
//     changeName:(name)=>{dispatch(UpdateName(name))},
//     changeId:(id)=>{dispatch(UpdateID(id))}  // Add Action folder and files code
//   }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(UserReduxEx);
export default connect(mapStateToProps)(UserReduxEx);
