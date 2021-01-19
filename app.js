const express = require('express');
const path = require('path');

const app = express()
// const userRouter = require('./routes/page.route');


app.get('/', (req, res) => {
  res.redirect('/login')
})
// set static directories
app.use(express.static(path.join(__dirname, 'dist')));
const port = 3900



app.use('/registration', express.static(path.join(__dirname, 'dist/registrationPage.html')));
app.use('/login', express.static(path.join(__dirname, 'dist/loginPage.html')));
// app.use('/show/:hashString', (req, res) => {
//   res.sendFile(__dirname + '/dist/trackListPage.html')
//   // localStorage.setItem("gpxiesTrackToShow", req.params.hashString.toString());
//   // res.render('dist/trackListPage.html', {hashString: req.params.hashString.toString() })
//   //app.use('/mytracks', express.static(path.join(__dirname, 'dist/trackListPage.html')))
// //  res.redirect(`dist/showTrack.html`); ?track=${req.params.hashString}
// });

app.use('/mytracks', express.static(path.join(__dirname, 'dist/trackListPage.html')))
app.use('/upload', express.static(path.join(__dirname, 'dist/loadTrackPage.html')))


app.use('/show/:hashString', (req, res, next) => {
  req.url = req.params.hashString;
  res.send(__dirname + '/dist/showTrack.html')
  // 
  express.static(__dirname + '/dist/showTrack.html')(req, res, next);
});

app.listen(port, () => {
  console.log(`🛸 Example app listening at http://localhost:${port}`)
}) 