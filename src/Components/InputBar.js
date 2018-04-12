const barStyles = {
    display: 'flex'
}

const inputStyles = {
    padding: '1em',
    fontFamily: 'Avenir, Helvetica, sans-serif',
    flex: '1'
}

import { buttonStyle } from '../Styles/styles';

export default class InputBar extends React.Component {

    constructor() {
        super();

        this.state = {
            text: ''
        }

        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage() {
        this.props.post({
            text: this.state.text
        });
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div style={barStyles}>
                <input
                    type='text'
                    value={this.state.text}
                    onChange={(event) => this.setState({ text: event.target.value })}
                    onKeyDown={(event) => event.keyCode === 13 ? this.sendMessage() : null}
                    style={inputStyles}
                />
                <button
                    style={buttonStyle}
                    onClick={this.sendMessage}
                >Send</button>
            </div>
        )
    }
}