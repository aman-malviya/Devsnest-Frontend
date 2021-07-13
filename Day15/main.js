class HelloWorld extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return React.createElement(
            'h1',
            {},
            'Hello React'
        );
    }
}

const root = document.getElementById(`root`);
const element = React.createElement(HelloWorld);
ReactDOM.render(element, root);