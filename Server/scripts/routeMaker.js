const fs = require('fs');

exports.makeRoutes = function (routeFolder) {
    let files = fs.readdirSync(routeFolder);
    for (let i = 0; i < files.length; i++) {
        routeFolder[i]
    }
}

