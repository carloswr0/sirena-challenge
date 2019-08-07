import React from 'react';
import './MainList.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Search from './Search';
import Loader from '../assets/loader';
import Button from '@material-ui/core/Button';

class MainList extends React.Component {
  componentDidMount() {
    this.fetchData(this.props.location);
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.location !== this.props.location) {
      this.setSection();
      this.fetchData(this.props.location);
    }
  }

  setSection() {
    this.setState({
      section: this.props.location
    }); 
  };
  
  fetchData(section) {
    const {location} = this.props;
    if(this.props[location].results.length < 1) {
      switch(section) {
        case 'characters':
          this.props.getAllCharacters();
          break;

        case 'movies':
          this.props.getAllMovies();
          break;

        default:
          return null;
      }
    };
  };
  
  render() {
    const {location} = this.props;
    let originArray = 'characters';
    let results = this.props[location].results;
   
    if(this.props.search.results.length > 0 && this.props.filter.length > 0 && location === 'characters') {
      results = this.props.search.results;
      originArray = 'search';
    } else {
      results = this.props[location].results;
    }

    let filteredArray = [];

    if(this.props.filter) {
      filteredArray = results.filter(e => {
        if(e.title) {
          return e.title.toLowerCase().includes(this.props.filter.toLowerCase());
        }else{
          return e.name.toLowerCase().includes(this.props.filter.toLowerCase());
        }
      })
    } else {
      filteredArray = results;
    };
   
    return (
      <div className="main-list">
        <Search {...this.props}></Search>
        <div className="scrollbox">
          {
            filteredArray.length > 0 ? filteredArray.map((e, key) => {
              return(
                <List component="nav" aria-label="main mailbox folders" key={key} onClick={() => this.props.selectEntity(e, this.props.location, originArray)}>
                  <ListItem button>
                    <ListItemText primary={e.title ? e.title : e.name} />
                  </ListItem>
                </List>
              )
            }) : this.props.filter && filteredArray.length < 1 ? <h1 className="not-found">No se encontraron coincidencias.</h1> : <Loader></Loader>
          } 
        </div>
        {
          location === 'characters' ?
          <div className="load-more"> 
              <Button variant="contained" onClick={() => this.props.getMoreCharacters(this.props[originArray].next, originArray)}>
                Cargar más.
              </Button>
          </div> : null
        }
      </div>
    );
  }
}

export default MainList;
