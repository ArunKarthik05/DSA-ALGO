let obj ={
    name:"Arun",
    age:20
}
const handler = {
    get( target,property){
        if(property in target)  {
            console.log(`Getting property "${property}"`);
            return Reflect.get(target,property)
        }else{
            console.log('No property')
            return false;
        }
    },
    set(target,property,value){
        console.log(`Setting property "${property}" to "${value}"`);
        return Reflect.set(target,property,value)
    }
}
let objs = new Proxy(obj, handler)
Object.defineProperty(obj, "name", {
    writable: false
});  
objs.name = "wsvhj"
console.log(objs.name)