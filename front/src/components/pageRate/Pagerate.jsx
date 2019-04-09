import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'
import Rater from 'react-rater'
import './Pagerate.scss'
import Profile from '../../assets/imgs/invis-user.png'
import { Link } from 'react-router-dom'

const baseUrl = 'https://api.myjson.com/bins/mulk4'
const rate = []
const user = {}

export default class Pagerate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: {
                name: '',
                city: '',
                hab: [],
                rategeral: [],
                id: '',
            },
            user: {
                name: '',
                city: '',
                hab: [],
                rategeral: [],
                id: '',
            },
            rate: [],
        }
    }



    componentWillMount() {
        const userId = parseInt(this.props.location.state.foo)
        console.log(userId)

        axios.get(`${baseUrl}`)
            .then(({ data: users }) => {
                console.log('user', users);

                this.setState({ users });

                users.map(u => {
                    if (u.id === userId) {
                        this.setState({ user: u })
                        return user
                    }
                    else {
                        return u
                    }
                })

                // console.log(user)
                // console.log(users)

                // this.setState({ user });
            })
    }

    save() {
        this.media()
        const userId = parseInt(this.props.location.state.foo)
        const user = this.state.user
        const users = this.state.users
        const url = `${baseUrl}`

        // console.log(user)
        // console.log(users)

        users.map(u => {
            if (u.id === userId) {
                this.setState({ u: user })
                // console.log(u)
                return u
            }
            else {
                // console.log(u)
                return u
            }
        })

        // console.log(users)

        axios.put(url, users)
            .then(resp => {
                this.setState({ users })
            }).then(resp => {
                this.props.history.push("/");
            }
            )
        
    }

    media() {
        const user = { ...this.state.user }
        const total = parseInt(rate.length)

        const soma = parseInt(rate.reduce((a, b) => a + b))

        const media = parseInt(soma / total)

        user.rategeral.push(media)

        this.setState({ user })
    }

    habilidades(hab, id) {
        return (
            <h3 className="text-center" key={hab}><span className="badge badge-primary mr-3 p-2">{hab}</span>
                <Rater total={5} onRate={(rating) => {
                    rate[`${id}`] = parseInt(rating.rating)
                    console.log(rate)
                }
                } />
            </h3>
        )
    }

    render() {
        const habi = this.state.user.hab
        const rating = this.state.user.rategeral
        let stars = 0

        if (rating.length > 0) {
            stars = rating.reduce((sum, num) => sum + num) / rating.length
        }

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