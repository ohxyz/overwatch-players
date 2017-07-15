import React from 'react';

class SearchSection extends React.Component {
    
    constructor () {
        
        super();
        
        this.state = {
            
            value: ''
        };
        
        this.updateSearchContent 
            = this.updateSearchContent.bind( this );
        this.handleSubmit 
            = this.handleSubmit.bind( this );
        
    }
    
    updateSearchContent( event ) {
 
        this.setState( {
            value: event.target.value
        });
    }
    
    handleSubmit( event ) {
        
        event.preventDefault();
    }
    
    render() {
        
        return (
            <section id="search-section">
                <div id="search-box">
                    <div id="search-bar">
                        <form onSubmit={ this.handleSubmit }>
                            <input type="text" name="player-name"
                                onChange={ this.updateSearchContent } />
                            <input type="submit" value="Go"
                                onClick={ () => this.props.onClick( this.state.value ) } />
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export { SearchSection };