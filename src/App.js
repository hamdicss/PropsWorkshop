import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/header/Header';
import Profil from './component/profil/Profil';
function App() {
  const data = {
    fullName: "Belhassen Hamdi",
    photo:'hamdi1.png',
    bio: "ma3raftech",
    profession: "Ingenieur informatique industrielle ,Dev web ",
    lieu :"Tunise , Sfax",
    enis:"Ecole Nationale d'Ingenieur de Sfax",
    job: "GOMYCODE",
    link:"voir les cordonnees",
    cor:" \n hamdi.belhassen@enis.tn  \n 23082853"

  }
  const show=(val)=>{
    alert(`the name is ${val}`)
  }
  const show1=(val)=>{
    alert(`les coordonnes sont : ${val}`)
  }
  
  return (
    <div className="App">
       <Header>
         <img src="hamdi.jpg" alt="" style={{height:250 ,width:"100%" , position: 'absolute',left:"0",top:"0"}}/>
       </Header> 
       <Profil data={data} show={show} show1={show1}/>
    </div>
  );
}

export default App;
