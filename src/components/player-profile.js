import React from 'react';

class PlayerProfile extends React.Component {
    
    render () {
        
        let player = this.props.playerData.player;
        
        console.log( 'player profile', this.props.playerData );
        return (
            <section id="player-profile" >
                <div id="player-icon">[ ICON ]</div>
                <div id="player-name">{ player.name }</div>
                <div id="player-platform">{ player.platform }</div>
                <div id="player-games-won">{ player.gamesWon }</div>
                <div id="player-rank">{ player.rank }</div>
                <div id="player-level">{ player.level }</div>
            </section>
        );
    }
}

export { PlayerProfile };