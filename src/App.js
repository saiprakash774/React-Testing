import React ,{Component}from 'react';
import Header from './components/HeaderFn';
import Headline from './components/HeadlineCls';
import SharedButton from './components/button';
import ListItem from './components/ListItem';
import {connect} from 'react-redux';
import {fetchPosts} from './actions';
import './app.scss';

/*

This const is not used within our app. Although we are passing it to Headline Component.
It is only here as an example of testing Proptypes

*/
const tempArr=[{
  fName:"Sai",
  lName:"Sasubilli",
  email:"sai.sasubilli@gmail.com",
  age:22,
  onlineStatus:true
}]

class App extends Component {

constructor(props){
  super(props);
  this.fetch=this.fetch.bind(this);
}
  fetch(){
    this.props.fetchPosts();
  }
  render(){
    const {posts}=this.props;
    const configButton={
      buttonText:'Get posts',
      emitEvent:this.fetch
    }
  
  return (
    <div className="App">
     <Header/>
     <section className="main">
    <Headline header="Posts" desc="Click the button to render Posts" tempArr={tempArr}/>
    <SharedButton {...configButton}/>
    {posts.length>0 && 
    <div>
      {posts.map((post,index)=>{
        
          const {title,body}=post;
          const configListItem={
            title,
            desc:body
          };
          return(
          <ListItem key={index}{...configListItem}/>
        )
      })}
      </div>}
     </section>
    </div>
  );
}
}

const mapStateToProps=state=>{
  return{
    posts:state.posts
  }
}
export default connect(mapStateToProps,{fetchPosts})(App);
