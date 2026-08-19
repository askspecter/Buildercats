# BuilderCat 🐾🔵

Official website for **BuilderCat ($BUILDERCAT)** — the hardhat cat building on **Base**.

> Code. Build. Deploy. On Base. One block at a time.

## Details

| | |
|---|---|
| **Name** | BuilderCat |
| **Ticker** | $BUILDERCAT |
| **Chain** | Base |
| **Total Supply** | 1,000,000,000 (1B) |
| **Contract** | `0xb2000000000000000000000Cc9a0b0D5Ccf89901` |
| **Chart** | [DexScreener](https://dexscreener.com/base/0x1ba666f7294ad6066caa61b4f74f7973151374cc96da37c59c736ec041295911) |
| **Twitter / X** | [@buildercatbase](https://x.com/buildercatbase) |

## Structure

```
index.html        # single-page site
styles.css        # styles (Base-blue sketch theme)
script.js         # copy-CA button + scroll reveal
assets/
  logo.png        # BuilderCat logo (transparent bg)
  logo-256.png    # square favicon / social image
  art/            # 6 art pieces, split from the comic sheet, backgrounds removed
```

## Run locally

Any static server works:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

No build step, no dependencies — pure HTML/CSS/JS.

## Notes

The six gallery images were split one-by-one from the original comic sheet and had their
backgrounds removed (exterior flood-fill so the cat's white body stays intact). The live
price chart is embedded from DexScreener.

---

*This is a meme coin site for entertainment purposes. Not financial advice. Not affiliated with Coinbase or Base.*
