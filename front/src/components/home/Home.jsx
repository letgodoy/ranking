import React from 'react'
import Main from '../template/Main'
import Card from '../template/Card'
import axios from 'axios'

const baseUrl = '../../../db.json'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            user: {
                name: '',
                city: '',
                hab: [],
                rate: '',
                id: '',
            },
            list: [],

        }
    }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    render() {
        return (
            <Main>
                <h4 className="col col-10">Profissionais</h4>
                <hr />
                <p>Avalie os profissionais que você contratou</p>
                <div className="row">
                    <div className="col col-12 row">
                        {this.state.list.map(user => {
                    return (
                        <Card nome={user.name} id={user.id} key={user.id} rategeral={user.rategeral} city={user.city} hab={user.hab} />
                    )
                })}
                    </div>
                </div>
                
            </Main>
        )

    }
}