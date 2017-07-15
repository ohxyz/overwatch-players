import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import 'whatwg-fetch';

import { SearchSection } from './components/search-section';
import { MainSection } from './components/main-section';

class App extends React.Component {
    
    constructor() {
        
        super();
        
        this.playerData = {
            
            "player": {

                "name": "Player not found",

                "gamesWon": 0,

                "platform": "Unknown",

                "level": 0,

                "rank": 0
            }
        };
        
        this.emptyPlayerData = JSON.parse( JSON.stringify( this.playerData ) );

    }
    
    handleSearch( query ) {
        
        let url = '/dummy/player-data-' + query + '.json';
        
        let self = this;
        
        fetch( url )
            .then( response => response.json() )
            .then( function( parsedJson ) {
                
                self.playerData = parsedJson;
                
                self.setState( {
                        
                    playerNameFetched: self.playerData.player.name

                } );

            })
            .catch( ( exception ) => {

                self.playerData = self.emptyPlayerData;
                
                self.setState( {
                        
                    playerNameFetched: self.emptyPlayerData.player.name

                } );
            });
    }
    
    render() {
        
        return (
            <section>
                <SearchSection onClick={ query => this.handleSearch( query ) }/>
                <MainSection playerData={ this.playerData }/>
            </section>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
