function useArguments (...nums) {
    return nums.reduce((sum, item) => sum + item, 0);
}
