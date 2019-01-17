import {
    ADD_EVENT,
    CLEAR_EVENTS,
    TOGGLE_EVENT,
    SELECTALL_EVENTS,
    DESELECTALL_EVENTS,
} from '../constants'

const initialState = [{
        id: 0,
        name: 'Мероприятие 1',
        date: '20.08.2017',
        address: 'Нижний Новгород',
        selected: false
    },
    {
        id: 1,
        name: 'Мероприятие 2',
        date: '13.09.2017',
        address: 'Саров',
        selected: true
    },
    {
        id: 2,
        name: 'Мероприятие 3',
        date: '03.10.2017',
        address: 'Арзамас',
        selected: false
    }
]

export default function events(state = initialState, action) {
    switch (action.type) {
        case ADD_EVENT:
            return [
                ...state,
                {
                    id: state.reduce((maxId, event) => Math.max(event.id, maxId), -1) + 1,
                    name: action.name,
                    date: action.date,
                    address: action.address,
                    selected: false

                }
            ]

        case CLEAR_EVENTS:
            return state.filter(event =>
                !event.selected
            )
        case TOGGLE_EVENT:
            return state.map(event =>
                event.id === action.id ? { ...event,
                    selected: !event.selected
                } :
                event
            )

        case SELECTALL_EVENTS:
            return state.map(event => Object.assign(event, {
                selected: true
            }))
        case DESELECTALL_EVENTS:
            return state.map(event => Object.assign(event, {
                selected: false
            }))
        default:
            return state
    }
}