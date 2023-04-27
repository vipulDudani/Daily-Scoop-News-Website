

app.get('/', (req, res) => {
  res.sendFile("ind.html", { root: path.join(__dirname) } )
})

app.get('/api', async(req, res) => {
  console.log(req._parsedUrl.query)
  let url = "https://newsapi.org/v2/everything?"+req._parsedUrl.query
  let r = await axios(url)
  let a = r.data 
  res.json(a)
})

app.listen(port, () => {
  console.log(`port is running`)
})
