//var pops=require('pops/pops.core');//.Global.Pops();
var a=arguments, z, zz 
,	pops=require('pops/pops.core').Global.Pops()
	,	cout=pops.cout
,	css=require('pops/pops.css')
	,	cssFromFile=css.FromFile
,	http=require('pops/pops.http')
,	rtr=require('pops/pops.router')
,	htm=require('pops/pops.html')
	,	guiItem=htm.GuiItem
,	spa=require('pops/pops.spa')

,	rt, srvr, staticServer
;

cout('pops.modDir='+pops.modDir);
cout('pops.modPath='+pops.modPath);
cout('process.execPath='+process.execPath);

var PB=new spa.pageBuilder(
	{
		noCssReset: 0
	,	meta: {
			
		}
	,	widgets: {
			widgets: []
		,	alias: {
				zButton: './widgets/zGUI/zButton.pwidget'
			}
		}
	

	,	gui: {
			outline: guiItem('div', 'PAGE', [
				guiItem('div', 'HEAD', [
					guiItem('widget|zButton', 'testBtn', { text: 'Sign in' })
				,	guiItem('div', 'navBar', [
						guiItem('breadCrumb', 'navCrumb')
					])
				])
			,	guiItem('div', 'BODY', [
					guiItem('div', 'content', [
						guiItem('contentPanel', 'CP')
					])
				])
			,	guiItem('div', 'FOOT')
			])
		,	css: [
				cssFromFile('./style/gui.css', { reload: 2 })
			]
		,	themes: {
			
			}
 		}
	}
,	function(err, sndr) {
		staticServer=new http.staticServer({
			baseDir: 'd:/temp'
		,	rootAccess: 0
		});
		
		rt= new rtr.router({
		   items: [
		      {mode:'get', path:'/', handler:function(req,res,Next){
		         pops.cout('== /'); Next();
		      } }
		   ,  {mode:'get', path:'/', handler:function(req,res,Next){
		         res.writeHead(200, {"Content-Type": "text/plain"});
		         res.end("<ROOT>\n");
		      } }
		   ,  {mode:'get', path:'/about', handler:function(req,res,Next){
		         pops.cout('== /about');
		         res.writeHead(200, {"Content-Type": "text/plain"});
		         res.end("about\n");
		      } }
		   ,  { mode: 'get', regex:'^/app', handler: sndr }
		   ,  { mode: 'get', regex:'^/ss', handler: staticServer }
		   ]
		});
		
		srvr=new http.server({
			auto: true
		,  name: 'mainServer'
		,  port: 1200
		,  router: rt
		});
	}
);

//cout('- DONE ');




