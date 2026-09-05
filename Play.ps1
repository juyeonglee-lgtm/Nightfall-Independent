$ErrorActionPreference='Stop'
$url='http://localhost:8912/'
try {
  $ready=$false
  try { $ready=(Invoke-WebRequest -UseBasicParsing -Uri $url -TimeoutSec 2).StatusCode -eq 200 } catch {}
  if(-not $ready){
    Start-Process powershell.exe -WindowStyle Hidden -ArgumentList @('-NoProfile','-ExecutionPolicy','Bypass','-File',('"'+(Join-Path $PSScriptRoot 'server.ps1')+'"'))
    for($i=0;$i -lt 15;$i++){
      Start-Sleep -Milliseconds 300
      try { $ready=(Invoke-WebRequest -UseBasicParsing -Uri $url -TimeoutSec 2).StatusCode -eq 200 } catch {}
      if($ready){break}
    }
  }
  if(-not $ready){throw 'Could not start Nightfall on port 8912.'}
  Start-Process $url
} catch { Write-Host $_.Exception.Message -ForegroundColor Red; Read-Host 'Press Enter to close'; exit 1 }
