// src/thermostat.js
'use strict';

function Thermostat () {
  this.temperature = 20;
  this.MINIMUM_TEMPURATURE = 10;
  this.powerSavingMode = true;
}

Thermostat.prototype = {
  getCurrentTemperature: function () {
    return this.temperature;
  },
  up: function () {
    this.temperature += 1;
  },
  down: function () {
    if (this.isMinimumTempurature()) {
      return;
    }
    this.temperature -= 1;
  },
  isMinimumTempurature: function () {
    return this.temperature === this.MINIMUM_TEMPURATURE;
  },
  isPowerSavingModeOn: function () {
    return this.powerSavingMode === true;
  },
  switchPowerSavingModeOff: function () {
    this.powerSavingMode = false;
  },
  switchPowerSavingModeOn: function () {
    this.powerSavingMode = true;
  }
};
