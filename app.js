// function findFirstRepeated(toyIds) {
//     let idSet = new Set();
//     for (let i = 0; i < toyIds.length; i++) {
//         if (idSet.has(toyIds[i])) {
//             return toyIds[i];
//         }
//         idSet.add(toyIds[i]);
//     }
//     return -1;
// }
// const giftIds3 = [5, 1, 5, 1]
// const firstRepeatedId3 = findFirstRepeated(giftIds3)
// console.log(firstRepeatedId3)

// function manufacture(gifts, materials) {
//   let materialCounts = {};
//   for (let material of materials) {
//     if (!materialCounts[material]) {
//       materialCounts[material] = 0;
//     }
//     materialCounts[material]++;
//   }

//   let possibleGifts = [];
//   for (let gift of gifts) {
//     let giftMaterials = {};
//     for (let material of gift) {
//       if (!giftMaterials[material]) {
//         giftMaterials[material] = 0;
//       }
//       giftMaterials[material]++;
//     }

//     let canBeMade = true;
//     for (let material in giftMaterials) {
//       if (
//         !materialCounts[material] ||
//         materialCounts[material] < giftMaterials[material]
//       ) {
//         canBeMade = false;
//         break;
//       }
//     }

//     if (canBeMade) {
//       possibleGifts.push(gift);
//     }
//   }

//   console.log(possibleGifts);
// }
// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'

// manufacture(gifts, materials) 

// 3

function findExtraStep(originalSteps, modifiedSteps) {
    // Compare each step in the sequences
    for(let i = 0; i < Math.max(originalSteps.length, modifiedSteps.length); i++) {

        if(originalSteps[i] !== modifiedSteps[i]) {
            return modifiedSteps[i];
        }
    }
}
let originalSteps = ['cut wood', 'paint', 'assemble'];
let modifiedSteps = ['cut wood',  'paint',"aas", 'assemble'];

// console.log(findExtraStep(original, modifiedS));   // aas



// 4
function reverse(text) {
    while (text.includes('(')) {
        let left = text.lastIndexOf('(');
        let right = text.indexOf(')', left);
        let reversed = text.slice(left + 1, right).split('').reverse().join('');
        text = text.slice(0, left) + reversed + text.slice(right + 1);
    }
    return text;
}
let message = "Merry Christmas (taht si) (wonk uoy did) (I teb)";
console.log(reverse(message));  
//  'Merry Christmas is that did you know I bet'