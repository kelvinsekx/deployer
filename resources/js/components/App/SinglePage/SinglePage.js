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
    
    componentDidMount(){
        // this.getTasks();
        
            const slug = this.props.match.params.slug
            axios.get(`/api/affiliate-marketing/${slug}`).then(res=>{
                this.setState({
                  posts: res.data.posts
                })
                console.log(res)
              } )
        
    }
render() {
    const{ posts }= this.state
    return (
        
        <div className="">
            
        <div key={posts.id}>
            <div className="title-container">
              <div className="titlebar">
               <h1 className="title">{posts.title}</h1>
              </div>
            </div>

            <div className="container-fluid">
             <div className="row">
               <div className="col-lg-1"></div>
                <article className="col-lg-9 col-12 col-xs-12">
                <div>
                    <div>
                    <label>Summary</label>
                     <p>{posts.summary}</p> 
                    </div> 
                </div>

                <div>
                    <div>
                        {posts.content} 
                    </div> 
                </div>
                <div>
                    <div>
                      <label>Conclusion</label>
                      <p> {posts.conclusion}</p>     
                    </div>
                </div>
                </article>
                <div className="col-lg-2"></div>
              </div>
            </div>
        </div>
    
        </div>
    );
}
}