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
        axios.put(`/tasks/${this.props.match.params.id}`,{
            name: this.state.name
        }).then(response => {
            console.log('successfully edited the task');
            this.props.history.push('/');
        });

    }

  componentDidMount(){
    axios.get(`/tasks/${this.props.match.params.id}/edit`).then(res=> {this.setState({
        task: res.data.task,
        name: res.data.task.name,
    });}
    )
  }
render() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
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
                                    Edit
                                </button>
                            </form>
                            <hr />
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}