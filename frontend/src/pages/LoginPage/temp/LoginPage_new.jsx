import React from 'react'
import axios from 'axios'
import {withSignIn, withAuthHeader} from 'react-auth-kit'
import {connect} from "react-redux";

class LoginPage_new extends React.Component {
    state = {email: '', password: ''}

    componentDidMount() {
        console.log(this.props.authHeader)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.authHeader)
    }

    onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://84.201.175.72:3002/users/login/', this.state)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                if (res.status === 201) {
                    if (this.props.signIn(
                        {
                            token: res.data.Content.access_token,
                            tokenType: "",
                            expiresIn: 1024
                        }
                    )) {
                        // Redirect or do-something
                    } else {
                        console.log(res)
                    }
                }
            })
    }

    render() {
        return (
            <>
                {this.props.authHeader}

                <form onSubmit={this.onSubmit}>
                    <input type={"email"} onChange={(e) => this.setState({...this.state, email: e.target.value})}/>
                    <input type={"password"}
                           onChange={(e) => this.setState({...this.state, password: e.target.value})}/>

                    <button>Submit</button>
                </form>
            </>
        )
    }
}

export default withAuthHeader(withSignIn(LoginPage_new))
