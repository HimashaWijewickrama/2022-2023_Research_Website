import React from 'react'

function ResearchProblem() {
    return (
        <section className='mt-1' id="Problem">
            <h1 style={{ marginLeft: '8%' }}>Research Problem & Solution</h1>
            <br /><br />
            <div className="container-fluid " id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h5 style={{ fontWeight: '700' }} className='ms-3'>Proposed Problem</h5>
                            <h5 style={{ fontWeight: '700', color: 'green' }} className='ms-3'>What are the current challenges faced by Patients and Native Physicians  in Traditional Healthcare?</h5>
                            <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                            current trends people used to western quick medical solutions because of they can trust only that in modern society. But those are momentary. Side effects of the western medical solutions uncountable.​

                                <br /><br />
                                How can technology help on traditional Sri Lankan medicine (Hela Wedakama) to be socialize among people?​​

                            </p>
                        </div>
                        <div className="col-lg-6 pb-4 pb-lg-0">
                            <iframe style={{ marginLeft: '5%' }} width="560" height="315" src="https://www.youtube.com/embed/fLi4y77BG_U?si=rQdYwC7dsPuRfKLx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>
                    </div>
                    <h5 style={{ fontWeight: '700' }} className='ms-3 mt-3'>Proposed Solution</h5>
                    <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                    Ayusha application,
                     we empower people to familiarize to traditional medicine(Hela Wedakama) which they abandon due to unresponsiveness. By combine technology to Hela Wedakama for closing that treasures medical patterns to modern society for day today medical solution as their first mindset.​
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ResearchProblem