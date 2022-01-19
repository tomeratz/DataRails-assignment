let time = Date.now()

let fileState = {
    id: 567,
    fileName: 'November_office_supplies',
    filePath: 'D://',
    fileCategory: 'expenses',
    extension: 'xls'
}

const changes = [
    { type: 'PATH_CHANGE', filePath: 'C://' },
    {
        type: 'OWNERS_CHANGE', owners: [
            { type: 'OWNERS_CHANGE', owner1: 'ownerName1' },
            { type: 'OWNERS_CHANGE', owner2: 'ownerName2' },
            {
                nested: [
                    { type: 'OWNERS_CHANGE', owner3: 'ownerName3' },
                    { type: 'OWNERS_CHANGE', owner4: 'ownerName4' },
                    {
                        nested: [
                            { type: 'OWNERS_CHANGE', owner5: 'ownerName5' },]
                    }
                ]
            }
        ]
    },
    { type: 'RENAME', fileName: 'November+december_office_supplies' },
    { type: 'FILE_TYPE_CHANGE', extension: 'xlsx' },
];

const flattenArr = []

// flatten nested changes
const chechNested = (obj) => {
    let n = 0;
    let key = Object.keys(obj);
    for (let item of key) {
        if (typeof obj[item] !== "object") {
            if (++n === key.length) {
                return true;
            }
        }
        else {
            if (chechNested(obj[item]) === true) {
                flattenArr.push(obj[item]);
            }
        }
    }
    return flattenArr;
};

// write changes to fileState obj
const executeChange = (change) => {
    type = change.type;
    param = Object.keys(change)[1]
    fileState[param] = change[param];
    return type;
};

const calculateState = (changes) => {
    console.log('before', fileState);

    const flattenObj = chechNested(changes).reverse();
    const chagesObj = {};
    let n = 0;

    flattenObj.forEach(flattenChange => {
        let changeType = flattenChange.type;
        if (!chagesObj[changeType]) {
            executeChange(flattenChange);
            chagesObj[changeType] = n;
            n++;
        };
    });
    fileState.changesList = Object.keys(chagesObj);
    console.log('after', fileState);
    console.log('app', time - Date.now());
};

calculateState(changes);
