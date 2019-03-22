module.exports={
    cryptoFile: (file)=>{
        const r=Math.floor(Math.random() * (Math.exp(file.length) - file.length)) + file.length
        const f=Date.now() + r + '_' + file.replace(/\+s/g,'-').replace(/-/gi,'')
        const nf=f.toLowerCase()
        return nf
    }
}