import React from 'react';
import ReactRouter from './ReactRouter';

//import Accordian from './projects/Accordian/Accordian';
//import GoogleKeep from './projects/GoogleKeep_App/Google_Keep';

//name of component should always start with CAPITAL letter!!!
// import Statewise from './projects/liveCovidTracker/components/stateWiseData/statewise';
// const App = () => {
//     const [num, setNum] = useState(0);
//     useEffect(()=>{
//         document.title = `you clicked ${num} times`;
//     },[]);
//     //by passing empty array Effect works only after first render 
//     return (
//         <>
//             <h1>{num}</h1>
//             <button onClick={()=>{
//                 setNum(num+1);
//             }}> click me</button>
//         </>
//     );
// }

const App =()=>{
    return(
        <>
        {/* <Statewise/> */}
        <ReactRouter/>
        </>
    )
}
export default App;
