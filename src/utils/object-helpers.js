export let updateObjectInArray = (items, valueForSearch, objPropName, newObjProps) => {
    return items.map(user => {
        if (user[objPropName] === valueForSearch) {
            return {...user, ...newObjProps};
        } else {
            return user;
        }
    })
}