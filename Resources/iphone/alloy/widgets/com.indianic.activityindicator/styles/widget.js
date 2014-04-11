function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.indianic.activityindicator/" + s : s.substring(0, index) + "/com.indianic.activityindicator/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "Label",
    style: {
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "actind",
    style: {
        color: "green",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 26,
            fontWeight: "bold"
        },
        message: "Loading...",
        style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
        top: 50,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
} ];