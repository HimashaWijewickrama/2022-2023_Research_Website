import React from 'react'

function Methodology() {
    return (
        <section className='mt-5' id="Methodology">
            <h1 style={{ marginLeft: '8%' }}>Methodology</h1>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-4 pb-lg-0 ">
                            <img className="img-fluid rounded " style={{ height: '900px',width:'400px', marginLeft: '18%' }} src="https://github.com/SachiniRasanga/RP_Project_mobile_app/blob/master/metho.jpg?raw=true" alt="" />
                        </div>
                        <div className="col-lg-5">
                            <p style={{ textAlign: 'justify' }} className='me-5'>
                                The proposed Hela Wedakama system consists of 4 main components. They are;
                                <br /><br /><ol style={{ fontWeight: '600', marginLeft: '5%' }}>
                                    <li>Ayurvedic Plant Identification</li>
                                    <li>Disease Identification and Recommended Doctor</li>
                                    <li>Handwritten Prescription Reading</li>
                                    <li>Hela Nila Wedakama</li>
                                   
                                </ol>
                                The user captures an image for the
                                application and the backend processes the image through the
                                YOLO nas and TensorFlow TFLite models for plant
                                identification using machine learning protocols. The output
                                will include the plant's common name and its geographical
                                location.
                                <br /><br />
                                Disease Identification and Recommended Doctor component was implemented based on machine
                                learning and the Naive Bayes algorithm  was used for
                                this. Algorithms and other imports required by sklearn
                                were entered into the program. Pandas were used to
                                handle the dataset. Python and FastAPI framework were
                                used for the machine learning part and JavaScript language
                                and Express framework were used to implement other APIrelated parts. MongoDB was used as the database.
                                Since this research is related to a mobile application.
                                
                                <br /><br />
                                how to recognize and
                                interpret prescription details from a handwritten prescription
                                in Hela Wedakama. Python, JavaScript, Android, and Deep
                                Learning are the most utilized languages. This component
                                was created using deep learning and the Convolutional
                                Neural Network (CNN) algorithm. TensorFlow, Keras,
                                Pandas, and Sklearn are all widely used libraries. Fast API
                                is utilized by the Python Framework, and Express.js is used
                                by the JavaScript Framework.
                                <br/><br/>
                                Identification and treatment of pressure points on the human body through augmented
                                 reality (AR) technology, with a specific focus on their
                                 applicability to various diseases. The implementation of this
                                 component involved the utilization of Unity AR Foundation
                                 augmented reality software development kit (SDK) and the
                                 Random Forest machine learning algorithm to accurately
                                 classify optimal pressure points for specific diseases
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Methodology