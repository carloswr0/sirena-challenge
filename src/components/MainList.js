import React from 'react';
import './MainList.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Search from './Search';

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
    if(this.props[this.props.location].length < 1) {
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
    const results = this.props[this.props.location];
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
    }
    return (
      <div className="main-list">
        <Search {...this.props}></Search>
        <div className="scrollbox">
          {
            filteredArray ? filteredArray.map((e, key) => {
              return(
                <List component="nav" aria-label="main mailbox folders" key={key} onClick={() => this.props.selectEntity(e, this.props.location)}>
                  <ListItem button>
                    <ListItemText primary={e.title ? e.title : e.name} />
                  </ListItem>
                </List>
              )
            }) : <li>Loading</li>
          } 
        </div>
      </div>
    );
  }
}

export default MainList;