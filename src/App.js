import React from 'react';
import CardList from './CardList';
import { Flowers } from './Flowers';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import firebase from './firebase';
import { robots } from './robots';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        //     fetch('https://jsonplaceholder.typicode.com/users')
        //         .then(response => response.json())
        //         .then(users => this.setState({ robots: users }));



        var ref = firebase.firestore().collection("/Flowers");
        ref.get().then(snapshot => {
            let tempArr = [];
            snapshot.forEach(doc => {
                tempArr.push(doc.data());
            })

            this.setState({ robots: tempArr });
        });
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({ searchfield: event.target.value });

    }

    render() {
        console.log(this.state.robots);
        const filter = this.state.robots.filter(robots => {
            return robots.Item_Name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>PickaBloom</h1>
                <SearchBox searchChange={this.onSearchChange} />
                
                    <CardList robots={filter} />
                
            </div>
        );
    }
}
export default App;