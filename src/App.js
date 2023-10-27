// import logo from './logo.svg';
// import './App.css';
import Profilecard from "./components/profile_card";
const data = {
  "hod":[{name:"Suganthi",desig:"Head of the dept"}],
  "staff":[{name:"Sathiya",desig:"Staff"},{name:"JJ",desig:"Staff"}],
  "magic":[{name:"Santhosh",desig:"Chairmen"},{name:"Hinduja",desig:"Vice-Chair"}],
  "members":[{name:"ABC",desig:"desg"},{name:"XYZ",desig:"desg"},{name:"XYZ",desig:"desg"},{name:"XYZ",desig:"desg"},{name:"XYZ",desig:"desg"},{name:"XYZ",desig:"desg"},{name:"XYZ",desig:"desg"},{name:"XYZ",desig:"desg"},{name:"XYZ",desig:"desg"}]
}
function App() {

  return (<>
  <div className="ctn" style={{backgroundImage:"url('https://img.clasher.us/images/full/5dce3797d44ba57f29414bad.jpg')"}}>
      {
    data.hod.map((e)=>{
      console.log(e)
    return (<Profilecard d={e} />)
    })
    }
    </div>
   <div className="ctn" style={{backgroundImage:"url('https://images6.alphacoders.com/129/1297665.jpg')"}}>
   {
    data.staff.map((e)=>{
      console.log(e)
    return (<Profilecard d={e} />)
    })
    }
    
    </div>
    <div className="ctn" style={{backgroundImage:"url('https://wallpapers.com/images/featured-full/clash-of-clans-f88iyeweabo3r6kz.jpg')"}}>
   {
    data.magic.map((e)=>{
      console.log(e)
    return (<Profilecard d={e} />)
    })
    }
    
    </div>
    <div className="ctn"  style={{backgroundImage:"url('https://images.alphacoders.com/847/847781.jpg')"}}>
   {
    data.members.map((e)=>{
      console.log(e)
    return (<Profilecard d={e} />)
    })
    }
    
    </div>
  </>
  );
}

export default App;
