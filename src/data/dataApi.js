fetch("http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq", 
{
    api_key: 'uis4Hgj4DWGrWVSSO71YbVEYfCquaJeV',
    q: cheese,
    limit: 12
}
)
  .then(response => response.json()
  .then(data =>
    console.log(data))
  .catch(error => console.log(error));

