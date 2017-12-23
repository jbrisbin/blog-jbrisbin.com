import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "gatsby-link";
import SVGelem from "../Other/SVGelem.jsx";
import { ICONS, LOGOS } from "../../utils/constants";
import config from "../../utils/siteConfig";
import avatar from "../Article/Author/avatar.jpg";

const Wrapper = styled.div`
  background: ${props => props.theme.info.backgrounds.wrapper};
  height: 100%;
  left: 0;
  min-height: ${props => (props.appInitialState ? "100vh" : "0")};
  position: absolute;
  right: 0;
  top: ${props => (props.isRolledDown ? "0" : "-100%")};
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1), background 0s;
  overflow: auto;
  z-index: 2;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    left: ${props =>
      props.navigatorIsAside ? props.theme.navigator.sizes.asideWidth : "0"};
  }
`;

const Content = styled.div`
  color: ${props => props.theme.info.colors.text};
  display: flex;
  flex-direction: column;
  font-size: 1.05em;
  height: 100%;
  justify-content: center;
  line-height: 1.5;
  max-width: ${props => props.theme.info.sizes.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding: 2em;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    p {
      font-size: 1.1em;
    }
  }

  a {
    border-bottom: 1px solid ${props => props.theme.info.colors.linkHover};
    color: ${props => props.theme.info.colors.link};
    font-weight: bold;
    text-shadow: 2px 2px ${props => props.theme.info.backgrounds.wrapper},
      -2px 2px ${props => props.theme.info.backgrounds.wrapper},
      -2px -2px ${props => props.theme.info.backgrounds.wrapper},
      -2px 2px ${props => props.theme.info.backgrounds.wrapper},
      -2px 0 ${props => props.theme.info.backgrounds.wrapper},
      2px 0 ${props => props.theme.info.backgrounds.wrapper};
    display: inline-block;
    line-height: 1.1;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      color: ${props => props.theme.info.colors.linkHover};
      border-color: ${props => props.theme.info.colors.link};
    }
  }
`;

const Logo = styled.span`
  display: block;
  margin-bottom: 1em;
  width: 600px;
  max-width: 80%;
  fill: ${props => props.theme.info.colors.text};
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  width: 64px;
  height: 64px;
  position: relative;
  margin: 0 0 0 35em;

  > span {
    background: ${props => props.theme.info.backgrounds.btn};
    color: ${props => props.theme.info.colors.btn};
    fill: currentColor;
    border-radius: 100%;
    display: block;
    height: 44px;
    width: 44px;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    padding: 16px;
  }
`;

const Avatar = styled.div`
  background: transparent url(${avatar}) no-repeat;
  padding-left: 10em;
  min-height: 8em;
`;

const Info = props => (
  <Wrapper
    isRolledDown={props.isRolledDown}
    inTransition={props.inTransition}
    navigatorIsAside={props.navigatorIsAside}
  >
    <Content>
      <Logo>
        <SVGelem svg={LOGOS.MAIN} />
      </Logo>
      <div>
        <Avatar>
          <p>
            Jon is a <a href="https://www.linkedin.com/in/jon-brisbin-5406a06/" target="_blank" rel="noopener">Software Engineer</a> with over two decades of experience architecting solutions in large-scale systems. He was a founding member of the <a href="https://github.com/reactor/reactor-core" target="_blank" rel="noopener">Reactor Framework</a> while working for <a href="https://pivotal.io/" target="_blank" rel="noopener">Pivotal</a> and helped push the industry forward with next-generation work to enable developers to quickly code applications with the <a href="https://github.com/spring-projects/spring-framework" target="_blank" rel="noopener">Spring Framework</a>. He also contributed key work to the Riak ecosystem while working at the then custodian of <a href="https://github.com/basho/riak" target="_blank" rel="noopener">the Riak Open Source database</a>, Basho. He is currently helping to develop the next generation of high-performance Application Performance Monitoring (APM) with the premier APM vendor of the future: <a href="https://www.instana.com/" target="_blank" rel="noopener">Instana</a>.
          </p>
          {/* <p>
            Jon is also a lay (non-professional) pastor serving the local church in various capacities. He sometimes blogs about theological matters. He holds to the doctrines of Grace as taught by the early church and Protestant Reformers. Although not raised in a creedal church, he finds nothing to disagree with in the Westminster Confession and holds to the traditional views on Justification and Sanctification as taught by the early church, from Paul onward.
          </p> */}
        </Avatar>
      </div>
      <CloseBtn onClick={props.btnOnClick} aria-label="Close">
        <span>
          <SVGelem svg={ICONS.CLOSE} />
        </span>
      </CloseBtn>
    </Content>
  </Wrapper>
);

export default Info;

//
