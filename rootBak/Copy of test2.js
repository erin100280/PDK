//var pops=require('pops/pops.core');//.Global.Pops();
var pops=require('pops/pops.core').Global.Pops();
var http=require('pops/pops.http');
var rtr=require('pops/pops.router');
var spa=require('pops/pops.spa');
var poop=0;



if(poop==0){
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
      ]
   });
   
   var srvr=new http.server({z:0
      ,  name: 'mainServer'
      ,  port: 1200
      ,  router: rt
   });
   //cout('- DONE ');
}
else if(poop==1){
   var j={},p='rad';
   Object.defineProperty(j,'tester',{
         get:function(){return p}
      ,  set:function(val){p=val+'_HI'}
   });
   
   console.log('j.tester='+j.tester);
   j.tester='DuDe';
   console.log('j.tester='+j.tester);
   
   var cls=Class('cls',{
         Private:{hi:'hello'}
      ,  Hi:function(nam){cout(hi+' '+nam)}
      ,  hiVal:Property({
               Get:function(){return hi}
            ,  Set:function(v){hi=v}
         })
   })
   
   var ci1=new cls();
   ci1.Hi('World');
   ci1.hiVal='Yo';
   ci1.Hi('World');
   
   
}
else if(poop==2){//-mongoose
   //var mongoose = require('mongoose');
   
   var Schema = mongoose.Schema
     , ObjectId = Schema.ObjectId;
   
   var BlogPost = new Schema({
       author    : ObjectId
     , title     : String
     , body      : String
     , date      : Date
   });

   mongoose.connection.on('open',function(){
      cout('==OPEN==');
   
   });
   mongoose.connect('mongodb://localhost/cool');
   cout('-==-');
}
else if(poop==3){//-Interface
   var if1=Interface('if1',{
         test:'function'
   });

   var cls1=Class('cls1',{
         Implements: if1
      ,  test:function(){cout('::::CRACK::::')}
   });
   var cls1_1=new cls1;
   cls1_1.test();
}
else if(poop==4){
   var z, zz
      ,  mdb=require('mongodb/')
      //,  mgs=require('mongoose/')
   ;
}
else if(poop==5){//- mongodb
   cout('tester zz capwell');
   var z
      ,  mdb=require('pops/db/pops.db.mongo')
      
   ;

   var jj=new mdb.schema('one', 'two');
   var kk=mdb.schema('one', 'two');
   var sc1=mdb.Schema({
      
   })

   jj();
   mdb.schema.POW();

/*
   var db=new mdb.db({
         name: 'test'
      ,  host: 'localhost'
      ,  port: 186
      ,  schemas: {
               user: {
                     firstName: String
                  ,  middleName: String
                  ,  lastName: String
                  ,  birthday: Date
                  ,  email: String
                  ,  id: Number
               }
         }
   })
//*/

}
else if(poop==6){//- mongoose

}








