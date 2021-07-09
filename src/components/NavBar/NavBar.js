import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu stackable>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    <img src='https://res.cloudinary.com/dami-r92/image/upload/v1625698357/keldon-comics/logokeldon_zyqmob.png' alt='Logo-de-keldon-comics' />
                    <Link className='Link' to='/'> Keldon Comics </Link>
                </Menu.Item>

                <Menu.Item
                    name='nosotros'
                    active={activeItem === 'nosotros'}
                    onClick={this.handleItemClick}
                >
                    <Link className='Link' to='/category/manga'> Manga </Link>
                </Menu.Item>
                <Menu.Item
                    name='nosotros'
                    active={activeItem === 'nosotros'}
                    onClick={this.handleItemClick}
                >
                    <Link className='Link' to='/category/comic'> Comic </Link>
                </Menu.Item>


                <Menu.Item
                    name='carrito'
                    active={activeItem === 'carrito'}
                    onClick={this.handleItemClick}>
                    <div>
                        <Icon name='shopping cart' />
                    </div>

                    Carrito
                </Menu.Item>
            </Menu>
        )
    }
}
