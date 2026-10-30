#!/usr/bin/env bash
# Build a zip suitable for Chrome Web Store / sideload.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT/dist"
VER="$(python3 -c 'import json; print(json.load(open("'"$ROOT"'/manifest.json"))["version"])')"
mkdir -p "$OUT_DIR"
STAGE="$(mktemp -d -t hamejoo-chrome-XXXX)"
cleanup() { rm -rf "$STAGE"; }
trap cleanup EXIT

rsync -a \
  --exclude 'dist/' \
  --exclude 'scripts/' \
  --exclude 'README.md' \
  --exclude 'LICENSE' \
  --exclude 'CONTRIBUTING.md' \
  --exclude '.git/' \
  --exclude '.gitignore' \
  --exclude '.DS_Store' \
  --exclude 'docs/' \
  --exclude 'icons/icon-512.png' \
  "$ROOT/" "$STAGE/hamejoo-chrome/"

ZIP="$OUT_DIR/hamejoo-chrome-${VER}.zip"
rm -f "$ZIP" "$OUT_DIR/hamejoo-chrome.zip"
( cd "$STAGE" && zip -qr "$ZIP" hamejoo-chrome )
cp -f "$ZIP" "$OUT_DIR/hamejoo-chrome.zip"
echo "Packed: $ZIP"
