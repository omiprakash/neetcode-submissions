class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((pos, i) => [pos, speed[i]]);

        // sort by position descending
        cars.sort((a, b) => b[0] - a[0]);

        let fleets = 0;
        let prevTime = 0;

        for (let [pos, spd] of cars) {
            const time = (target - pos) / spd;

            // new fleet forms
            if (time > prevTime) {
                fleets++;
                prevTime = time;
            }
        }

        return fleets;
    }
}
