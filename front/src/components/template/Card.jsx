import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import Profile from '../../assets/imgs/invis-user.png'
import Rater from 'react-rater'
// import Pagerate from '../pageRate/Pagerate'

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            user: {
                name: '',
                city: '',
                hab: [],
                rategeral: [],
                id: '',
            },

        }
    }

    habilidades(hab) {
        return (
            <span className="badge badge-primary m-1 p-2" key={hab}>{hab}</span>
        )
    }

    render() {

        const handleHide = () => this.setState({ show: false })
        const handleShow = () => this.setState({ show: true })

        const buttonLink = <span className="d-inline-block" onClick={!this.state.show ? handleShow : handleHide}>
            <Link to={{
                pathname: '/pageRate',
                state: { foo: `${this.props.id}` },
            }} className="btn btn-md btn-primary">
                Avaliar
    </Link>
        </span>

        const habi = this.props.hab
        const rating = this.props.rategeral
        let stars = 0

        if (rating.length >0) {
            stars = rating.reduce((sum, num) => sum + num) / rating.length
        } 


        return (
                <div className="card cardp col col-8 col-sm-8 col-md-6 col-lg-4 col-xl-3 justify-content-center" >
                    <img src={Profile} alt={this.props.nome} className="card-img-top" />
                    <div className="card-body text-center mt-0">
                        <h5 className="card-title text-secondary mt-0 pt-0">{this.props.nome}</h5>
                        <p className="card-text"><small>{this.props.city}</small></p>
                        <br />
                        {habi.map(this.habilidades)}
                        <br />
                        <p className="mt-4 text-secondary mb-0">Avaliação</p>
                        <h3 className="text-secondary animated-rater p-0 m-0"><Rater interactive={false} rating={stars} total={5} /></h3>
                        <br />
                        {buttonLink}
                    </div>
                </div>
        )
    }
}

export default Card