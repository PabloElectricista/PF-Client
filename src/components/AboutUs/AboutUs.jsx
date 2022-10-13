/* eslint-disable react/jsx-no-target-blank */
import { we } from './profiles'

function AboutUs() {

    return <div
        className="container bg-white mt-3 p-3"
        style={{ width: "90vw", height: "100vh" }}
    >
        <div className='text-center mt-3'>
            <h1 className="display-4 fst-italic">This is our staff</h1>
            <p className="lead my-3 fw-bold">We meet us in <a href='https://www.soyhenry.com' target="_blank" className='text-black'>soyhenry.com</a> to make this, which is our final project.</p>
            <p className="lead my-3 fw-bold">With creativity, dedication, coordination and camaraderie we meet the proposed goals.</p>

        </div>
        <div className=' d-flex flex-row wrap-wrap'>
            {we.map(({ name, email, linkedin, github, image }, i) => <div key={i} className="card m-3" style={{ width: "18rem", height: "fit-content" }}>
                <img src={image} className="card-img-top" alt="we" width="100" heigth="100" />
                <div className="card-body">
                    <h5 className="card-title text-center mb-3">{name}</h5>
                    <ul style={{listStyleType:"square"}}>
                        Find me:
                        <li className='m-3'>
                            <a href={`mailto:${email}`} className="card-text" style={{textDecoration:"none"}}>e-mail</a>
                        </li>
                        <li className='m-3'>
                            <a href={linkedin} target="_blank" className="card-text my-3" style={{textDecoration:"none"}}>LinkedIn</a>
                        </li>
                        <li className='m-3'>
                            <a href={github} target="_blank" className="card-text my-3" style={{textDecoration:"none"}}>Github</a>
                        </li>
                    </ul>
                </div>
            </div>)}
        </div>
    </div>
}

export default AboutUs;