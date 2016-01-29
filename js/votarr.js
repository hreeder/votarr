var React = require('react');
var ReactDOM = require('react-dom');

var ChoiceList = require('./choice');
var Header = require('./header');
var ResultChart = require('./results');

var IndividualResult = React.createClass({
   render: function() {
       return (
           <p><b>{this.props.choice}</b>: {this.props.count}</p>
       )
   }
});

var Results = React.createClass({
    render: function() {
        var resultNodes = this.props.data.map(function(choice, idx) {
           return (
               <IndividualResult key={idx} choice={choice.choice} count={choice.count} />
           )
        });
        return (
            <div id="results">
                <div className="resultList">
                    {resultNodes}
                </div>
                <ResultChart data={this.props.data} />
            </div>
        )
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {
            choices: [
                {choice: "Pepperoni", count: 5},
                {choice: "Ham & Pineapple", count: 2},
                {choice: "Margherita", count: 0}
            ],
            title: "Pizza Vote",
            adminVisible: false
        };
    },
    addChoice: function() {
        var newChoice = window.prompt("Please enter a new choice");
        var choices = this.state.choices;
        choices.push({choice: newChoice, count: 0});
        this.setState({
            choices: choices
        })
    },
    delChoice: function(idx) {
        var choices = this.state.choices;
        choices.splice(idx, 1);
        this.setState({
            choices: choices
        });
    },
    handleVote: function(choices) {
        this.setState({
            choices: choices
        });
    },
    setTitle: function() {
        var title = window.prompt("Please enter a poll title");
        this.setState({
            title: title
        })
    },
    toggleControls: function() {
        this.setState({
            adminVisible: !this.state.adminVisible
        })
    },
    render: function() {
        return (
            <div className="app">
                <Header clickLogo={this.toggleControls}
                        setTitle={this.setTitle}
                        adminVisible={this.state.adminVisible}>
                    {this.state.title}
                </Header>
                <div className="clearfix" />
                <div className="row">
                    <div className="col-md-2">
                        <h3>Choices</h3>
                        <ChoiceList data={this.state.choices}
                                    handleVote={this.handleVote}
                                    adminVisible={this.state.adminVisible}
                                    addChoice={this.addChoice}
                                    delChoice={this.delChoice}
                        />
                    </div>
                    <div className="col-md-10">
                        <h3>Results</h3>
                        <Results data={this.state.choices} />
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);