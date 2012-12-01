var z
,	$pc=require('pops/pops.core').Global.Pops()
,	$css=require('pops/pops.css')
;

obj1={
	'display': 'block'
,	'position': 'absolute'
}
obj2={
	'div.hi, a': {
		'display': 'block'
	,	'position': 'absolute'
	}
,	'div.bye, span': {
		'display': 'block'
	,	'position': 'inherit'
	}
}

cout('obj1:\n'+$css.Code(obj1)+'\n\n');
cout('obj1:\n'+$css.Code(obj1, '', ' ')+'\n\n');
cout('obj2:\n'+$css.Code(obj2)+'\n\n');
