import React from 'react'
import Main from '../template/Main'
import Card from '../template/Card'
import axios from 'axios'

const baseUrl = 'https://api.myjson.com/bins/mulk4'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            list: [],
            user: {
                name: '',
                city: '',
                hab: [],
                rategeral: [],
                id: '',
            },

        }
    }

    async componentWillMount() {
        axios(baseUrl).then(resp => {
            console.log(resp.data)
            this.setState({ list: resp.data })
        })
    }

    render() {
        
        return (
            <Main>
                <h4 className="col col-10">Profissionais</h4>
                <hr />
                <p>Avalie os profissionais que você contratou</p>
                <div className="row">
                    <div className="col col-12 row">
                        {this.state.list.length > 1 ? 
                            this.state.list.map(user => {
                                return (
                                    <Card nome={user.name} id={user.id} key={user.id} rategeral={user.rategeral} city={user.city} hab={user.hab} />
                                )
                            })
                         : 
                            <Card nome={this.state.list.name} id={this.state.list.id} key={this.state.list.id} rategeral={this.state.list.rategeral} city={this.state.list.city} hab={this.state.list.hab} />

                        }
                    </div>
                </div>

            </Main>
        )

    }
}