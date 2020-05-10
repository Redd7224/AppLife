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

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Jon', hobbies: ['Volleyball'] }, {age: 30});
const mergeObj2 = merge({ name: 'Jon'}, {age: 30});
//const mergeObj3 = merge({ name: 'Jon'}, 30); // Gets error because of object constraints set in merge method

console.log(mergeObj);
console.log(mergeObj2);
//console.log(mergeObj3);

interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    
    if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' element(s).';
    }

    return [element, descriptionText];
}

console.log(countAndPrint(['Sprots', 'Cooking']));
console.log(countAndPrint('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Jon' }, 'name');

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    additem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }

        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.additem('Jon');
textStorage.additem('Ray');
textStorage.additem('Kiwi');
console.log(textStorage.getItems());
textStorage.removeItem('Ray');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const jonObj = {name: 'Jon'};
// objStorage.additem({ name: 'Jon' });
// objStorage.additem({ name: 'Zack' });
// objStorage.removeItem({ name: 'Jon' });
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Jon', 'Hall'];
//names.push('Ray');