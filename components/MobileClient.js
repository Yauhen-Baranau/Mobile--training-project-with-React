import React from 'react';
import PropTypes from 'prop-types';
import {myEvents} from './events'
import './MobileClient.css';



class MobileClient extends React.PureComponent {
    static propTypes = {
        client: PropTypes.object.isRequired,
     
         
        
  }

  select = () => {
   myEvents.emit('itemSelect', this.props.client.id)
  }

  del = () => {
    myEvents.emit('delete', this.props.client.id)
  }

  render(){
      console.log('Client is render id-'+ this.props.client.id )
    
     
      return(
       
        <tr>
            <td>{this.props.client.f}</td>
            <td>{this.props.client.i}</td>
            <td>{this.props.client.o}</td>
            <td>{this.props.client.balance}</td>
            <td className={(this.props.client.balance>0)? 'active' : 'unactive'}>{(this.props.client.balance>0)?'Active':'Blocked'}</td>
            <td><button onClick={this.select}>Редактировать</button></td>
            <td><button onClick={this.del}>Удалить</button></td>
        </tr> 
      )
      
  }

}

export default MobileClient;


