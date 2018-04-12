const loginStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    width: '100%',
    height: '450px',
    background: 'cadetblue',
    color: 'white',
}

import { buttonStyle } from '../Styles/styles';

export default class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            author_name: ''
        }
    }

    render() {

        const { author_name } = this.state;

        return (
            <div style={loginStyles}>
                <span>Please enter your username</span>
                <input 
                    type="text"
                    value={author_name}
                    onChange={(event) => this.setState({ author_name: event.target.value })}
                    onKeyDown={(event) => event.keyCode === 13 ? this.props.logIn(author_name) : null}    
                />
                <button 
                    style={buttonStyle}
                    onClick={() => this.props.logIn(author_name)}
                >Join</button>
            </div>
        )
    }
}