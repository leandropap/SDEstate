import data from './data.json'

function creatRandArray(arr) {
    let rand = []
    for (let i = 0; i < 3; i++) {
        let num = Number.parseInt(Math.random() * 10)
        if (num <= arr.length && !rand.includes(arr[num])) {
            rand.push(arr[num])
        }
    }
    return rand
}
export const randArray = creatRandArray(data.properties)
