import React ,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

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
            // console.log(res)
          } )
    }
    componentDidMount(){
        this.getTasks();
    }
render() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <div className="card">
                        <div className="card-header">Create Task</div>
                        <div className="card-body">
                            <hr />
                            {this.state.posts.map(post => (
                    <Link
                      className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                      to={`/affiliate-marketing/${post.slug}`}
                      key={post.id}
                    >
                      {post.title}
                      
                    </Link>
                  ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}