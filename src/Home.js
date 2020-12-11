import Header from './components/Header';
import Story from './components/Story';
import Post from './components/post';
import People from './storyes';
import Posts from './posts';

function Home() {
  
    const Storyes = People.map(props => <Story stImg={props.stImg}
    stSub={props.stSub} />)
 
 
   const Cards = Posts.map(props => <Post 
     username={props.username}
     cUsername={props.cUsername}
      caption={props.caption} 
      pImg={props.pImg}
      avatarImg={props.avatarImg}
      comment={props.comment}
      text={props.text} 
      comment2={props.comment2}
      text2={props.text2}
      small={props.small}
      cImg={props.cImg} />)
 
   return (
   
     <div>
       <Header />
 
       <div className="container">
          {Storyes}
         </div>
           {Cards}
           
     </div>
   
   );
 }
 
 export default Home;
 