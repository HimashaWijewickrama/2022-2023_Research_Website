import React from 'react'

function Methodology() {
    return (
        <section className='mt-5' id="Methodology">
            <h1 style={{ marginLeft: '8%' }}>Methodology</h1>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-4 pb-lg-0 ">
                            <img className="img-fluid rounded " style={{ height: '900px',width:'550px', marginLeft: '16%' }} src="https://github.com/HimashaWijewickrama/Tour_Buddy_Web/blob/main/merged_sod.jpg?raw=true" alt="" />
                        </div>
                        <div className="col-lg-5">
                            <p style={{ textAlign: 'justify' }} className='me-5'>
                                The proposed Tour Buddy system consists of 4 main components. They are;
                                <br /><br /><ol style={{ fontWeight: '600', marginLeft: '5%' }}>
                                    <li>Develop Tour Specific Destination</li>
                                    <li>Develop Food and Dining Recommendations and Dish Identification</li>
                                    <li>Activity & Events Recommendations & Identification</li>
                                    <li>Develop Transportation Recommendations</li>
                                   
                                </ol>
                                Data collection for this research was done in collaboration with the Sri 
                                Lanka Tourism Department. We have read the paper containing the disordered 
                                data with the information received and processed the information as necessary 
                                for us to do this research. The data collected from this department is the 
                                basis for training and testing the Tour Buddy app's deep learning algorithms.
                                <br /><br />
                                Used React Native to develop an intuitive and user-friendly interface. 
                                The design emphasizes clarity and usability, ensuring that Tourists can 
                                easily engage with the system. Used React Native's cross-platform 
                                features to create displays that provide a consistent and engaging experience on 
                                both Android and iOS devices. The user interface also contains the necessary 
                                technologies to clearly present the relevant recommended event. The app's emphasis 
                                on user-centric design seeks to improve accessibility and ensure that it satisfies 
                                the demands of its broad user base.The application's emphasis on user-centric design 
                                strives to improve accessibility and guarantee that it satisfies the demands of its 
                                broad user base.
                                
                                <br /><br />
                                Convolutional Neural Network (CNN) is a type of deep learning neural network that is 
                                used to process image data. In food identification, CNN-based image processing models 
                                used to analyze food and dish images to identify key features and characteristics. 
                                The models trained on a large dataset of food and dish images and are designed 
                                to recognize the unique visual characteristics of different types of food and dishes, 
                                which are then used by the recommendation engine to make personalized food 
                                recommendations.
                                <br/><br/>
                                Machine learning is a type of artificial intelligence that enables a system to 
                                learn from data rather than being explicitly programmed. In the context of your component,
                                machine learning is used to analyze large sets of food and dish images to recognize patterns 
                                and make personalized food recommendations based on the user's dietary restrictions, preferences, 
                                and other relevant factors. The most popular machine learning regressions, Random forest regression 
                                and XGBRegressor used to train the models of Destination and Transportation components with a 
                                high accuracy. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Methodology