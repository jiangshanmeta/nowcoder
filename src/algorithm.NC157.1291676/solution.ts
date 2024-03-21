/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型二维数组
 */
export function foundMonotoneStack (nums: number[]): number[][] {
    const result = new Array<number[]>(nums.length);
    for (let i = 0; i < nums.length; i++) {
        result[i] = [-1, -1,];
    }
    const stack:number[] = [];
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) {
            const index = stack.pop()!;
            result[index][0] = stack.length > 0 ? stack[stack.length - 1] : -1;
            result[index][1] = i;
        }
        stack.push(i);
    }
    for (let i = stack.length - 1; i > 0; i--) {
        result[stack[i]][0] = stack[i - 1];
    }
    for (let i = result.length - 2; i > -1; i--) {
        if (result[i][1] === -1) {
            continue;
        }
        const rIndex = result[i][1];
        if (nums[rIndex] === nums[i]) {
            result[i][1] = result[rIndex][1];
        }
    }

    return result;
}
