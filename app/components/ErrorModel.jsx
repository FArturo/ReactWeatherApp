var React = require('react');

var ErrorModel = React.createClass({
    componentDidMount: function() {
        var modal = new Foundation.Reveal($('#error-model'));

        modal.open();
    },
    render: function(){
        return (
           <div className="reveal tiny text-center" id="error-modal" data-reveal>
                <h4>Some Title</h4>
               <p>Our error message!</p>
               <p>
                 <button className="button hollow" data-close>
                     Okay
                 </button>
               </p>
           </div>
        );
    }
});

module.exports = ErrorModel;