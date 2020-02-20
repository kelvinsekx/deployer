import React from "react";
import ReactDOM from "react-dom"
import './about.scss'

function AboutPage(){
    return(
        <div className="container-fluid about-page">
            <section className="row mt-5 anchor_statement center">
                <div className="col-lg"></div>
                <div className="col-lg-6 col-12 col-xs-12">
                    <p>
                        Our mission is to continually create <span className="forestvegi">environment</span>, and <span className="blue">sync</span> knowledge and efforts with <span className="red">Love</span> that aims at improving and 
                        redefining digital marketing and her marketers, 
                        with the <span className="text-black bolder">core</span> of <span className="semi-white">open source</span> and the <span className="universe-green">universe</span> at its dept.
                    </p>
                </div>
                <div className="col-lg"></div>
            </section>

            <section className="row mt-5 text-muted">
                <div className="col">
                    <p>
                        Gilaff is supporting an open community where people will learn,share, 
                        and work together to build an ideal digital marketing space.
                    </p>
                </div>
            </section>

            <section className="row mt-4">
             <div className="col">
                 <p>First release December 2019.</p>
             </div>
            </section>
        </div>
    )
}

export default AboutPage;

if(document.getElementById('about-page')){
    ReactDOM.render(<AboutPage />, document.getElementById('about-page'))
  
}