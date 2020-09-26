function hi(name, callback){
    setTimeout(() => {
        console.log(`Hi, ${name}`)
        callback(name)
    }, 1000)
}

function bye(name, callback){
    setTimeout(() => {
        console.log(`Bye, ${name}`)
        callback()
    }, 1000)
}

function talk(callback){
    setTimeout(() => {
        console.log('Bla bla bla bla...')
        callback()
    }, 1000)
}

function conversation(name, times, callback){
    if(times > 0) {
        talk(() => {
            conversation(name, --times, callback)
        })
    } else {
        bye(name, callback)
    }
}

console.log('Starting process...')
hi('Edgar', (name) => {
    conversation(name, 5, () => {
        console.log('Process completed')
    })
})