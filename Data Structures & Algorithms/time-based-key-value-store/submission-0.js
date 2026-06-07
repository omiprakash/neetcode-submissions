class TimeMap {
    constructor() {
        this.map = new Map();
    }

    set(key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }

        this.map.get(key).push([timestamp, value]);
    }

    get(key, timestamp) {
        if (!this.map.has(key)) return "";

        const arr = this.map.get(key);

        let left = 0;
        let right = arr.length - 1;

        let result = "";

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            const [time, value] = arr[mid];

            if (time <= timestamp) {
                result = value;
                left = mid + 1; // search for larger valid timestamp
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
