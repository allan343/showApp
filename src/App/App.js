import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import ShowListNav from '../ShowListNav/ShowListNav';
import ApiContext from '../ApiContext';
import Show from '../Show/show';
import AddShow from '../AddShow/AddShow';
//import './App.css';

class App extends Component {
    state = {
        shows: [],
      
    };

    componentDidMount() {
        /*
        Promise.all([
            fetch(`${config.API_ENDPOINT}/notes`),
            fetch(`${config.API_ENDPOINT}/folders`)
        ])
            .then(([notesRes, foldersRes]) => {
                if (!notesRes.ok)
                    return notesRes.json().then(e => Promise.reject(e));
                if (!foldersRes.ok){
                    return foldersRes.json().then(e => Promise.reject(e));
                }
                
                return Promise.all([notesRes.json(), foldersRes.json()]);
            })
            .then(([notes, folders]) => {
                console.log(folders);
                console.log(notes);
                this.setState({notes, folders});
            })
            .catch(error => {
                console.error({error});
            });*/
    }

    
    handleDeleteShow = showId => {
        this.setState({
            notes: this.state.show.filter(show => show.id != showId)
        });
    };

 

    handleAddShow = (showName,showId) => {
        console.log("folder here");
        this.state.shows.push({name:showName,id:showId});
        this.setState({
            shows: this.state.shows
        });
    };
    
    
  
 // to watch, finished, organize
    renderNavRoutes() {
        return (
            <>
               
                    
                        <FooterNav/>
                
               
               {/* <Route path="/show/:showId" component={ShowPageNav} />*/}
               
                {/*<Route path="/add-note" component={NotePageNav} />*/}
            </>
        );
    }

    renderMainRoutes() {
        return (
            <>
          
                
          <Route
                        
                        key={'/'}
                        exact path={'/'}
                        component={ToWatch}
                    />

<Route
                        
                        key={'/finish'}
                        exact path={'/'}
                        component={Finished}
                    />
<Route
                        
                        key={'/organize'}
                        exact path={'/'}
                        component={OrganizeListNav}
                    />

                    <Route
                        
                        key={'/show/:showId'}
                        exact path={'/show/:showId'}
                        component={Show}
                    />
                  <Route path="/add-show" render={
                    (routeProps)=>{return <AddShow {...routeProps}>
                        </AddShow>
                    }} />
                
             
            </>
        );
    }

    render() {
        const value = {
            show: this.state.notes,
        
            deleteShow: this.handleDeleteShow,
            addShow: this.handleAddShow,
        };
        return (

            <ApiContext.Provider value={value}>
                <div className="App">
                    <nav className="App__nav">{this.renderNavRoutes()}</nav>
                    <header className="App__header">
                        <h1>
                            <Link to="/">Noteful</Link>{' '}
                            <FontAwesomeIcon icon="check-double" />
                        </h1>
                    </header>
                    <main className="App__main">{this.renderMainRoutes()}</main>
                </div>
            </ApiContext.Provider>
           
        );
    }
}

export default App;
