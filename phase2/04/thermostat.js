class Thermostat{
  constructor(){
    this.temperature = 20;
    this.maxTemp = 25
    this.psm = true;
  }

  getTemperature(){
    return this.temperature;
  }

  up() {
    if (this.temperature < this.maxTemp){
      this.temperature +=1;
    }
    return this.temperature;
  }

  down() {
    this.temperature -=1;
    return this.temperature;
  }

  setPowerSavingMode(bool){
    this.psm = bool
    if (this.psm){
      this.maxTemp = 25
    }else {
      this.maxTemp = 32
    }
  }

  reset(){
    this.temperature = 20
  }
}

module.exports = Thermostat