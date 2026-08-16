# For You, With Love ♡

A romantic, pink, aesthetic birthday surprise website — password-locked, responsive on phone and laptop, and fully interactive.

## How to run it

1. Open the `birthday-website` folder in VS Code.
2. Install the **Live Server** extension (or any local server), right-click `index.html` → **Open with Live Server**.
   - You can also just double-click `index.html` to open it in a browser, but a local server avoids occasional image-loading quirks.

## Everything you'll want to edit lives in `script.js`

Open `script.js` and look at the `CONFIG` object at the very top. It's all in one place:

| What | Where in `CONFIG` |
|---|---|
| **Password** (numbers only) | `password: "270306"` |
| Names shown in the navbar | `namesShort: "Y&M"` |
| **Birthday countdown date** | `birthdayDate: "2027-03-27T00:00:00"` |
| Welcome headline & subtext | `welcome: { title, subtext }` |
| **Photos & captions** | `memories: [ { src, caption }, ... ]` |
| **The letter**, page by page | `letterPages: [ { title, text }, ... ]` |
| **Playlist** (15 songs) | `playlist: [ { title, artist, spotifyUrl }, ... ]` |

Nothing else in the file needs to change for basic edits.

### Adding your real photos

Drop your images into `assets/images/` and update each `src` in `CONFIG.memories`, e.g.:

```js
{ src: "assets/images/memory1.jpg", caption: "One of my favorite moments ♡" }
```

Placeholder soft-pink images are already in that folder so the gallery works right out of the box — just overwrite them with your own photos of the same filenames, or point to new filenames.

### The music player

Songs now play **right on the page** using Spotify's own official embedded player (the same iframe player Spotify provides for embedding tracks on any website) — no redirect to open.spotify.com. Tapping a song swaps the player to that track; full playback needs a Spotify Premium login inside the embed (free accounts get a 30-second preview), same as any Spotify embed anywhere else on the web.

To change a song, replace its `spotifyId` in `CONFIG.playlist`:

1. Open the song on Spotify.
2. Click **⋯ → Share → Copy Song Link** — you'll get something like `https://open.spotify.com/track/4Dvkj6JhhA12EX05fT7y2e`.
3. Copy just the code at the end (`4Dvkj6JhhA12EX05fT7y2e`) into `spotifyId`.

## File structure

```
birthday-website/
├── index.html      → page structure (all 10 sections)
├── style.css        → all styling, colors, and responsive rules
├── script.js         → CONFIG (edit here!) + all interactivity
├── assets/
│   ├── images/        → memory1.jpg – memory8.jpg (swap with real photos)
│   └── music/          → (not required — playlist links to Spotify)
└── README.md
```

## Notes

- The password screen only checks the code on the client side — good for a cute surprise, not for real security. Don't put anything sensitive behind it.
- There's a **Reduce motion** toggle in the footer for anyone who wants fewer animations.
- The whole layout is responsive from small phones (320px) up through large desktops (1441px+), with no horizontal scrolling.
