function triangleFit(triangle1, triangle2) {
    if (triangle1[0] + triangle1[1] <= triangle1[2] || triangle1[0] + triangle1[2] <= triangle1[1]
        || triangle1[1] + triangle1[2] <= triangle1[0] || triangle2[0] + triangle2[1] <= triangle2[2] || triangle2[0] + triangle2[2] <= triangle2[1]
        || triangle2[1] + triangle2[2] <= triangle2[0]){
            return false;
        }else if (triangle1[0] + triangle1[1] + triangle1[2] > triangle2[0] + triangle2[1]
            + triangle2[2]){
                return false;
            }else{
                return true;
            }
}

console.log(triangleFit([1, 1, 1], [1, 1, 1]));
console.log(triangleFit([1, 1, 1], [2, 2, 2]));
console.log(triangleFit([1, 2, 3], [1, 2, 2]));
console.log(triangleFit([1, 2, 4], [1, 2, 6]));