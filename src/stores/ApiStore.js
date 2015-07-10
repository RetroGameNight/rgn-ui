import { Store } from 'flummox'

export default class ApiStore extends Store {
  constructor(flux) {
    super();

    const apiActions = flux.getActions('api');
    this.register(apiActions.login, this.handleLogin);
    this.register(apiActions.logout, this.handleLogout);

    this.state = {
      activeUser: null
    }
  }
  handleLogin() {
    fetch('http://localhost:3000/logged-in', {
        credentials: 'include' 
      })
      .then((response) => {
        return response.json()
      })  
      .then((json) => {
        this.setState({
          activeUser: json
        })
      })  
      .catch((error) => {  
        console.log('error', error)
      });
  }
  handleLogout() {
    fetch('http://localhost:3000/logout', {
        credentials: 'include'    
      })
      .then((response) => {
        this.setState({
          activeUser: null
        })
      })  
      .catch((error) => {  
      });
  }
}
