import React, {Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux';
import { addEvent } from '../actions';
import { DatePicker } from 'material-ui-pickers';

class AddEvent  extends Component {
    cities = [
        'Нижний Новгород',
        'Арзамас',
        'Москва'
    ]

    state = {
        open: false,
        name: '',
        date: new Date(),
        address: ''
    }

     handleClickOpen() {
      this.setState({open:true});
    }
  
     handleClose() {
        this.setState({open:false});
    }

    handleAdd() {
        const city = this.cities[this.state.address],
            date = this.state.date.toLocaleDateString()
        this.props.dispatch(addEvent(this.state.name,date, city))
        this.setState({open:false});
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.value });
    }
    handleDateChange = date => {
        this.setState({ date: date });
      };
    render () {
        return (
        <div>
            <Button onClick={this.handleClickOpen.bind(this)}>+</Button>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle >Добавление мероприятия</DialogTitle>
            <DialogContent>
                <FormControl>
                    <FormControl>
                        <TextField
                        label="Название"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        
                        />
                        </FormControl>
                        <FormControl>
                           <DatePicker
                                margin="normal"
                                label="Дата"
                                value={this.state.date}
                                onChange={this.handleDateChange}
                            />
                        </FormControl>
                        <FormControl>
                        <InputLabel htmlFor="addr-select">Адрес</InputLabel>
                        <Select
                            value={this.state.address}
                            input={<Input name="age" id="addr-select" />}                        onChange={this.handleChange('address')}
                        >
                            {this.cities.map((city, index)=> (
                                <MenuItem value={index} key={index}>{city}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose.bind(this)} color="primary">
                Отмена
                </Button>
                <Button onClick={this.handleAdd.bind(this)} color="primary">
                Добавить
                </Button>
            </DialogActions>
            </Dialog>
        </div>
        )
    }
}

export default connect()(AddEvent)