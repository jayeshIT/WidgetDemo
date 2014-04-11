function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.indianic.activityindicator/" + s : s.substring(0, index) + "/com.indianic.activityindicator/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("com.indianic.activityindicator");
    this.__widgetId = "com.indianic.activityindicator";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "widget"
    });
    $.__views.widget && $.addTopLevelView($.__views.widget);
    $.__views.actind = Ti.UI.createActivityIndicator({
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
        width: Ti.UI.SIZE,
        id: "actind"
    });
    $.__views.actind && $.addTopLevelView($.__views.actind);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.showInd = function() {
        $.actind.show();
    };
    $.hideInd = function() {
        $.actind.hide();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;