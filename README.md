# CRYPTO-FILES
## Description

This package NPM to using with Nodejs.

## Installation
Using crypto-files package.

## Usage
```html

$ npm install crypto-files -S

or

$ yarn add crypto-files

```
Follow the following steps and you're good to go! Important:


![alt text]()


## Coding
```javascript

const express=require('express')
const app=express()
const { cryptoFile }=require('crypto-files')

const port=process.env.PORT || 3000

let x="Node-Js.png"
const newFile=cryptoFile(x)
console.log(newFile)

app.get('/', (req,res)=>{
    res.send(`Image Encrypt:  ${newFile}`)
})

app.listen(port, ()=>{
    console.log(`Server running in port: ${port}`)
})
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/crypto-files. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).







