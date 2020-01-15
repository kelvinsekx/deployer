import React ,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state={
            title: "",
            summary: "",
            content: "",
            conclusion: "",
            errors: []
        };
        this.handleChange= this.handleChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }
    //handle Change
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e){
        //stop browser's default behaviour of reloading on submit
        e.preventDefault();

        const { history } = this.props
        const post = {
            title: this.state.title,
            summary: this.state.summary,
            content: this.state.content,
            conclusion: this.state.conclusion,
        }
        axios.post('/api/affiliate-marketing/create', post).then(res=>{
            history.push('/affiliate-marketing');
        }).catch(error=>{
            this.setState({
                errors: error.response.data.errors
            })
        })

    }

render() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-10">
                    <div className="card">
                        <div className="card-header"><h2>Create something amazing</h2></div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                <label>Title</label>
                                <input 
                                className="form-control"
                                name="title"
                                value={this.state.name}
                                onChange={this.handleChange}
                                />
                                </div>

                                <div className="form-group">
                                <label>Summary</label>
                                <textarea 
                                className="form-control"
                                name="summary"
                                value={this.state.summary}
                                onChange={this.handleChange}
                                />
                                </div>

                                <div className="form-group">
                                <label>Content</label>
                                    <textarea 
                                    className="form-control summernote"
                                    name="content"
                                    value={this.state.content}
                                    onChange={this.handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                <label>Conclusion</label>
                                    <textarea
                                    className="form-control"
                                    name="conclusion"
                                    value={this.state.conclusion}
                                    onChange={this.handleChange}
                                    />
                                </div>
                                <button type="submit" 
                                className="btn btn-primary">
                                    Create Post
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