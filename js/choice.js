var React = require('react');

var Choice = React.createClass({
    render: function() {
        return (
            <div className="element">
                <div className="row">
                    <div onClick={this.props.onClick} className="btn btn-primary btn-block choice-btn">{this.props.children}</div>
                </div>
                {this.props.adminVisible ? <div className="row"><div onClick={this.props.delClick} className="btn btn-danger btn-block"><i className="fa fa-times"></i></div></div> : null}
            </div>
        )
    }
});

var AddChoiceNode = React.createClass({
   render: function() {
       return (
           <div className="row">
               <div className="btn btn-warning btn-block choice-btn"
                    onClick={this.props.addChoice}>
                   <i className="fa fa-plus"></i>
               </div>
           </div>
       )
   }
});

var ChoiceList = React.createClass({
    handleSelect: function(d) {
        d.count++;
        this.props.handleVote(this.props.data);
    },
    handleDelete: function(d) {
        this.props.delChoice(d);
    },
    render: function () {
        var handleSelect = this.handleSelect;
        var handleDelete = this.handleDelete;
        var adminVisible = this.props.adminVisible;
        var choiceNodes = this.props.data.map(function(choice, idx){
            return (
                <Choice onClick={handleSelect.bind(null, choice)}
                        delClick={handleDelete.bind(null, idx)}
                        adminVisible={adminVisible}
                        key={idx}>
                    {choice.choice}
                </Choice>
            )
        });
        return (
            <div className="choiceList">
                {choiceNodes}
                {this.props.adminVisible ? <AddChoiceNode addChoice={this.props.addChoice} /> : null}
            </div>
        )
    }
});

module.exports = ChoiceList;