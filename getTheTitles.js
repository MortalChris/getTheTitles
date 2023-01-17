const getTheTitles = () =>{
    const books = [
    {
    title: 'Book',
    author: 'Name'
        },
    {
    title: 'Book2',
    author: 'Name2'
        }
            ];
    let arr = [];
        for(let i = 0; i < books.length; i++){
            arr.push(books[i].title);
            console.log(arr);
        }
    };
getTheTitles();

// Do not edit below this line
module.exports = getTheTitles;
