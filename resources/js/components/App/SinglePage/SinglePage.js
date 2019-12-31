import React ,{Component} from 'react';
import axios from 'axios';
import './singlepage.scss';

export default class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[]
        };
        
    }
    getTasks(){
        axios.get('/api/affiliate-marketing').then(res=>{
            this.setState({
              posts: res.data.posts
            })
            console.log(res)
          } )
    }
    componentDidMount(){
        this.getTasks();
    }
render() {
    return (
        <div className="">
            
        {this.state.posts.map(post => (
        <div key={post.id}>
            <div className="title-container">
              <div className="titlebar">
               <h1 className="title">{post.title}</h1>
              </div>
            </div>

            <div className="container-fluid">
             <div className="row">
               <div className="col-lg-1"></div>
                <article className="col-lg-9 col-12 col-xs-12">
                <div>
                    <div>
                    <label>Summary</label>
                     <p>{post.summary}</p> 
                    </div> 
                </div>

                <div>
                    <div>
                        {post.content} 
                    </div> 
                </div>
                <div>
                    <div>
                      <label>Conclusion</label>
                      <p> {post.conclusion}</p>     
                    </div>
                </div>
                </article>
                <div className="col-lg-2"></div>
              </div>
            </div>
        </div>
        ))}
        </div>
    );
}
}