import React from 'react';

function MeetOurTeam() {
    const ourTeamPanl = [
        {
            name: 'Mr. Supunya Swarnakantha',
            position: 'Supervisor',
            image: 'https://static.sliit.lk/profile/ravis-1603858905.jpeg',
            department: 'Faculty of Computing | Information Technology',
            scholarProfile: 'https://scholar.google.com/citations?hl=en&user=W_x-lmkAAAAJ&view_op=list_works&gmla=AJsN-F4KpSSQQcTavhwENh8Xr53quV2fgF3k6kM138Yw35w1Ej2Ly4TTMVDc7wY8nh20ZSm4eCIMG2JzWx-Q39Nm2uZBIcKYEw',
            emailAccount: 'ravi.s@sliit.lk'
        },
        {
            name: 'Dr. Samantha Rajapaksha',
            position: 'Co_Supervisor',
            image: 'https://www.sliit.lk/profile/uploads/scan_image_1505800097-Mr__Samantha.jpg',
            department: 'Faculty of Computing | Information Technology',
            scholarProfile: 'https://scholar.google.com/citations?hl=en&user=t1krVdkAAAAJ',
            emailAccount: 'samantha.r@sliit.lk'
        }
    ]

    const ourTeamMem = [
        {
            name: 'Nethmin N.A.L.',
            position: 'Group Leader',
            image: 'https://github.com/HimashaWijewickrama/Tour_Buddy_Web/blob/main/mem1.jpg?raw=true',
            department: 'Faculty of Computing | Information Technology',
            emailAccount: 'IT20148690@my.sliit.lk'
        },
        {
            name: 'Sudeepa Saranga L.G.',
            position: 'Group Member',
            image: 'https://github.com/HimashaWijewickrama/Tour_Buddy_Web/blob/main/mem2.jpg?raw=true',
            department: 'Faculty of Computing | Information Technology',
            emailAccount: 'IT20155216@my.sliit.lk'
        },

        {
            name: 'Tharindu Dilshan A.D.',
            position: 'Group Member',
            image: 'https://github.com/HimashaWijewickrama/Tour_Buddy_Web/blob/main/mem3.jpg?raw=true',
            department: 'Faculty of Computing | Information Technology',
            emailAccount: 'it20163136@my.sliit.lk'
        },
        {
            name: 'Wijewickrama H.E.',
            position: 'Group Member',
            image: 'https://github.com/HimashaWijewickrama/Tour_Buddy_Web/blob/main/mem4.jpg?raw=true',
            department: 'Faculty of Computing | Information Technology',
            emailAccount: 'it20173586@my.sliit.lk'
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
                                    <img src={ourTeamm?.image} alt='' style={{width: '100%', height: '100%'}}/>
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
                                    <div className="center-icon">
                                        <a href={ourTeamm?.scholarProfile} style={{ fontSize: '14px', color: '#00c3ff' }}>
                                            <i className="fab fa-google me-1 mb-5"></i> G-Scholar
                                        </a>
                                        <a href={`mailto:${ourTeamm?.emailAccount}`} style={{ fontSize: '14px', color: '#00c3ff' }}>
                                            <i className="fas fa-envelope-open-text me-1 mb-5"></i> E-Mail
                                        </a>
                                    </div>

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
                                    <img src={ourTeamm?.image} alt='' style={{height: '100%', width: '100%'}}/>
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3"> {ourTeamm?.name}</h4>
                                    <img className='mb-4' src={`https://img.shields.io/badge/-${ourTeamm?.position}-807e7e`} />
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
                                    <div className="center-icon">
                                        <a href={`mailto:${ourTeamm?.emailAccount}`} style={{ fontSize: '14px', color: '#00c3ff' }}>
                                            <i className="fas fa-envelope-open-text me-1 mb-5"></i> E-Mail
                                        </a>
                                    </div>

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