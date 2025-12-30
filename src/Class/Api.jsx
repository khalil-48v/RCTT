import React, { Component } from 'react'
import axios from 'axios'

export default class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tach: [
        {
          userId: 1,
          id: 8,
          title: "titre",
          completed: false
        }
      ]
    }
  }

  componentDidMount() {
    this.FetchData()
  }

  async FetchData() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
    this.setState({ tach: res.data })
  }

  display() {
    return this.state.tach.map((ft) => (
      <tr key={ft.id}>
        <td>{ft.userId}</td>
        <td>{ft.title}</td>
        <td>{ft.completed ? "Done" : "Pending"}</td>
      </tr>
    ))
  }

  render() {
    return (
      <div className="container">
        <h3 className="mt-3">User Table</h3>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Title</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Developer</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Designer</td>
              <td>Inactive</td>
            </tr>
            {/* Dynamic rows */}
            {this.display()}
          </tbody>
        </table>
      </div>
    )
  }
}
