var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },


    componentWillReceiveProps: function (nextProps) {
        console.log('1. zostanie wywołana gdy komponent otrzyma nowa właściwość', nextProps);
    },

    componentDidMount: function () {
        console.log('2. Pure" nie ma stanu wenw. to co podamy bedzie wyswietlone n razy');
    },

    getDefaultProps: function() {
        console.log(' 3.Okresla początkowy stan propsów');
    },

    componentWillMount: function() {
        console.log(' 4.Wywoływana przed metodą render, ustawienie stanu tutaj nie sposoduje przerenderowania komponentu');
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('5. wywołana przed render i sprawdza czy trzeba jeszcze raz przerysowac komponent/ boolean');
          return true;
    },

    render: function() {
        console.log('6');
    },

    componentWillUnmount: function() {
        console.log('7. Przed usunieiem komponentu, Sprząta. DOpina timery i nasluchuje zdarzen w el.DOM');
    },

    componentWillUpdate: function(nextProps, nextState) {
        console.log('8.do przygotowania nadchodzącej zmiany, powinna zostac wywołana po true SoouldComponentUpdate ');
    },

    componentDidUpdate: function(prevProps, prevState) {
        console.log('9. jako ostatnia - maniulacje w DOM');
    },

    render: function() {
    	return React.createElement('div', {})
    }

    /*render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, 'Dodaje '),
            React.createElement('div', {}, this.state.counter),
            React.createElement('button', {onClick: this.decrement}, 'Odejmuje'),
        );

        	React.createElement('li', {},
			React.createElement(Counter0, {onClick: this.increment}, 'Dodaje '),
			React.createElement(Counter1, {}),
			React.createElement(Counter2), {}
			));
    }*/

});

var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    
    },

    multiplication: function() {
    	this.setState({
    		counter: this.state.counter * 2
    	});
    },

    division: function() {
    	this.setState({
    		counter: this.state.counter / 3
    	});
    },

    render: function() {
    	return React.createElement()
    }
    
});



var Counter3 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    
    },

    remainder: function() {
    	this.setState({
    		counter: this.state.counter % 2
    	});
    },

    exponentiation: function() {
    	this.setState({
    		counter: this.state.counter ** 2
    	});
    },

    render: function() {
    	return React.createElement()
    }

});





var element = React.createClass({
	render: function() {
		    return React.createElement('div', {},
		        React.createElement('button', {onClick: this.increment}, 'Dodaje '),
		        React.createElement('div', {}, this.state.counter),
		        React.createElement('button', {onClick: this.decrement}, 'Odejmuje'),
        		);
	}
});

ReactDOM.render(React.createElement(element), document.getElementById('app'));

