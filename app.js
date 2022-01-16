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

let flattenArr = []

// flatten nested changes
let chechNested = (obj) => {
    let n = 0
    for (let item of Object.keys(obj)) {
        if (typeof obj[item] !== "object") {
            n++
            if (n === Object.keys(obj).length) {
                return true
            }
        }
        else {
            if (chechNested(obj[item]) === true) {
                flattenArr.push(obj[item])
            }
        }
    }
    return flattenArr
}

// write changes to fileState obj
let executeChange = (change) => {
    type = change.type
    param = Object.keys(change)[1]
    fileState[param] = change[param]
    return type
}

const calculateState = (changes) => {
    console.log('before', fileState);

    let flattenObj = chechNested(changes).reverse();
    let chagesObj = {}
    let n = 0

    flattenObj.forEach(flattenChange => {
        let changeType = flattenChange.type
        if (chagesObj[changeType]) {
        } else {
            executeChange(flattenChange)
            chagesObj[changeType] = n
            n++
        }
    });
    fileState.changesList = Object.keys(chagesObj)
    console.log('after', fileState);
    console.log('app', time - Date.now());


};

calculateState(changes)
