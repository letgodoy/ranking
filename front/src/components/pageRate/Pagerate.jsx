import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'
import Rater from 'react-rater'
import './Pagerate.scss'
import Profile from '../../assets/imgs/invis-user.png'
import { Link } from 'react-router-dom'

const baseUrl = '../../../db.json'
const rate = []
const initialState = {
    user: {
        name: '',
        city: '',
        hab: [],
        rategeral: [],
        id: '',
    },
    rate: [],
}



export default class Pagerate extends Component {

    state = { ...initialState }

    componentWillMount() {
        const userId = parseInt(this.props.location.state.foo)
        console.log(userId)

        axios.get(`${baseUrl}/${userId}`)
            .then(({ data: user }) => {
                console.log('user', user);

                this.setState({ user });
            })

    }

    save() {
        this.media()

        const user = this.state.user
        const url = `${baseUrl}/${user.id}`
        axios.put(url, user)
            .then(resp => {
                this.setState({ user })
            })
            this.props.history.push("/");
    }

    media(){
        const user = { ...this.state.user }
        const total = parseInt(rate.length)
        
        const soma = parseInt(rate.reduce((a, b) => a + b))

        const media = parseInt( soma/total )

        user.rategeral.push(media)

        this.setState ({ user })
    }

    habilidades(hab, id) {
        return (
                <h3 className="text-center" key={hab}><span className="badge badge-primary mr-3 p-2">{hab}</span>
                    <Rater total={5} onRate={( rating ) => {
                        rate[`${id}`] = parseInt(rating.rating)
                        console.log( rate )
                    }
                 } />
                </h3>
        )
    }

    render() {
        const habi = this.state.user.hab
        const rating = this.state.user.rategeral
        let stars = 0

        if (rating.length >0) {
            stars = rating.reduce((sum, num) => sum + num) / rating.length
        } 

        console.log(rating)
        return (
            <Main>
                <div className="col col-12 justify-content-center">
                    <div className="row justify-content-center align-self-center">
                        <div className="col col-3">
                            <img src={Profile} alt={this.state.user.nome} className="img" />
                        </div>
                        <div className="col col-4">
                            <h5 className="text-primary">{this.state.user.name}</h5>
                            <p><small>{this.state.user.city}</small></p>
                            <h3><Rater interactive={false} rating={stars} total={5} /></h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 text-center">
                            {habi.map(this.habilidades)}
                        </div>
                        <div className="col col-12 text-right">
                            <button className="btn btn-primary mr-2" onClick={e => this.save(e)}>Salvar</button>
                            <Link to='/' className="btn btn-md btn-secondary">Voltar</Link>
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}