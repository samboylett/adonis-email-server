# Adonis Email Microservice

Basic webserver with views for generating emails for a back end.

Views are parsed to inline the CSS and minify the HTML

## Example

View:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <style lang="css">
        body {
            padding: 20px;
            margin: 0;
            font-family: sans-serif;
            background: #eee;
        }

        .welcome {
            text-align: center;
        }

        @media screen and (min-width: 500px) {
            body {
                font-size: 1.2em;
            }
        }
    </style>
</head>
<body>
    <div class="welcome">
        <p>Welcome to our app {{ firstName }}!</p>

        <p>You can now <a href="/login">login</a>
    </div>
</body>
</html>
```

Inlined:

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <style lang="css">@media screen and (min-width:500px){body{font-size:1.2em}}</style>
   </head>
   <body style="background:#eee;font-family:sans-serif;margin:0;padding:20px">
      <div class="welcome" style="text-align:center">
         <p>Welcome to our app Sam!</p>
         <p>You can now <a href="/login">login</a> </p>
      </div>
   </body>
</html>
```

Final Output:

```html
<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <style lang="css">@media screen and (min-width:500px){body{font-size:1.2em}}</style> </head> <body style="background:#eee;font-family:sans-serif;margin:0;padding:20px"> <div class="welcome" style="text-align:center"> <p>Welcome to our app Sam!</p> <p>You can now <a href="/login">login</a> </p></div> </body> </html>
```
