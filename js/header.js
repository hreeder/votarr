var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <div className="header">
                <h1>
                    <img onClick={this.props.clickLogo}
                         src="http://wiki.napierdevsoc.uk/NDS_Logo.jpg"
                         alt="" width="150px"
                         className="pull-right" />
                    {this.props.children}
                    {this.props.adminVisible ? <i className="edit-title fa fa-pencil"
                                                  onClick={this.props.setTitle}></i> : null}
                </h1>
            </div>
        )
    }
});

module.exports = Header;