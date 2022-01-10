/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["ui/ListViewProject/listviewproject/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
