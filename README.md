# DataRails-assignment
Requirements:
1. The task must be completed & the code should run
2. Using external libraries - Less is better
3. Robust solution is appreciated (edge cases handling)
4. You can either send me a Github link or the solution files themselves
5. If you have any questions or issues, please feel free to contact me
Task:
Please implement a Javascript function that receives as a parameter an
array of changes done to a file since it was created, and returns the
final state of the file after all the changes.
Example:
const changes = [
/* First object is the initial state */
{ id: 567, fileName: 'November_office_supplies',filePath: ‘D://’,
fileCategory: 'expenses', extension: 'xls’ },
{ type: 'PATH_CHANGE', filePath: 'C://' },
{ type: 'RENAME', fileName:'November+december_office_supplies'},
{ type: 'FILE_TYPE_CHANGE', extension: 'xlsx'}

];

Given the above example the result would be:
{
id: 567,
fileName: 'November+december_office_supplies',
fileCategory: 'expenses',
extension: 'xlsx',
filePath: 'C://',
changesList:['PATH_CHANGE','RENAME','FILE_TYPE_CHANGE']
}
Implement the function in the following way:
const calculateState = (changes) => {
//todo: make it work
};
- You are allowed to write any number of functions to implement the
solution
- Pay attention to the performance
- BONUS: Make the function handle deeply nested objects and arrays
