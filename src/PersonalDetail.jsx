export default function PersonalDetail({personalDetail,personalDetailUpdate}) {
    return (
            <section>
                <h1 className='section-title'>Personal Details</h1>
                <div className='box'>
                    <div className='detail-grid'>
                        <div>
                            <label htmlFor="firstname">First name</label>
                            <input type="text" name='firstName' id='firstname' value={personalDetail.firstName} onChange={(e) => personalDetailUpdate(e)}/>
                        </div>
                        <div>
                            <label htmlFor="lastname">Last name</label>
                            <input type="text" name='lastName' id='lastname' value={personalDetail.lastName} onChange={(e) => personalDetailUpdate(e)}/>
                        </div>
                        <div>
                            <label htmlFor="profession">Profession</label>
                            <input type="text" name='profession' id='profession' value={personalDetail.profession} onChange={(e) => personalDetailUpdate(e)}/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' id='email' />
                        </div>
                        <div>
                            <label htmlFor="phone-number">Phone number</label>
                            <input type="number" name='phoneNumber' id='phone-number'value={personalDetail.phoneNumber} onChange={(e) => personalDetailUpdate(e)}/>
                        </div>
                        <div>
                            <label htmlFor="linkedin">Linkedin</label>
                            <input type="text" name='linkedin' id='linkedin' value={personalDetail.linkedin} onChange={(e) => personalDetailUpdate(e)}/>
                        </div>
                        <div>
                            <label htmlFor="location">Location</label>
                            <input type="text" name='location' id='location' value={personalDetail.location} onChange={(e) => personalDetailUpdate(e)}/>
                        </div>
                    </div>
                    <div className='summary'>
                        <label htmlFor="summary">Summary</label>
                        <textarea name="summary" id="summary" value={personalDetail.summary} onChange={(e) => personalDetailUpdate(e)}></textarea>
                    </div>
                </div>
            </section>
    )
}