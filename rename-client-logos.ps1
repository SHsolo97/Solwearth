# PowerShell script to rename client logo files
# Usage: Update the $renameMappings hashtable with your mappings, then run this script

$sourceFolder = "public\images\clientLogos"
$destinationFolder = "public\images"

# Define your rename mappings here
# Format: "old-filename.png" = "new-company-name.png"
$renameMappings = @{
    # Example:
    # "Screenshot 2025-12-15 112305.png" = "company-name.png"
    # "Screenshot 2025-12-15 112322.png" = "another-company.png"
    
    # ADD YOUR MAPPINGS BELOW:
    
}

Write-Host "Client Logo Renaming Script" -ForegroundColor Green
Write-Host "============================`n" -ForegroundColor Green

if ($renameMappings.Count -eq 0) {
    Write-Host "ERROR: No rename mappings defined!" -ForegroundColor Red
    Write-Host "Please edit this script and add your mappings to the `$renameMappings hashtable." -ForegroundColor Yellow
    exit
}

# Check if source folder exists
if (-not (Test-Path $sourceFolder)) {
    Write-Host "ERROR: Source folder not found: $sourceFolder" -ForegroundColor Red
    exit
}

# Create destination folder if it doesn't exist
if (-not (Test-Path $destinationFolder)) {
    New-Item -ItemType Directory -Path $destinationFolder -Force | Out-Null
}

$successCount = 0
$errorCount = 0
$skippedCount = 0

foreach ($oldName in $renameMappings.Keys) {
    $newName = $renameMappings[$oldName]
    $sourcePath = Join-Path $sourceFolder $oldName
    $destPath = Join-Path $destinationFolder $newName
    
    if (Test-Path $sourcePath) {
        try {
            # Copy file to destination with new name
            Copy-Item -Path $sourcePath -Destination $destPath -Force
            Write-Host "[✓] Copied: $oldName -> $newName" -ForegroundColor Green
            $successCount++
        }
        catch {
            Write-Host "[✗] Error copying $oldName : $_" -ForegroundColor Red
            $errorCount++
        }
    }
    else {
        Write-Host "[!] Skipped: $oldName (file not found)" -ForegroundColor Yellow
        $skippedCount++
    }
}

Write-Host "`n============================`n" -ForegroundColor Green
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "  Successful: $successCount" -ForegroundColor Green
Write-Host "  Errors: $errorCount" -ForegroundColor Red
Write-Host "  Skipped: $skippedCount" -ForegroundColor Yellow
Write-Host "`nFiles have been copied to: $destinationFolder" -ForegroundColor Cyan
