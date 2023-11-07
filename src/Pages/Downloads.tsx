import React from 'react'

function Downloads() {

    const documents = [
        {
            name: 'Topic Assessment',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://docs.google.com/document/d/1O-DsZzEAI_1hPKWqkX02iiMybEHiRybRwtI9yIfSA7I/edit?usp=sharing'
            
        },
        {
            name: 'Project Charter',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: ''
        },
        {
            name: 'Project Proposal',
            submittionDate: '2023-09-28',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1a9zXUNOSjF4laV24ZxoaEGvQWP5E1noj?usp=sharing'
        },
        {
            name: 'Status Documents 1',
            submittionDate: '2023-09-28',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1iTT2X9JAhwSVLgwQM4eSe2JMzuyjJYM-?usp=sharing'
        },
        {
            name: 'Status Documents 2',
            submittionDate: '2023-09-28',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1iDljgkNjBRUtsb3ryMoMuWLge0oHu3qF?usp=sharing'
            
        },
        {
            name: 'Research Paper',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/13lvpqYPE75cpPi7s54wvqqaZ4cT2l0QD?usp=sharing'
        },
        {
            name: 'Final Report',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1tW6nvG9Cknj6t1efB-8AEOpxzvWQGYuY?usp=sharing'
        },
        {
            name: 'Poster',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1vyJdrYiTR53peIHOpg5_bEplKt2jnVO3?usp=sharing'
        }
    ]

    const presentations = [
        {
            name: 'Project Proposal',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1bkaupDZzTBardqJLCfNgkH-56srGwxSA?usp=sharing'
        },
        {
            name: 'Progress Presentation 1',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1nP-BuBkrKk0VqBhzrrT-i3ecLC5qB8J4?usp=sharing'
        },
        {
            name: 'Progress Presentation II',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1txiBiriZy9p_TefyPn4Rrf6G0yZA1Q7u?usp=sharing'
        },
        {
            name: 'Final Presentation',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/151UkshjfW9Fspak03tApS5HQwbM3IcOK?usp=sharing'
        }
    ]

    return (
        <section className='mt-5 meetteam' style={{ backgroundColor: '#e4f8ff', padding: '30px' }} id='Documents'>
            <h1 style={{ marginLeft: '8%' }} className='mb-5'>Downloads</h1>

            <h4 style={{ marginLeft: '10%' }}>Documents</h4>
            <p style={{ marginLeft: '10%' }}>Please find all documents related to this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {documents.map((document) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {document?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {document?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {document?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: '#00C3FF', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${document?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h4 style={{ marginLeft: '10%' }} id='Presentations'>Presentations</h4>
            <p style={{ marginLeft: '10%' }}>Please find all presentations related this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {presentations.map((presentation) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {presentation?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {presentation?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {presentation?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: '#00C3FF', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${presentation?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Downloads