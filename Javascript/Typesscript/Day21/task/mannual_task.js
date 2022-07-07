let x = [1, 2, 3, 4, 5];
for (let i = 0; i < x.length; i++) {
    let setlayout = x.reduce((previousvalue, currentvalue, currentindex, arraynumbers) => {
        return arraynumbers[i] + ":" + arraynumbers[i];

    })
    console.log(setlayout);
}