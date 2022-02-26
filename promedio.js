// MEDIA ARITMETRICA

// const list = [10,22,30,45];
// let val = 0;

// for (i=0;i < list.length;i++) {
//     val = val + list[i];
// }

// const prom = val / list.length;
// console.log(prom);

function Media() {
    const list = [10,22,30,45];
    let val = 0;

    for (i=0;i < list.length;i++) {
        val = val + list[i];
    }

    const prom = val / list.length;
    return prom;
}