var G=global, X=exports
,	S=son
	,	Class=S.Class
	,	cout=son.cout
,	SApplets=son.applets
	,	Applet=SApplets.Applet
,	applet
;

applet=X.applet=Applet('Rz.Content.Base', {
	OPTIONS: {}
,	INIT: function(elem, ops, cb) {
		var t=this, z
		,	downBtn=this.$downBtn={}
		;

		elem.onclick=function() { t.Fire('click'); };
		elem.onmouseover=function() {
			elem.AddClass('HOVER');
			t.Fire('mouseOver');
		};
		elem.onmouseout=function() {
			elem.RemoveClass('HOVER');
			t.Fire('mouseOut');
		};
		elem.onmousedown=function(e) {
			if(!t.$disabled) {
				var k, z=e.button;
				t.$down=2;
				downBtn[z]=2;
				if(z==0) elem.AddClass('ACTIVE');
				DOC.Once('mouseUp', function(e) {
					if(z==e.button) {
						downBtn[z]=0
						if(z==0) elem.RemoveClass('ACTIVE');
						t.Fire('mouseUp', 0, e);
					};
				});
				t.Fire('mouseDown', 0, e);
			};
		};
		if(2) elem.onmouseup=function(e) {
			if(!t.$downBtn[e.button]) t.Fire('mouseUp', 0, e);
		};
	}



});

X.Create=function() { cout('TESTER!'); };
X.tst=function() { cout('TESTING!'); };


