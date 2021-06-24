import React, { Component } from 'react';

class CoolButton extends Component {

    state = {
        word: '',
        letterCount: 0
    }

    handleOnChange = event => {
        this.setState({
            word: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        // this.setState( prevState => {
        //     return {
        //         letterCounter: prevState.letterCount + prevState.word.length
        //     }
        // })

        this.setState({
            letterCount: this.state.letterCount + this.state.word.length
        })
    }

    render(){
        return (
            <div>
{/* No Redux
2. It has to be it’s own class component.
3. You can render anywhere on any page.
4. If you have the ES7 extension, feel free to use.
5. If you google, you can google syntax, but no how to make an incrementor button in react. */}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="word" name="word" value={this.state.word} onChange={this.handleOnChange} />
                    <input type="submit" name="Click me" />
                </form>
                <p>
                    {this.state.letterCount}
                </p>
            </div>
        )
    }
}

export default CoolButton