//var pops=require('pops/pops.core');//.Global.Pops();
var a=arguments, z, zz 
	,	pops=require('pops/pops.core').Global.Pops()
	,	http=require('pops/pops.http')
	,	rtr=require('pops/pops.router')
	,	htm=require('pops/pops.html')
		,	guiItem=htm.guiItem
	,	spa=require('pops/pops.spa')
	,	poop=0
;

/*var a=arguments;
for(var i=0, l=a.length; i<l; i++) cout('arg #'+i+': '+a[i]+'  -  '+JSON.stringify(a[i])+'\n');
cout('\n\n');*/
var a=process.argv;
for(var i=0, l=a.length; i<l; i++) cout('arg #'+i+': '+a[i]);
cout('\n\n');

var staticServer=new http.staticServer({
	baseDir: 'd:/temp'
,	rootAccess: 0
});

var styles={
	PAGE: {
		 display:	'block'
	,	position: 'absolute'
	,	     top:	'0px'
	,		 left:	'0px'
	,	  height:	'100%'
	,		width:	'100%'
	}
};

var PB=new spa.pageBuilder({ noCssReset: 0
	,	meta: {
			
		}
	,	gui: {
			outline: guiItem('div', 'PAGE', { style: styles.PAGE }, [
				guiItem('div', 'HEAD')
			,	guiItem('div', 'BODY', [
					guiItem('div', 'side')
				,	guiItem('div', 'content', [
						guiItem('contentPanel', 'CP')
					])
				])
			,	guiItem('div', 'FOOT')
			])
		,	themes: {
			
			}
 		}
});

var rt= new rtr.router({
   items: [
         {mode:'get', path:'/', handler:function(req,res,Next){
            pops.cout('== /'); Next();
         }}
      ,  {mode:'get', path:'/', handler:function(req,res,Next){
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("<ROOT>\n");
         }}
      ,  {mode:'get', path:'/about', handler:function(req,res,Next){
            pops.cout('== /about');
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("about\n");
         }}
      ,  { mode: 'get', regex:'^/app', handler: PB }
      ,  { mode: 'get', regex:'^/ss', handler: staticServer }
   ]
});

var srvr=new http.server({
		auto: true
   ,  name: 'mainServer'
   ,  port: 1200
   ,  router: rt
});
//cout('- DONE ');




