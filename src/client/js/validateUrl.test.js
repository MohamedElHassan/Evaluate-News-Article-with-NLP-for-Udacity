const validateUrl = require('./validateUrl')

test('Proberly make sure that the validate url is working' , ()=>{
    expect(validateUrl('kosa',)).toBe(false)
})