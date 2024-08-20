const fs = require('fs');

exports.makeRoutes = function (routeFolder, output_file) {
    let routes = {};
    let files = fs.readdirSync(routeFolder);
    for (let i = 0; i < files.length; i++) {
        let fName = files[i].slice(0, -3);
        routes[fName.toLowerCase()] = ["/" + fName.toLowerCase(), require(routeFolder + "/" + fName)];
    }
    return routes;
}

