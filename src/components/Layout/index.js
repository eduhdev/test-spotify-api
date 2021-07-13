import PropTypes from 'prop-types'
import React, { Component } from 'react'

import NavBar from 'plurall-header'

import { getToken, setToken } from 'utils'

import styles from './Layout.module.css'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {}

  componentDidMount() {}

  handleLogout = path => {
    setToken('')
    window.location = path
  }

  render() {
    const {
      props: { children },
    } = this

    const { content, 'nav-bar': navBar } = styles

    return (
      <>
        <div className={navBar}>
          <NavBar
            data={{
              menu: {
                items: [
                  { name: 'Início', slug: 'account', href: '/', id: 0 },
                  { name: 'Buscar', slug: 'busca', href: '/busca', id: 1 },
                ],
              },
            }}
            logout={this.handleLogout}
            service="reader"
            userToken={getToken()}
          />
        </div>

        <div className={content}>{children}</div>
      </>
    )
  }
}

export default Layout
