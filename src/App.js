import Modal from './UserCards/Modal';
import UserCards from "./UserCards/UserCards";
import React,  { Component } from 'react';

class App extends Component { 
  state = {
    isOpenModal: false,
    id: 0,
  };
  
  getData = a => {
    this.setState({ id: a.currentTarget.id });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({ isOpenModal: !this.state.isOpenModal });
  }

  render() {
    const { isOpenModal, id } = this.state;
    console.log(isOpenModal);

    return (
      <div>
        <UserCards openModal={this.getData}/>
        {isOpenModal && <Modal onClick={this.toggleModal} id={id}/>}
      </div>
    );
  }
};

export default App;
