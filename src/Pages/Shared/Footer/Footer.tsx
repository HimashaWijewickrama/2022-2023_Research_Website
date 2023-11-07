import './Footer.css';

const Footer = () => {

    return (
        <div className='myfootecss'>
            <div className=" mt-5">
                <div className="card ">
                    <div className="row mb-4">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="footer-text pull-left">
                                <div className="d-flex">
                                    <h2 style={{ color: "#00C3FF" }}> <img style={{ width: "40px", height: "40px", marginRight: "10px" }}
                                        src="" />
                                        TOUR BUDDY</h2>
                                </div>
                                <p className="card-text" style={{textAlign: 'justify'}}>
                                    The main objective of the proposed Tour Buddy
                                    system is to enhance the tourist experience in Sri Lanka through a
                                    data-driven recommendation web application. Using machine learning,
                                    the application will provide personalized recommendations for itinerary planning, activities,
                                    transportation, and dining to cater to tourists' individual preferences and interests.
                                </p>
                                <div className="social mt-2 mb-3">
                                    <i className="fa fa-facebook-official fa-lg" onClick={() => { window.open("https://www.facebook.com", "_blank") }} ></i>
                                    <i className="fa fa-instagram fa-lg" onClick={() => { window.open("https://www.instagram.com", "_blank") }}></i>
                                    <i className="fa fa-twitter fa-lg" onClick={() => { window.open("https://www.twitter.com", "_blank") }}></i>
                                    <i className="fa fa-linkedin-square fa-lg" onClick={() => { window.open("https://www.linkedin.com", "_blank") }}></i>
                                    <i className="fa fa-github" onClick={() => { window.open("https://github.com", "_blank") }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2"></div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Team Members</h5>
                            <ul>
                                <li>Lakindu Nethmin</li>
                                <li>Sudeepa Saranga</li>
                                <li>Tharindu Dilshan</li>
                                <li>Himasha Wijewickrama</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Downloads</h5>
                            <ul className="card-text">
                                <li>Project Proposal</li>
                                <li>Project Charter</li>
                                <li>Log Book</li>
                                <li>Final Report</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Contact Us</h5>
                            <ul className="card-text">
                                <li>SLIIT Malabe Campus,</li>
                                <li>New Kandy Rd,</li>
                                <li>Malabe</li>
                                <li>Sri Lanka</li>
                                <li>+94 11 754 4801</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider mb-4"> </div>
                    <div className="row" style={{ fontSize: "12px", textAlign: "center" }}>
                        <div>
                            &copy; 2023 TourBuddy Team | All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;