import React, {Component} from 'react';

class PageFooter extends Component{
    render() {
        return (
            <footer className="page-footer font-small mdb-color pt-4">

                <div className="container text-center text-md-left">

                    <div className="row text-center text-md-left mt-3 pb-3">

                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none"></hr>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                            <p>
                                <a href="#!">MDBootstrap</a>
                            </p>
                            <p>
                                <a href="#!">MDWordPress</a>
                            </p>
                            <p>
                                <a href="#!">BrandFlow</a>
                            </p>
                            <p>
                                <a href="#!">Bootstrap Angular</a>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none"></hr>
                    
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                            <p>
                            <a href="#!">Your Account</a>
                            </p>
                            <p>
                            <a href="#!">Become an Affiliate</a>
                            </p>
                            <p>
                            <a href="#!">Shipping Rates</a>
                            </p>
                            <p>
                            <a href="#!">Help</a>
                            </p>
                        </div>
                        <hr className="w-100 clearfix d-md-none"></hr>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i className="fas fa-home mr-3"></i> Ireland, County Dublin, 001, IRL</p>
                            <p><i className="fas fa-envelope mr-3"></i> example@gmail.com</p>
                            <p><i className="fas fa-phone mr-3"></i> + 353 01234 567 89</p>
                            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>

                    </div>

                    <hr></hr>
                    <div className="row d-flex align-items-center">

                        <div className="col-md-7 col-lg-8">

                            <p className="text-center text-md-left">© 2020 Copyright: Page created by Iosif Dobos. All rights are reserved!
                                Thanks
                            <a href="https://mdbootstrap.com/">
                                <strong> MDBootstrap.com</strong>
                            </a> for the layout example.
                            </p>

                        </div>
                    </div>
                </div>

            </footer>
        );
    }
};
export default PageFooter;