:: Created by PDK, original by npm, please don't edit manually.
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe" "%~dp0\.\node_modules\pdk\PDS.js" %*
) ELSE (
  node "%~dp0\.\node_modules\pdk\PDS.js" %*
)
