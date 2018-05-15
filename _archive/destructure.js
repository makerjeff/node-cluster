// playing with destructuring
const el_data = {
    first: 'Jeff',
    last: 'Wu',
    age: 34,
    contact: {
        email: 'makerjeffwu@gmail.com',
        phone: '6265555555',
        twitter: ''
    }
};


function print_stuff(arr) {
    arr.forEach((elem, ind, arr) => {
        console.log(elem);
    });
}

let {first, last} = el_data;

print_stuff([first, last]);
