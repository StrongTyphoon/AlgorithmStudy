/* Map 예시 */
const contacts = new Map();
contacts.set('a', 1)
contacts.set('b', 2)
if(contacts.has('a')){
  contacts.delete('a')
  contacts.set('a', 3)
}

console.log(contacts.size)
console.log(contacts.has('a'))
console.log(contacts.get('a'))

for(let [key,val] of contacts){
  console.log(key, val)
}

