/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    // sorted start times
    const starts = intervals.map(a => a[0]).sort((a, b) => a - b);
    // sorted end times
    const ends = intervals.map(a => a[1]).sort((a, b) => a - b);
    
    let rooms = 0;
    let endIndex = 0;
    for (let i = 0; i < starts.length; i++) {
        // check for overlap
        if (starts[i] < ends[endIndex]) rooms++;
        // otherwise, go to next end time
        else endIndex++;
    }
   
    return rooms;
};