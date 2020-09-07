function Pirate(name, job) {
  this.name = name;
  this.job = job;
  if (job === undefined) { this.job = 'scallywag' };
  this.cursed = false;
  this.robShip = function () {
    this.booty = this.booty + 100;
    return 'YAARRR!';
  }
  this.booty = 0;


}

module.exports = Pirate;