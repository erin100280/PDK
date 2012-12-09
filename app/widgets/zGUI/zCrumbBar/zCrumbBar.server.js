var X=exports
,	pc=require('pops/pops.core')
	,	cout=pc.cout
,	phtml=require('pops/pops.html')
	,	GuiItem=phtml.GuiItem
;



X.SetupElem=function(elem, props, ops) {
	var z;
	if(z=props.text) delete props.text;
	props.string=z||props.options.text||'';
	props.endString='';
};
