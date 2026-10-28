# MCP setup (exercise 11)

## Marketplace (docs server)

1. Cursor Settings → **MCP** → **Add from Marketplace**
2. Install **Context7** (or MDN / docs server available in your Cursor version)
3. Set `CONTEXT7_API_KEY` in the MCP server env UI (not in git)
4. Confirm **green / connected** status

## Manual (filesystem server)

1. Copy `mcp.example.json` → `mcp.json` in this folder (`.cursor/mcp.json` is gitignored)
2. Replace the filesystem path with your absolute `cursor-app` path if different
3. Reload Cursor; confirm filesystem server is green

## Secrets

- Never commit `.cursor/mcp.json` if it contains API keys
- Use Cursor MCP env fields or OS environment variables only
