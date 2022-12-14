const Thermostat = require('./thermostat')

describe("thermostat", () => {

  it ("should return a temperature of 20 by default", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20)
  })

  it ("should be increased in increments of 1" , () =>{
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe (22)
  })

  it ("should be decrease in increments of 1" , () =>{
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe (19)
  })
  
  it ("should not exceed 25 temp when PSM is on", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25)
  })

  it ("Should exceed 25 when psm is off" , () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 6 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(26)
  })

  it ("Should be able to switch between psm modes" , () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25)
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(27)
  })

  it("Should reset the temperature back to 20" , () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20)
  })


})