import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <div class="container-center-horizontal">
      <div className="homescreen">
        <div className="flex-col">
          <div className="overlap-group8">
            <div className="oxi">Oxi</div>
            <img
              className="line-4"
              src="line-1-1.svg"
            />
            <img
              className="oxi-logo-concept-6"
              src="oxi-logo-concept-6-1.png"
            />
            <img
              className="oxi-logo-concept-6"
              src="oxi-logo-concept-6-thicker-1.png"
            />
          </div>
          <div className="flex-row">
            <div className="my-carbon-usageroboto-normal-black-14px">My carbon usage:</div>
            <div className="x28th-december-2020roboto-normal-black-14px">28th December 2020</div>
          </div>
          <div className="address">
            <span className="span0">4 </span>
            <span className="roboto-normal-black-9px">days until reset</span>
          </div>
          <div className="overlap-group2">
            <h1 className="x510-kg">
              <span className="span0">&nbsp;</span>
              <span className="span1">510</span>
              <span className="span2">Kg</span>
            </h1>
          </div>
          <img
            className="line-1"
            src="line-1-1.svg"
          />
          <div className="accountsroboto-normal-robins-egg-blue-24px">ACCOUNTS</div>
        </div>
        <div className="flex-row-1">
          <div className="flex-col-1">
            <div className="overlap-group3">
              <div className="oxi-acroboto-light-alabaster-18px">Oxi A/C</div>
            </div>
            <div className="overlap-group1">
              <div className="text-1roboto-normal-robins-egg-blue-28px">
                <span className="roboto-normal-robins-egg-blue-28px">ø</span>
                <span className="roboto-normal-robins-egg-blue-24px">22</span>
              </div>
              <div className="price">£225.63</div>
            </div>
          </div>
          <div className="overlap-group10">
            <img
              className="line-2"
              src="line-2.svg"
            />
            <div className="ellipse-1"></div>
            <img
              className="arrow-2"
              src="arrow-2.svg"
            />
            <img
              className="arrow-1"
              src="arrow-1.svg"
            />
          </div>
          <div className="flex-col-2">
            <div className="overlap-group5">
              <div className="nameroboto-light-alabaster-18px">Cash A/C</div>
            </div>
            <div className="overlap-group7">
              <div className="price-1roboto-normal-robins-egg-blue-24px">£323.64</div>
            </div>
          </div>
        </div>
        <div className="overlap-group9">
          <div className="rectangle-7"></div>
          <div className="rectangle-40"></div>
          <div className="pay-with-oxi-payroboto-light-alabaster-18px">Pay with OxiPay</div>
        </div>
        <div className="overlap-group11">
          <div className="overlap-group">
            <img
              className="line-3"
              src="line-3-1.svg"
            />
            <img
              className="pay-1-1"
              src="pay-1-1.png"
            />
            <div className="rectangle-39"></div>
            <div className="rectangle-53"></div>
          </div>
          <div className="overlap-group6">
            <div className="rectangle-6"></div>
            <img
              className="home-run-1"
              src="run-1.png"
            />
            <div className="rectangle-38"></div>
          </div>
          <div className="overlap-group4">
            <img
              className="bar-chart-1"
              src="bar-chart-1.png"
            />
            <div className="rectangle-37"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
