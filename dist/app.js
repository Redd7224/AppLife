"use strict";
// const names: Array<string> = [];
// // names[0].split(' ');
// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });
// promise.then(data => {
//     //data.split(' ');
// })
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Jon', hobbies: ['Volleyball'] }, { age: 30 });
const mergeObj2 = merge({ name: 'Jon' }, { age: 30 });
//const mergeObj3 = merge({ name: 'Jon'}, 30); // Gets error because of object constraints set in merge method
console.log(mergeObj);
console.log(mergeObj2);
function countAndPrint(element) {
    let descriptionText = 'Got no value.';
    if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' element(s).';
    }
    return [element, descriptionText];
}
console.log(countAndPrint(['Sprots', 'Cooking']));
console.log(countAndPrint('Hi there!'));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Jon' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    additem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.additem('Jon');
textStorage.additem('Ray');
textStorage.additem('Kiwi');
console.log(textStorage.getItems());
textStorage.removeItem('Ray');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Jon', 'Hall'];
//names.push('Ray');
