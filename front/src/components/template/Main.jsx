import React from 'react'
import './Main.css'

export default props =>
    <React.Fragment>
        <main className="content container-fluid">
            <div className="row justify-content-center">
                <div className="col col-10 align-items-center align-self-center p-3 mt-3">
                    {props.children}
                </div>
            </div>
        </main>
    </React.Fragment>