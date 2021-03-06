// spec/ThermostatSpec.js
'use strict';

describe('Thermostat', function () {

  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function () {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases current tempurature with .up()', function () {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the tempurauture with .down', function () {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
  it('has a miniumum tempurautre of 10 degrees', function () {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', function () {
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });

  it('can switch PSM off', function () {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });
  it('can switch PSM on', function () {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
});
