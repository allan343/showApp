import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext'
import PropTypes from 'prop-types';
import { countNotesForFolder } from '../notes-helpers'


export default class ToWatch extends React.Component {
  static contextType = ApiContext;



  render() {
    return <ShowListNav></ShowListNav>
    
  
  }
}
