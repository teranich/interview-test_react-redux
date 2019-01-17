import React, {Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { clearEvents } from '../actions';

class AddEvent  extends Component {
  
    state = {
        open: false
    }
    handleClearEvents = (event) => {
        this.props.dispatch(clearEvents())
        this.setState({open:false});
    }
    isSelected = ()=> {
        return !this.props.events.find(event=>event.selected)
    }    
     handleClickOpen = () => {
      this.setState({open:true});
    }
  
     handleClose = () => {
        this.setState({open:false});
    }
    render () {
        return (
        <div>
            <Button disabled={this.isSelected()}   onClick={this.handleClickOpen}>-</Button>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle >Удаление мероприятия</DialogTitle>
            <DialogContent>
                Вы действительно хотите удаленить выбранные мероприятия?
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                Отмена
                </Button>
                <Button onClick={this.handleClearEvents} color="primary">
                Удалить
                </Button>
            </DialogActions>
            </Dialog>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        events: state.events
    };
}

export default connect(mapStateToProps)(AddEvent)