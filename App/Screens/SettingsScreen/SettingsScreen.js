#!/usr/bin/env node

/**
 *      |    o             |
 * ,---.|---..,---.,---. --|--- ,---.
 * ,---||   |||---'|       |    |   |
 * `---^`---'``---'`    o  `---'`---'
 *
 * SettingsScreen/SettingsScreen.js
 * @author [Jose Ramon Aleman](https://github.com/jraleman)
 */

// ~~ Dependencies ~~
import React from 'react';
import {
  Container,
  Content,
  Text,
} from 'native-base';
// ~~ Local Dependencies ~~
import styles from './styles';

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class SettingsScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return;
  }
  /**
   * Renders the component.
   * @return { string } - RN markup for the component
   */
  render () {
    return (
      <React.Fragment>
        <Container style={ styles.container }>
          <Content style={ styles.content }>
            <Text>{ "SettingsScreen" }</Text>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};

export default SettingsScreen;
