const fs = require('fs');

class FactIntent {
  constructor(app) {
    this.name = 'factIntent';
    this.slots = {};
    this.utterances = require('./fact-intent.json');
    this.loadFacts();
  }

  loadFacts() {
    this.facts = fs.readFileSync('./intents/facts.txt', 'utf8').split('\n');
  }

  randomFact() {
    return this.facts[Math.floor(Math.random()*this.facts.length)];
  }

  execute(req, res) {
    res.say(this.randomFact());
    res.shouldEndSession(true);
  }
}

module.exports = FactIntent;
