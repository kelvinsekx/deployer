import React from "react";
import ReactDOM from "react-dom"

function Edit (){
    return (<div className="container-fluid about-page">
    <div className="row">
    <div className="col-lg-2"></div>
        <div className="col-lg-8">
            <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control"/>  
            </div>

            <div className="form-group">
            <label>Summary</label>
            <textarea className="form-control"></textarea>  
            </div>

            <div>
                 <label className="display-4">Content</label>
                <textarea className="description form-control" name="description"></textarea>
            </div>
            <div>
                <button className="btn btn-primary mt-2">Submit</button>
            </div>

            <div className="form-group">
            <label>Conclusion</label>
            <textarea className="form-control"></textarea>  
            </div>
        </div>
        <div className="col-lg-2"></div>
    </div>
    </div>) 
}

export default Edit;

if (document.getElementById('edit')) {
    ReactDOM.render(<Edit />, document.getElementById('edit'));
}