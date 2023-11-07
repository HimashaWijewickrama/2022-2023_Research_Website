import React from 'react'

function ResearchProblem() {
    return (
        <section className='mt-1' id="Problem">
            <h1 style={{ marginLeft: '8%' }}>Research Problem & Solution</h1>
            <br /><br />
            <div className="container-fluid " id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <h5 style={{ fontWeight: '700' }} className='ms-3'>Research Problem</h5><br/>
                            <h5 style={{ color: '#69b6c9', textAlign: 'justify' }} className='ms-3'><i className="fa-solid fa-person-walking-luggage" style={{color: '#00C3FF'}}></i>  How can tourists effectively plan specific tour destinations based on tourist's interests and preferences?</h5><br/>
                            <h5 style={{ color: '#69b6c9', textAlign: 'justify' }} className='ms-3'><i className="fa-solid fa-person-walking-luggage" style={{color: '#00C3FF'}}></i>  How can be used to identify and recommend food and dining options?</h5><br/>
                            <h5 style={{ color: '#69b6c9', textAlign: 'justify' }} className='ms-3'><i className="fa-solid fa-person-walking-luggage" style={{color: '#00C3FF'}}></i>  How can tourists suggest and identify activities and events that align with their interests?</h5><br/>
                            <h5 style={{ color: '#69b6c9', textAlign: 'justify' }} className='ms-3'><i className="fa-solid fa-person-walking-luggage" style={{color: '#00C3FF'}}></i>  What transportation recommendations and options can be provided to enhance tourists' experiences?</h5><br/>

                        </div>
                    </div>
                    <h5 style={{ fontWeight: '700' }} className='ms-3 mt-3'>Proposed Solution</h5>
                    <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                    A proposed Tour Buddy Mobile application in Sri Lanka aims to recommend Destinations, Food and dinning, Events and activities, and Transportation modes to tourists based on user's preferences and by analyzing 
                    past traveling and user data of the tourists.
                    The app has the potential to give more reliable and good service with 85% accuracy to the tourists who are travelling in Sri Lanka with travel recommendations.
                    Further research is needed to evaluate the app's viability, effectiveness, usability, acceptability, and cost-effectiveness in the Sri Lankan context.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ResearchProblem