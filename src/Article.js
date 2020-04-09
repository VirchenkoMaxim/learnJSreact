import React, { Component } from 'react'



class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.def
            // isOpen: true
        }
        // this.handleClick = handleClick.bind(this);
    }

    componentWillMount() {
        console.log('---', 'mounting');
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.def !== this.props.def) this.setState({
            isOpen: nextProps.def
        })

    }
    render() {
        const { article } = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? "close" : "open"}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date()).toDateString()}</h3>
            </div >

        )

    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
// function handleClick() {
//     this.setState({
//         isOpen: !this.state.isOpen
//     })
// }
export default Article;