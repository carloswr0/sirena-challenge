import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
        color: 'rgb(255, 197, 0)'
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
});

function Search(props) {
    const { location } = props;

    const classes = useStyles();

    function handleTextChange(event) {
        if(location === 'characters') {
            props.setFilterKeyword(event.target.value);
            props.searchCharacters(event.target.value);
        } else {
            props.setFilterKeyword(event.target.value);
        }
    };
    let placeholder = location === 'characters' ? 'Busca en SWAPI' : 'Busca localmente';
    return (
        <Paper className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder={placeholder}
                inputProps={{ 'aria-label': 'search swapi' }}
                onChange={(e) => handleTextChange(e)}
            />
            <Divider className={classes.divider} />
            <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon></SearchIcon>
            </IconButton>
        </Paper>
    );
}

export default Search;
