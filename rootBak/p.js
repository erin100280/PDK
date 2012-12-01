require('pops/pops.loader').Load();

var z,ext,f,ff,fi,fo,fis,fos
   , fs=require('fs')
   , path=require('path')
   , iDir='c:\\dev\\PopsDoc\\Docs\\'
   , oDir='c:\\dev\\PopsDoc\\Dist\\'
   , fils=fs.readdirSync(iDir)
   , css='<style>'+fs.readFileSync(iDir+'PopsDoc.css','utf8')+'</style>'
   , cssMark='<link rel="stylesheet" href="PopsDoc.css" type="text//css" media="all" charset="utf-8" />'
;

if(!path.existsSync(oDir))
   fs.mkdirSync(oDir);

for(lp=0;lp<fils.length;lp++){
   f=fils[lp];cout(f);
   fi=iDir+f;fo=oDir+f;
   ext=path.extname(f).LCase().replace('.','');
   if(ext=='htm'){
      z=fs.readFileSync(fi,'utf8');
      fs.writeFileSync(fo,z.replace(cssMark,css),'utf8');
   }
   else{
      fos=fs.createWriteStream(fo);
      fis=fs.createReadStream(fi);
      fis.pipe(fos);
      fis.on('end',function(){process.nextTick(function(){fos.destroySoon();})});
   };
};


//var re = new RegExp(/((?:[\n\r]|.)*)(Reporting-MTA.*)((?:[\n\r]|.)*)/);
//var arrMatches = strText.match(re);



function String() { [native code] }function (op){
                  var z=this.valueOf().split('|'),rv,a='',s=z[0],o=op||{};
                  if(z.length>1){a=s;s=z[1];}
                  eval('rv=function('+a+'){'+s+'};');
                  return rv.Extend(o);
               }function (op){return this.Fun(Object.CopyTo({$run:2},op||{}))}fu
nction toLowerCase() { [native code] }function (len,pad,dir){
                  var t=this,lf,rt,s=t.valueOf(),sl=s.length,
                     d=(dir==0||dir==2)?dir:1,l=def(len)?len:0,p=def(pad)?pad:'
'
                  ;
                  if(l + 1 >= sl){
                     if(d==1){//Pad
                        rt=Math.ceil((padlen=l-sl) / 2);
                        lf=padlen-rt;
                        s=Array(lf+1).join(p)+s+Array(rt+1).join(p);
                     }
                     else if(d==2)s=s+Array(l+1-sl).join(p);//PadR
                     else s=Array(l+1-sl).join(p)+s;//PadL
                  };
                  return s;
               }function (len,pad,dir) {return this.Pad(len,pad,0);}function (le
n,pad){return this.Pad(len,pad,2);}function (){
                  var n=this.valueOf()+'',
                     x=n.split('.'),
                     x1=x[0],
                     x2=x.length > 1 ? '.' + x[1] : '',
                     rgx=/(\d+)(\d{3})/
                  ;
                  while (rgx.test(x1)){
                     x1=x1.replace(rgx, '$1' + ',' + '$2');
                  };
                  return x1+x2;
               }function (x){var l,rv='';for(l=0;l<x;l++)rv+=this.valueOf();retu
rn rv;}function (old,val,all){
                  var l,a=(old.$type=='array')?old:[[old,val]],rv=this.valueOf()
,ln=a.length;
                  for(l=0;l<ln;l++){
                     if(all)while(rv.search(a[l][0])>-1)rv=rv.replace(a[l][0],a[
l][1]);
                     else rv=rv.replace(a[l][0],a[l][1]);
                  }
                  return rv;
               }function (old,val){return this.Replace(old,val,2);}function spli
t() { [native code] }function (){return O.SS(this.valueOf())}function (){return
this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');}function (){
                  var S=this.Val(),s=S.charCodeAt(S.length-1)==10?S.substr(0,S.l
ength-1):S;
                  return s.charCodeAt(s.length-1)==13?s.substr(0,s.length-1):s
               }function (){return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'
').replace(/\s+/g,' ');}function (){return this.replace(/^\s+/,'');}function (){
return this.replace(/\s+$/,'');}function toUpperCase() { [native code] }function
 valueOf() { [native code] }function (){
                  var t=this,v=t.valueOf();

               };function (op,onld){
      return ((this instanceof rv)?
            O.Class.InitClass(is, arguments)
         :  rv.Create.Call(arguments)
      );
   };;

node.js:201
        throw e; // process.nextTick error, or 'error' event on first tick
              ^
SyntaxError: Unexpected identifier
    at Function.State (c:\dev\PDK\node_modules\pops\pops.core.js:355:12)
    at c:\dev\PDK\node_modules\pops\pops.core.js:979:16
    at Object.<anonymous> (c:\dev\PDK\node_modules\pops\pops.router.js:14:24)
    at Module._compile (module.js:441:26)
    at Object..js (module.js:459:10)
    at Module.load (module.js:348:31)
    at Function._load (module.js:308:12)
    at Module.require (module.js:354:17)
    at require (module.js:370:17)
    at Object.<anonymous> (c:\dev\PDK\node_modules\pops\pops.http.js:4:10)

c:\dev\PDK>


