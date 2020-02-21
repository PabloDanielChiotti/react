import React, {Component} from "react";

class MemeGenerator extends Component {

    state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        loading: true,
        allMemeImgs: []
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                this.setState({loading: false, allMemeImgs: response.data.memes})
            })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randomIndex = Math.floor(this.state.allMemeImgs.length * Math.random())
        const randMemeImg = this.state.allMemeImgs[randomIndex].url
        this.setState({randomImg: randMemeImg})
    }

    render() {
        return (
            <div>
                {this.state.loading ?
                    <h1>Loading...</h1> :
                    <div>
                        <form onSubmit={this.handleSubmit} className="meme-form">
                            <input
                                type="text"
                                value={this.state.topText}
                                name="topText"
                                placeholder="Top Text"
                                onChange={this.handleChange}/><br/>
                            <input
                                type="text"
                                value={this.state.bottomText}
                                name="bottomText"
                                placeholder="Bottom Text"
                                onChange={this.handleChange}/><br/>

                            <button>Gen</button>
                        </form>

                        <div className="meme">
                            <img src={this.state.randomImg} alt=""/>
                            <h2 className="top">{this.state.topText}</h2>
                            <h2 className="bottom">{this.state.bottomText}</h2>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default MemeGenerator
