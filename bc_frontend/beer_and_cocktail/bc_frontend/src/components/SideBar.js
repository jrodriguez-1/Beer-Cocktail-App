import React from 'react'
import '../App.css'
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";



class SideNav extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          activePath: props.location.pathname ,
          items: [
            {
              path: '/', 
              name: 'Home',
              css: 'fa fa-fw fa-home',
              key: 1 
            },
            {
              path: '/beer',
              name: 'Beers',
              css: 'fas fa-beer',
              key: 2
            },
            {
              path: '/cocktails',
              name: 'CockTails',
              css: 'fas fa-cocktail',
              key: 3
            },
            {
              path: '/favorites',
              name: 'List',
              css: 'fas fa-heartbeat',
              key: 4
            }
          ]
        }  
      } 

      onItemClick = (path) => {
        this.setState({ activePath: path });
      }
      render() {
        const { items, activePath } = this.state;
        return (
          <StyledSideNav>
            {
             
              items.map((item) => {
               
                return (
                  <NavItem 
                  path={item.path} 
                  name={item.name} 
                  css={item.css} 
                  onItemClick={this.onItemClick} 
                  active={item.path === activePath} 
                  key={item.key}
                  />
                );
              })
            }
          </StyledSideNav>
        );
      }
    } 

const RouterSideNav = withRouter(SideNav);

class NavItem extends React.Component {
  
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
      }
    render() {
        const { active } = this.props;
     
      return (
        <StyledNavItem active={active}>
          
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
        <NavIcon></NavIcon>
        </Link>
        </StyledNavItem>
        
      );
    }
  }

const SideBar = () => {
    return (
        <div>
            <RouterSideNav></RouterSideNav>
        </div>
    )
}

export default SideBar;


const StyledSideNav = styled.div`
  position: fixed;    
  height: 100%;
  width: 80px;     
  z-index: 1;     
  top: 3.4em;   
  background: linear-gradient(90deg, #B8860B 0%, rgb(26, 23, 23) 100%);
  overflow-x: hidden;     
  padding-top: 10px;
`;

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; 
  text-align: center; 
  margin-bottom: 0;   
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "##B8860B" : "#000000"};
    :hover {
      opacity: 0.7;
      text-decoration: none; 
      box-shadow: 0 0 50px #ff2121;
      transition-delay: 0.5ms;
    }  
  }
`;
const NavIcon = styled.div`

`;
