import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
                  <section className="mt-2">
                    <p>Affiliate marketing is a performance-based marketing effort and strategy. It is a strategy organized by producers or sellers to increase their market share or sales. This strategy involves putting a product for affiliates (this can be in one of the popular affiliate marketing platform or through a personal website), and providing a profit share between herself and the affiliate marketers.</p>
                    <p>Affiliates often use regular advertising methods which include organic search engine optimization, paid search engine marketing (PPC-Pay Per Click),e-mail marketing, content marketing and (in some case) display advertising.</p>
                    <div className="warning"><p>Different from referral marketing</p></div>
                    <p>Affiliate marketing is the process of earning a profit fraction  by promoting other poeple's (company) products. The process involves finding a product you like, promoting it to others and earn a piece of the profit for each sale that you make.</p>
                  </section>
                  <section className="mt-2">
                    <p id="imp">Afiliate marketing is an online business strategy used by sellers too</p>
                    <p> However, because of the financial success attained through affiliating over the decade, the emphasis has moved beyond the initial intention of affiliate marketing (which is a sales-boost strategy) to solely a money-making strategy.</p>
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

if (document.getElementById('sm')) {
    ReactDOM.render(<Example />, document.getElementById('sm'));
}
