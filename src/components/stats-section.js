import React from 'react';

class StatsSection extends React.Component {
    
    render () {
        
        return (
            <section id="stats-section">
                <FeaturedStats />
            </section>
        );
    }
}

class FeaturedStats extends React.Component {

    render () {
        
        return (
            <section id="featured-stats">
                <ul>
                    <li>Eliminations - average 36</li>
                </ul>
            </section>
        
        );
    }
}

export { StatsSection };