var X=exports
,	pc=require('pops/pops.core')
	,	cout=pc.cout
,	pa=require('pops/pops.applet')
,	phtml=require('pops/pops.html')
	,	GuiItem=phtml.GuiItem
;

pa.CreateApplet(X, 'Rz.Content.Base', {
	outline: [
		GuiItem('div', 0, "Rz Content Base head", 0, [
			GuiItem('div', 0, "Rz Content Base crumbBarContainer", 0, [
				GuiItem('zGui.zCrumbBar', 0, "Rz Content Base crumbBar")
			])
		,	GuiItem('div', 0, "Rz Content Base body")
		])
	]
,	Init: function(e, ops) {}
,	SetupElem: function(elem, props, ops) {
		var z;
		if(z=props.text) delete props.text;
		props.string=z||props.options.text||'';
		props.endString='';
	}
});

