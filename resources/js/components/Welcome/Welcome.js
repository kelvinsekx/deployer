import React from "react";
import ReactDOM from "react-dom"

function WelcomePage(){
    return( 
       <div className="content mt-6">
            <div className="title weAq">
                GILAFF built for marketers.
            </div>


            <div className="links">
                <a href="#">Kelvin founded Gilaff</a>
            </div>

            <div>
                <p>Thanks for coming here...it is important to know however that this website is currently on development by kelvinsekx</p>
                <p>The website will be done in two weeks time...before that time you are welcome.</p>
                You can get introduced on <a href="/affiliate-marketing">Affiliate Marketing</a>.
            </div>
      </div>
    )
}
export default WelcomePage;

if(document.getElementById('welcome-page')){
    ReactDOM.render(<WelcomePage />, document.getElementById('welcome-page'))
  
}