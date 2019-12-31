import React ,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            tasks:[]
        };
        this.handleChange= this.handleChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    //handle Change
    handleChange(e){
        this.setState({
            name: e.target.value
        });
        console.log(this.state.name);
    }
    onSubmit(e){
        //stop browser's default behaviour of reloading on submit
        e.preventDefault();
        axios.post('/tasks',{
            name: this.state.name
        }).then(res=>{
            console.log('from handle submit', res);
            //set state
            this.setState({
                tasks: [res.data, ...this.state.tasks]
            });
            //then clear the value of textarea
            this.setState({
                name:''
            });
        })

    }
    //render tasks
    renderTasks(){
        return this.state.tasks.map(task=>(
            <div key={task.id} className="media">
                <div className="media-body mt-1">
                     <div>{task.name}{' '}
                     <span className='text-muted'>
                     by {task.user.name}| {' '}
                     
                     </span>
                     <div className="btn-group float-right">
                            <a href="/home"
                                onClick={() => this.handleDelete(task.id)}
                                className="btn btn-sm btn-warning float-right"
                            >
                                Delete
                            </a>&nbsp;&nbsp;
                            <Link
                                to={`tasks/${task.id}/edit`}
                                className="btn btn-sm btn-success float-right"
                            >
                               Edit
                            </Link>
                         </div>
                        </div>
                </div>
            </div>
        ))
    }
    getTasks(){
        axios.get('/tasks').then(res=> this.setState({
            tasks: [...res.data.tasks]
        }))
    }
    componentDidMount(){
        this.getTasks();
    }

    handleDelete(id){
        //remove from local state
        const { history }= this.props
        const isNotId = task=>task=> task.id !== id;
        const updatedTasks = this.state.tasks.filter(isNotId)
        this.setState({
            tasks: updatedTasks
        })
        //make delete request to the back end
        axios.delete(`/tasks/${id}`)
    }
    handleUpdate(id) {
        axios.put(`/tasks/${id}`).then(response => {
            this.getTasks();
        });
    }
render() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <div className="card">
                        <div className="card-header">Create Task</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Create a new task"
                                        required
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        maxLength="255"
                                    />
                                </div>
                                <button type="submit" 
                                className="btn btn-primary">
                                    Create Task
                                </button>
                            </form>
                            <hr />
                            {this.renderTasks()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}