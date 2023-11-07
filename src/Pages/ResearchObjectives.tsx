import React from 'react'

function ResearchObjectives() {
    return (
        <section className='mt-5 objectives ' id="Objectives">
            <h1 style={{ marginLeft: '8%' }}>Research Objectives</h1>
            <div className="mt-5" style={{ marginLeft: '15%', marginRight: '15%' }}>
                <div className="container mt-5">

                    <div className="row align-items-center  d-flex">
                        <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">1</div>
                        </div>
                        <div className="col-6">
                            <h5> Develop Tour Specific Destination</h5>
                            <p style={{ textAlign: 'justify' }}>Analyse tourist data on popular destinations and provide personalized recommendation, Collect and curate a dataset of destinations, 
                            process and develop recommendation system, Providing personalized multimedia content by using audio, video or descriptions based on specific destination,
                            Promote responsible tourism by providing cultural and ethical practices to follow based on specific destination, Insert local insights by locals to offer tourists a more
                            authentic and unique experience about lesser known destinations​​</p>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-end  d-flex">
                        <div className="col-6 text-right">
                            <h5> Food & Dinning Recommendations & Dish Identification</h5>
                            <p style={{ textAlign: 'justify' }}>Develop an image recognition model that can accurately identify dishes​,
                            Collect a dataset of food images and associated metadata & etc.​, Develop a recommendation system​,
                            Use NLP techniques to extract relevant information from user, Integrate the dish identification and 
                            recommendation system with a mobile app​</p>
                        </div>
                        <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">2</div>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner right-bottom"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner top-left"></div>
                        </div>
                    </div>

                    <div className="row align-items-center  d-flex">
                        <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">3</div>
                        </div>
                        <div className="col-6">
                            <h5>Activity & Event Recommendations & Identification</h5>
                            <p style={{ textAlign: 'justify' }}>
                            Suggestions for activities, events, festivals, and other activities in Sri Lanka,
                            Tourists' preferences and opinions will be used to rank activities and events,
                            The web application provides information to help tourists plan their trips,
                            Tourists can book activities and events through agents in Sri Lanka,
                            Travelers can use image processing to identify activities and events.​
                            </p>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-end  d-flex">
                        <div className="col-6 text-right">
                            <h5>Develop Transportation Recommendation</h5>
                            <p style={{ textAlign: 'justify' }}>
                            Recommend the most suitable transportation mode for tourists based on their preferences and the current state,
                            Optimize the route for tourists based on factors such as time, cost, and convenience​,
                            Estimate the fare for different transportation modes accurately​,
                            Provide a driver rating system for tourists to choose the most reliable and safe drivers​,
                            Provide a driver rating system for tourists to choose the most reliable and safe drivers​
                            </p>
                        </div>
                        <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">4</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ResearchObjectives