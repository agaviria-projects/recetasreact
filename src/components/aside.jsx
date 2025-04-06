import React from 'react'

export default function Aside() {
  return (
    <div className="col-sm-4">
        <h2>About Me</h2>
        <h5>Photo of me:</h5>
        <div className="fakeimg">
            <img className="img-fluid" src={"https://img.freepik.com/foto-gratis/parrilla-variedad-carnes-ella_188544-8372.jpg?t=st=1743950937~exp=1743954537~hmac=b903d3b9a532849455c940fc9def0bd7be5fabd5e7687f3ae2e8dd56a2852dd6&w=1060"} alt="" />
        </div>
        <p className="mt-3">Una parrilla con una variedad de carnes en ella</p>
        <h3 className="mt-4">Some Links</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul>
        <hr className="d-sm-none"/>
    </div>
    )
}
