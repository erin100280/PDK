var X=exports
,	pc=require('pops/pops.core')
	,	cout=pc.cout
,	phtml=require('pops/pops.html')
	,	GuiItem=phtml.GuiItem

,	tmplt=(
		'<div %id% class="zGUI zWindow">'
//	+		'<span class="caption">%caption%</span>'	
	+	'</div>'	
	)
;



X.GetGUI=function(e, op) {
	return tmplt.Replace('%id%', (op.id)? 'id="'+op.id+'"' : '')
	            .Replace('%caption%', op.text||'');
};
