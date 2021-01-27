// from: https://leetcode.com/problems/design-underground-system/

var UndergroundSystem = function () {
  this.occupants = new Map();
  this.trips = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, station, t) {
  this.occupants.set(id, [station, t]);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, end, t) {
  const [start, beginTime] = this.occupants.get(id);
  const trip = [start, end].join();
  const [totalElapsed, numTrips] = this.trips.get(trip) || [0, 0];
  const elapsed = t - beginTime;
  this.trips.set(trip, [totalElapsed + elapsed, numTrips + 1]);
  this.occupants.delete(id);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (start, end) {
  const [totalElapsed, numTrips] = this.trips.get([start, end].join());
  return totalElapsed / numTrips;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
