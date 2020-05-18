import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
const liff = window.liff;
class LineDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            userLineID: '',
            pictureUrl: '',
            statusMessage: '',
            accessToken: ''
        };
    }
    componentDidMount() {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        let urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "authorization_code");
        urlencoded.append("code", document.URL.split("=")[1].split("&")[0]);
        urlencoded.append("redirect_uri", "https://develop.essoft.co.th/merchant_payment_v2/linedashboard");
        urlencoded.append("client_id", "1654205721");
        urlencoded.append("client_secret", "0e72a908ac5d53bd8945797f3c328e19");
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };
        fetch("https://api.line.me/oauth2/v2.1/token", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        console.log(urlencoded)
        liff.init({ liffId: "1654205721-wbWpMX7y" });
    }
    getProfile = async () => {
        const getProfile = await liff.getProfile();
        this.setState({
            name: getProfile.displayName,
            userLineID: getProfile.userId,
            pictureUrl: getProfile.pictureUrl,
            statusMessage: getProfile.statusMessage
        });
        const accessToken = await liff.getAccessToken();
        this.setState({
            accessToken: accessToken
        })
    }
    sendMessage() {
        liff.sendMessages([{
            type: 'text',
            text: "Hi LIFF"
        }]).then(() => {
            liff.closeWindow();
        });
    }
    closeLIFF() {
        liff.closeWindow();
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="support">
                        {
                            (this.state.pictureUrl && this.state.pictureUrl != '')
                                ?
                                <img width="25%" src={this.state.pictureUrl} />
                                :
                                null
                        }
                    </div>
                    {
                        (this.state.name && this.state.name != '')
                            ?
                            <p>Name: {this.state.name}</p>
                            :
                            null
                    }
                    {
                        (this.state.userLineID && this.state.userLineID != '')
                            ?
                            <p>LineID: {this.state.userLineID}</p>
                            :
                            null
                    }
                    {
                        (this.state.statusMessage && this.state.statusMessage != '')
                            ?
                            <p>statusMessage: {this.state.statusMessage}</p>
                            :
                            null
                    }
                    {
                        (this.state.accessToken && this.state.accessToken != '')
                            ?
                            <p style={{ fontSize: 8 }}>accessToken: {this.state.accessToken}</p>
                            :
                            null
                    }
                    <div className="support">
                        <Button variant="contained" onClick={this.getProfile.bind(this)} style={{ marginRight: '20px' }} color="primary">
                            Get INFO
                        </Button>
                        <Button variant="contained" onClick={this.sendMessage.bind(this)} style={{ marginRight: '20px' }}>
                            Send Message
                        </Button>
                        <Button variant="contained" onClick={this.closeLIFF.bind(this)} color="secondary">
                            Close LIFF
                        </Button>
                    </div>
                </header>
            </div>
        );
    }
}

export default LineDashboard;
// import React from 'react'
// export default function LineDashboard() {
//     return (
//         <div>
//             <h1>test</h1>
//         </div>
//     )
// }