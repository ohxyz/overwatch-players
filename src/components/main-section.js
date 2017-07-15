import React from 'react';

import { StatsSection } from './stats-section';
import { SideNav } from './side-nav';
import { PlayerProfile } from './player-profile';

class MainSection extends React.Component {
    
    render() {
                        
        return (
            <section id="main">
                <aside id="nav-panel">
                    <SideNav />
                </aside>
                <section id="main-content">
                    <PlayerProfile playerData={ this.props.playerData } />
                    <StatsSection />
                </section>
            </section>
        );
    }
}

export { MainSection };