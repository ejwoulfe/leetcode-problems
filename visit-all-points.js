// On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.


function minTimeToVisitAllPoints(points) {
    let totalSeconds = 0;
    for (let i = 0; i < points.length - 1; i++) {
        let x1 = points[i][0];
        let y1 = points[i][1];
        let x2 = points[i + 1][0];
        let y2 = points[i + 1][1];
        let xSeconds = Math.abs(x1 - x2);
        let ySeconds = Math.abs(y1 - y2);

        if (xSeconds > ySeconds) {
            totalSeconds += xSeconds;
        } else {
            totalSeconds += ySeconds
        }



    }
    return totalSeconds;


}

console.log(minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0]
]))