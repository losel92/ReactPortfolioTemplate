import React, { Component } from "react"

import Header from "./Components/Header"
import Footer from "./Components/Footer"

import ProjectsPage from "./Components/Projects/ProjectsPage"
import AboutPage from "./Components/About/AboutPage"
import ContactPage from "./Components/Contact/ContactPage"

import "./App.scss"

class App extends Component {
  state = {
    pages: {
      About: AboutPage,
      Projects: ProjectsPage,
      Contact: ContactPage
    },
    selectedPage: "About"
  }
  render() {
    return (
      <React.Fragment>
        <Header
          pages={Object.keys(this.state.pages)}
          selectedPage={this.state.selectedPage}
          updatePage={this.updatePage}
        />
        <main>{this.getPage()}</main>
        <Footer />
      </React.Fragment>
    )
  }

  //Displays the currently selected page or returns an error if the selectedPage is not found inside the pages object
  getPage = () => {
    const PageName = this.state.pages[this.state.selectedPage]

    if (this.state.selectedPage in this.state.pages) {
      return <PageName />
    }
    return (
      <h1>
        Error: the selectedPage '{this.state.selectedPage}' was not found in the
        pages object.
      </h1>
    )
  }

  //Updates the page and header to the selected key
  updatePage = key => {
    this.setState(state => {
      return { selectedPage: key }
    })
  }
}

export default App
