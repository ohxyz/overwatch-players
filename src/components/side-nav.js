import React from 'react';

function SideNavItems( props ) {
    
    return (
    
        <li>
            <div className="side-nav-item">
            { props.navItem }
            </div>
        </li>
    );
}

class SideNav extends React.Component {
    
    constructor() {
        super();
        
        this.navItems = [ 'Me', 'All', 'Off', 'Def', 'Tan', 'Sup' ];
    }

    render () { 
    
        return (
            <nav id="side-nav">
                <ul id="side-nav-list">
                { this.navItems.map( ( item ) => <SideNavItems key={ item } navItem={ item } /> ) }
                </ul>
            </nav>
        );
    }
}

export { SideNav };