:: Created by npm, please don't edit manually.
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe" "%~dp0\.\node_modules\nTest\nTest.js" C:\dev\PDK\node_modules\pops\tests\core\core.nTestGroup
) ELSE (
  node "%~dp0\.\node_modules\nTest\nTest.js" C:\dev\PDK\node_modules\pops\tests\core\core.nTestGroup
)
