var z, z2, z4, zz, i, l
   ,  cout=console.log
   ,  src='D:/dev/PDK/node_modules/pops'
   ,  git='D:/documents/git/pops'

   ,  fs=require('fs')
   ,  DelFile=fs.unlinkSync
   ,  MkDir=fs.mkdirSync
   ,  ReadDir=fs.readdirSync
   ,  ReadFile=fs.readFileSync
   ,  RmDir=fs.rmdirSync
   ,  Stat=fs.statSync
   ,  WriteFile=fs.writeFileSync

   ,  path=require('path')
   ,  Join=path.join

   ,  sf=ReadDir(src)
   ,  gf=ReadDir(git)

   ,  DelContents=function(pth, except, rmDir) {
         var z, z2, z4, zz, i, ii, l, go
            ,  zz=except||[]
            ,  ex=(zz instanceof Array)? zz : [zz]
            ,  ll=ex.length
            ,  files=ReadDir(pth)
         ;
         
         for(i=0, l=files.length; i<l; i++) {
            zz=files[i];
            z=Join(pth, zz);
            go=2; for(ii=0; ii<ll; ii++) { z4=ex[ii]; if(z==z4 || zz==z4) go=0; };
            if(go) {
               if(Stat(z).isDirectory()) DelContents(z, [], 2);
               else DelFile(z);
            };

         };

         if(rmDir) RmDir(pth);
         
      }
   ,  CopyFile=function(src, dest) { var z=ReadFile(src); WriteFile(dest, z); }
   ,  CopyContents=function(src, dest, except) {
         var z, z2, z4, zz, i, ii, l, go
            ,  zz=except||[]
            ,  ex=(zz instanceof Array)? zz : [zz]
            ,  ll=ex.length
            ,  files=ReadDir(src)
         ;
         
         for(i=0, l=files.length; i<l; i++) {
            zz=files[i];
            z=Join(src, zz);
            go=2; for(ii=0; ii<ll; ii++) { z4=ex[ii]; if(z==z4 || zz==z4) go=0; };
            if(go) {
               z2=Join(dest, zz);
               if(Stat(z).isDirectory()) {
                  MkDir(z2);
                  CopyContents(z, z2, ex);
               }
               else CopyFile(z, z2);
            };
         };
         
      }
;

DelContents(git, [Join(git, '.git'), Join(git, 'node_modules')]);
CopyContents(src, git, [Join(src, '.git'), Join(src, 'node_modules')]);
//DelContents(git, [Join(git, '.git')]);
//CopyContents(src, git, [Join(src, '.git')]);





