:: Created by npm, please don't edit manually.
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe" "%~dp0\.\node_modules\nTest\nTest.js" d:\dev\PDK\node_modules\pops\tests\db\mongo\tempTest.nTest
) ELSE (
  node "%~dp0\.\node_modules\nTest\nTest.js" d:\dev\PDK\node_modules\pops\tests\db\mongo\tempTest.nTest
)
