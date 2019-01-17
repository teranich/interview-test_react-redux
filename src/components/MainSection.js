import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from '@material-ui/core/TableHead';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Checkbox from "@material-ui/core/Checkbox";

import AddEvent from '../components/AddEvent'
import ClearEvents from '../components/ClearEvents'
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import {filterText, toggleEvent, selectAllEvents, deSelectAllEvents} from '../actions';
class MainSection extends Component {
    handleToggle(event) {
        this.props.dispatch(toggleEvent(event.id))
    }

    filterText = () => (event) => {
        this.props.dispatch(filterText(event.target.value))
    }
    onSelectAllClick = () => (event) => {
        if (event.target.checked) {
            this.props.dispatch(selectAllEvents())
        }
        else {
            this.props.dispatch(deSelectAllEvents()) 
        }
    }
    render() {
        const { events } = this.props
        return (
        <div>
        <Toolbar>
            <AddEvent></AddEvent>
            <ClearEvents></ClearEvents>
            <TextField 
                onChange={this.filterText()}
                placeholder="Поиск" >
            </TextField>
        </Toolbar>


        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                    <Checkbox
                        onChange={this.onSelectAllClick()}
                    />

                    </TableCell>
                    <TableCell>
                        Название
                    </TableCell>
                    <TableCell>
                        Дата
                    </TableCell>    
                    <TableCell>
                        Адрес
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {events.map(event=>(
                    <TableRow key={event.id}>
                    <TableCell>
                        <Checkbox checked={event.selected} 
                        onChange={this.handleToggle.bind(this,event)}
                        />
                    </TableCell>
                    <TableCell>{event.name}</TableCell>
                    <TableCell>{event.date}</TableCell>
                    <TableCell>{event.address}</TableCell>
                    </TableRow>
                ))}
                
            </TableBody>
            </Table>
        </div>
        );
    }
}

const getFilteredEvents = (events, filters) => {
    return events.filter(event=>event.name.toUpperCase().includes(filters.text.toUpperCase()))
}
const mapStateToProps = (state) => {
    return {
        events: getFilteredEvents(state.events, state.filters)
    };
}

export default connect(mapStateToProps)(MainSection);