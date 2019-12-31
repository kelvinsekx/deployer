import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "./wia.scss";

export default class Example extends Component {
    render() {
        return (
          <div>

            <div className="title-container">
              <div className="titlebar">
               <h1 className="title">What is affiliate marketing</h1>
              </div>
            </div>

            <div className="container-fluid">
             <div className="row">
               <div className="col-lg-1"></div>
                <article className="col-lg-9 col-12 col-xs-12">
                  <section>
                    <p>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate own marketing effort.</p>
                    <p>Affiliates often use regular advertising methods which include organic search engine optimization, paid search engine marketing (PPC-Pay Per Click),e-mail marketing, content marketing and (in some case) display advertising.</p>
                    <div className="warning"><p>Different from referral marketing</p></div>
                    <p>Affiliate marketing is the process of earning a profit fraction  by promoting other poeple's (company) products. The process involves finding a product you like, promoting it to others and earn a piece of the profit for each sale that you make.</p>
                  </section>
                  <section>
                    <p id="imp">Afiliate marketing is an online business strategy used by sellers too</p>
                    <p>It is an online sales tactic that lets a product owner increase sales by allowing others targeting the same audience -"affiliates"- to earn a commission by recommending the products to others. At the same time, it makes it possible for affiliates to earn money on product sales without creatting products of their own.</p>
                    <p>Medium includes majorly online blogs, social media platforms or website.</p>
                  </section>
                    
                </article>
                <div className="col-lg-2"></div>
              </div>
            </div>

          </div>
        );
    }
}

// if (document.getElementById('sm')) {
//     ReactDOM.render(<Example />, document.getElementById('sm'));
// }
