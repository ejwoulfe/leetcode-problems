// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.
// Return the destination city, that is, the city without any path outgoing to another city.

function destCity(paths) {
    const targetCities = {};

    for (let i = 0; i < paths.length; i++) {
        targetCities[paths[i][0]] = targetCities[paths[i][0]] ? targetCities[paths[i][0]] - 1 : -1;
        targetCities[paths[i][1]] = targetCities[paths[i][1]] ? targetCities[paths[i][1]] + 1 : 1;
    }

    for (let key in targetCities) {
        if (targetCities[key] === 1) {
            return key;
        }
    }
};

console.log(destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"]
]))

console.log(destCity([
    ["A", "Z"]
]))