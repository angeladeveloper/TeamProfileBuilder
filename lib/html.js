const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="shortcut icon" href="#" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      src="https://kit.fontawesome.com/ef81dcc31e.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="style.css" />
    <script src="/index.js" defer></script>
    <title>Team Builder</title>
  </head>
  <body>
    <header><h1>My Team</h1></header>

    <main>
      <div class="container">
        <div class="member-card">
          <div class="card-header">
            <h2>
              <img src="/dist/assests/name.png" alt="" />
              Angela
            </h2>
            <h2>
              <img src="/dist/assests/assets.png" alt="manager icon" /> Manager
            </h2>
          </div>
          <ul>
            <li id="ID">
              <img src="/dist/assests/fingerprint.png" alt="email icon" />
              <span>1</span>
            </li>
            <li id="email">
              <img src="/dist/assests/email.png" alt="email icon" />
              <span
                ><a href="mailto:cullen97@gmail.com">cullen97@gmail.com</a>
              </span>
            </li>
            <li id="unique">
              <span>
                <img src="/dist/assests/location-pin.png" alt="email icon" />
                Office number 1</span
              >
            </li>
          </ul>
        </div>
      </div>
    </main>
  </body>
</html>
`