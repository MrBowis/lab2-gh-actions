function fibonacci(n) {
    if (n < 0) throw new Error('Error: entrada negativa');
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

function factorial(n) {
    if (n < 0) throw new Error('Error: entrada negativa');
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];

    Object.keys(graph).forEach(node => {
        distances[node] = Infinity;
    });
    distances[start] = 0;
    queue.push({ node: start, dist: 0 });

    while (queue.length) {
        queue.sort((a, b) => a.dist - b.dist);
        const { node } = queue.shift();
        if (visited[node]) continue;
        visited[node] = true;

        for (const neighbor in graph[node]) {
            const newDist = distances[node] + graph[node][neighbor];
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                queue.push({ node: neighbor, dist: newDist });
            }
        }
    }
    return distances;
}

module.exports = {
    fibonacci,
    factorial,
    dijkstra
};