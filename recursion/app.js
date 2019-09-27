function getElementById(htmlObj, objID) {
    let htmlArr = Array.from(htmlObj);

    

    // let res;

    // for (let i = 0; i < htmlArr.length; i++) {
    //     console.log(htmlArr[i]);
    //     if (htmlArr[i]) {
    //         if (htmlArr[i].id === objID) {
    //             console.log('got it');
    //             res = htmlArr[i];
    //             break;
    //         } else res = getElementById(htmlArr[i].children, objID);
    //     }
    // }

    // return res;
}

console.log(getElementById(document.body.children, "foo"));