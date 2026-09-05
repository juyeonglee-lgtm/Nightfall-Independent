$root = [IO.Path]::GetFullPath($PSScriptRoot)
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add('http://localhost:8912/')
$listener.Start()
try {
  while ($listener.IsListening) {
    $context=$listener.GetContext()
    try {
      $relative=[Uri]::UnescapeDataString($context.Request.Url.AbsolutePath).TrimStart('/')
      if (-not $relative) { $relative='index.html' }
      $path=[IO.Path]::GetFullPath((Join-Path $root $relative))
      if ($path.StartsWith($root+'\',[StringComparison]::OrdinalIgnoreCase) -and (Test-Path -LiteralPath $path -PathType Leaf)) {
        $bytes=[IO.File]::ReadAllBytes($path)
        $context.Response.ContentType=if($path.EndsWith('.png')){'image/png'}elseif($path.EndsWith('.js')){'text/javascript; charset=utf-8'}else{'text/html; charset=utf-8'}
        $context.Response.Headers.Add('Cache-Control','no-store')
        $context.Response.OutputStream.Write($bytes,0,$bytes.Length)
      } else { $context.Response.StatusCode=404 }
    } catch { $context.Response.StatusCode=500 }
    finally { $context.Response.Close() }
  }
} finally { $listener.Close() }
