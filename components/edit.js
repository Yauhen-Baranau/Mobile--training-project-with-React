import React from 'react';
import PropTypes from 'prop-types';
import './edit.css'
import {myEvents} from './events'


class Edit extends React.PureComponent {

    static propTypes = {
      elem: PropTypes.object,
      mode: PropTypes.number.isRequired,
      clients: PropTypes.array,
      
      
    }


    objRef = {f:null,i:null,o:null,b:null,key:null}

 f = (ref) => {

         if ( (ref!==null) ){
              
            switch ( ref.name) {
                case 'i':
                    this.objRef.i = ref
                 break;
                case 'f':
                    this.objRef.f = ref
                  break;
                case 'o':
                    this.objRef.o = ref
                     break;
                case 'b':
                    this.objRef.b = ref
                  
                      }
                    }
                   
    }
       

    


    ff = () => {

      let oob = {f:this.objRef.f.value,i:this.objRef.i.value,o:this.objRef.o.value,b:this.objRef.b.value, key:null}

   if (this.props.mode===2){
        oob.key=this.props.elem.id
        myEvents.emit('edit', oob)
      }

      if (this.props.mode===3) {
        
        myEvents.emit('save', oob)
      }
    }
   
    render(){
       console.log('Edit block render')

        return(
<div>
<br/>
{  (this.props.mode===3)&&
         <div> 
            <span className={'fl'}>Имя </span><input name={'f'}  ref={this.f}  type={'text'}/><br/>
            <span className={'fl'}>Фамилия </span><input name={'i'}  ref={this.f}  type={'text'}/><br/>
            <span className={'fl'}>Отчество </span><input name={'o'}   ref={this.f} type={'text'}/><br/>
            <span className={'fl'}>Баланс </span><input name={'b'}  ref={this.f}  type={'text'}/><br/>
            <input onClick={this.ff} type="button" defaultValue="Сохранить"/>
        </div>
    }
    
      {  (this.props.mode===2)&&
        <div>
            <span className={'fl'}>Имя </span><input name={'f'}  ref={this.f}  type={'text'} defaultValue={this.props.elem.f}/><br/>
            <span className={'fl'}>Фамилия </span><input name={'i'}   ref={this.f} type={'text'} defaultValue={this.props.elem.i}/><br/>
            <span className={'fl'}>Отчество </span><input name={'o'}  ref={this.f}  type={'text'} defaultValue={this.props.elem.o}/><br/>
            <span className={'fl'}>Баланс </span><input name={'b'}  ref={this.f} type={'text'} defaultValue={this.props.elem.balance}/><br/>
            <input onClick={this.ff} type="button" defaultValue="Сохранить"/>
        </div> 
    }
       
    
    
</div>
        )
    }
}


export default Edit;