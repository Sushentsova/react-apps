import React, { Component } from 'react';

import { Layout } from 'antd';

import StarHeader from '../star-header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage } from '../pages';

import { SwapiServiceProvider } from '../swapi-service-context';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StarshipDetails from '../sw-components/starship-details';

const { Header, Content } = Layout;

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
                        DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  render() {

    const { isLoggedIn } = this.state;


  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={this.state.swapiService} >
        <Router>
          <Layout>
            <Header className="header">
              <StarHeader onServiceChange={this.onServiceChange} />
            </Header>

            <Layout
                style={{
                  padding: '0 24px 24px',
                }}
            >
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 140,
                }}
              >
                <RandomPlanet />
              </Content>               
            </Layout>

            <Layout
              style={{
                padding: '0 24px 24px',
              }}
            >
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Routes>
                  <Route path="/"
                        element={<h2>Welcome to StarDB</h2>}
                        />
                  <Route path="/people" element={<PeoplePage/>} />
                  <Route path="/people/:id" element={<PeoplePage/>} />
                  <Route path="/planets" element={<PlanetsPage/>} />
                  <Route path="/starships" element={<StarshipsPage/>} />
                  <Route path="/starships/:id"
                        render={({ match }) => {
                          const { id } = match.params;
                          return <StarshipDetails itemId={id} />
                        }}/>

                  <Route path="/login" element={<LoginPage 
                  isLoggedIn = {isLoggedIn}  
                  onLogin ={this.onLogin}/>} />
                  
                  <Route path="/secret" element={<SecretPage 
                  isLoggedIn = {isLoggedIn} />} />

                  <Route render={() => <h2>Page not found</h2>} />
                </Routes>
              </Content>             
            </Layout>
          </Layout>
        </Router>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
};
}