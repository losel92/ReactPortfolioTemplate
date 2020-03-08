import React, { Component } from "react"

class Header extends Component {
  state = {}
  render() {
    return (
      <header className="text-center">
        <div className="d-inline-block p-3">
          <div className="d-flex flex-direction-row justify-content-center">
            {this.props.pages.map(element => {
              return (
                <div
                  className={this.getClasses(element)}
                  onClick={() => this.props.updatePage(element)}
                  key={element}
                >
                  <span>{element}</span>
                </div>
              )
            })}
          </div>
        </div>
      </header>
    )
  }

  getClasses = name => {
    let classes = "btn font-weight-bold px-2"
    if (this.props.selectedPage === name) {
      classes += " selected"
    }
    return classes
  }
}

export default Header
