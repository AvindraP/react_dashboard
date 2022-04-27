import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "./App.css";
import Header from "./components/header";
import Details from "./components/details";
import Home from "./components/Home"
import Footer from "./components/footer";
import CashFlowForecast from "./components/form/CashFlowForecast";
import CashDetails from "./components/form/CashDetails";
import Particles from "react-tsparticles";
import {detailsSum, getTotalOfDetails, loading} from "./services/api";


class App extends Component {
    constructor() {
        super()
        this.state = {total: []}
    }

    async componentDidMount() {
        await getTotalOfDetails()
        this.setState({total: detailsSum})
    }

    render() {
        return (
            <Router>
                <div id="content">
                    <Particles
                        options={{
                            fpsLimit: 120,
                            background: {
                                color: {
                                    value: "#1e3799",
                                },
                            },
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: false,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: false,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    bubble: {
                                        distance: 400,
                                        duration: 2,
                                        opacity: 0.8,
                                        size: 40,
                                    },
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#2f3640",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 80,
                                    enable: true,
                                    opacity: 1.2,
                                    width: 1.3,
                                },
                                collisions: {
                                    enable: false,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outMode: "bounce",
                                    random: true,
                                    speed: 3,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 600,
                                    },
                                    value: 100,
                                },
                                opacity: {
                                    value: 0.7,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    random: true,
                                    value: 15,
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                    <Header/>
                    <switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/details">
                            <Details columnsTotal={this.state.total} loading={loading}/>
                        </Route>
                        <Route exact path="/cash-flow-forecast-form">
                            <CashFlowForecast/>
                        </Route>
                        <Route exact path="/cash-details-form">
                            <CashDetails/>
                        </Route>
                    </switch>
                    <Footer columnsTotal={this.state.total} loading={loading}/>
                </div>
            </Router>
        );
    }
}

export default App;
