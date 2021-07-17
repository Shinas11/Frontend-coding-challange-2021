import {Component} from 'react'
import UserItem from '../UserItem'
import './index.css'

class DigitalTimer extends Component {
  state = {userdetails: []}

  componentDidMount() {
    this.getDataFromServer()
  }

  getDataFromServer = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10')
    const data = await response.json()

    const formatedData = data.results.map(eachData => ({
      title: eachData.name.title,

      first: eachData.name.first,

      second: eachData.name.second,

      id: eachData.login.uuid,
      email: eachData.email,
      snumber: eachData.location.street.number,
      sname: eachData.location.street.name,
      city: eachData.location.city,
      state: eachData.location.state,
      country: eachData.location.country,
      postcode: eachData.location.postcode,
    }))
    console.log(formatedData)
    this.setState({userdetails: formatedData})
  }

  render() {
    const {userdetails} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="top-part">
            <h1 className="head">User List</h1>
          </div>

          <div className="user-card">
            {userdetails.map(eachuser => (
              <UserItem datas={eachuser} key={eachuser.id} />
            ))}
          </div>
          <div className="bottom-part">
            <p className="lower-part">Front end developer challenge 2021</p>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
