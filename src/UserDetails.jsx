import './styles/UserDetails.css'

export default function UserDetails() {
    return (
        <div className='container'>
            <section>
                <h1 className='section-title'>Pick a layout</h1>
                <div className='layoutList'>
                    <div className='layoutBox'></div>
                    <div className='layoutBox'></div>
                    <div className='layoutBox'></div>
                </div>
            </section>
            <section>
                <h1 className='section-title'>Personal Details</h1>
                <div className='box'>
                    <div className='detail-grid'>
                        <div>
                            <label htmlFor="firstname">First name</label>
                            <input type="text" id='firstname'/>
                        </div>
                        <div>
                            <label htmlFor="lastname">Last name</label>
                            <input type="text" id='lastname' />
                        </div>
                        <div>
                            <label htmlFor="profession">Profession</label>
                            <input type="text" id='profession' />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' />
                        </div>
                        <div>
                            <label htmlFor="phone-number">Phone number</label>
                            <input type="text" id='phone-number'/>
                        </div>
                        <div>
                            <label htmlFor="linkedin">Linkedin</label>
                            <input type="text" id='linkedin'/>
                        </div>
                        <div>
                            <label htmlFor="location">Location</label>
                            <input type="text" id='location'/>
                        </div>
                    </div>
                    <div className='summary'>
                        <label htmlFor="summary">Summary</label>
                        <textarea name="" id="summary"></textarea>
                    </div>
                </div>
            </section>
        </div>
    )
}