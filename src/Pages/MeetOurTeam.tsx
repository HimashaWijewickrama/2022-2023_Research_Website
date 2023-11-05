import React from 'react'

function MeetOurTeam() {
    const ourTeamPanl = [
        {
            name: 'Mr. Udara Samaratunga',
            position: 'Supervisor',
            image: 'https://www.sliit.lk/profile/uploads/scan_image_1486723808-profile2.JPG',
            department: 'Computer Science & Software Engineering'
        },
        {
            name: 'Mr. Didula   Chamara',
            position: 'Co_Supervisor',
            image: 'https://static.sliit.lk/profile/didulac-1653890802.jpg',
            department: 'Computer Science & Software Engineering'
        }
    ]

    const ourTeamMem = [
        {
            name: 'kumara V.G.A.P',
            position: 'Group Leader',
            image: 'https://github.com/SachiniRasanga/RP_Project_mobile_app/blob/master/ashan.png?raw=true',
            department: 'Computer Science & Software Engineering'
        },
        {
            name: 'Tharuka Gayashan F.',
            position: 'Group Member',
            image: 'https://github.com/SLIIT-Project-ORG/Ayusha_Helawedakama_Online_Platform/blob/master/gayashan.jpg?raw=true',
            department: 'Computer Science & Software Engineering'
        },
        
        {
            name: 'Nethu Nipuna M.',
            position: 'Group Member',
            image: 'https://media.licdn.com/dms/image/D5603AQHksg4WhzJcqg/profile-displayphoto-shrink_400_400/0/1662279130307?e=1703721600&v=beta&t=KxKhG05EwHOBPsdb3lE7OgDRkoAkw36cXRHgGY1f5wQ',
            department: 'Computer Science & Software Engineering'
        },
        {
            name: 'Abeywardhanage S.R.D',
            position: 'Group Member',
            image: 'https://github.com/SLIIT-Project-ORG/Ayusha_Helawedakama_Online_Platform/blob/master/sachini.jpg?raw=true',
            department: 'Computer Science & Software Engineering'
        },
    ]

    return (
        <section className='mt-5 meetteam' id='aboutus'>
            <h1 style={{ marginLeft: '8%' }}>Meet Our Team !</h1>
            <div className="container mt-5">
                <div className="row">
                    {ourTeamPanl.map((ourTeamm) => (
                        <div className="col-xs-12 col-sm-3">
                            <div className="card d-flex flex-column h-100">
                                <a className="img-card">
                                    <img src={ourTeamm?.image} alt='' />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3"> {ourTeamm?.name}</h4>
                                    <img className='mb-2' src={`https://img.shields.io/badge/-${ourTeamm?.position}-807e7e`} />
                                    <p style={{ fontSize: '14px' }}>
                                        Sri Lanka Institute of Information Technology
                                    </p>
                                    <p style={{ fontSize: '14px' }}>
                                        <span style={{ fontWeight: '700' }}>Department</span>
                                        <br />
                                        {ourTeamm?.department}
                                    </p>
                                </div>
                                <div className="card-read-more">
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block ms-2">
                                        <i className="fab fa-google me-1 mb-5"></i> G-Scholar
                                    </a>
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block">
                                        <i className="fas fa-envelope-open-text me-1 mt-5"></i> E-Mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-5">
                    {ourTeamMem.map((ourTeamm) => (
                        <div className="col-xs-12 col-sm-3">
                            <div className="card d-flex flex-column h-100">
                                <a className="img-card">
                                    <img src={ourTeamm?.image} alt='' />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3"> {ourTeamm?.name}</h4>
                                    <img className='mb-2' src={`https://img.shields.io/badge/-${ourTeamm?.position}-807e7e`} />
                                    <p style={{ fontSize: '14px' }}>
                                        Sri Lanka Institute of Information Technology
                                    </p>
                                    <p style={{ fontSize: '14px' }}>
                                        <span style={{ fontWeight: '700' }}>Department</span>
                                        <br />
                                        {ourTeamm?.department}
                                    </p>
                                </div>
                                <div className="card-read-more">
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block ms-2">
                                        <i className="fab fa-google me-1 mb-5"></i> G-Scholar
                                    </a>
                                    <a href="/" style={{ fontSize: '14px', color: 'green'}} className="btn btn-link btn-block">
                                        <i className="fas fa-envelope-open-text me-1 mt-5" ></i> E-Mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MeetOurTeam