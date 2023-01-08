"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMaxSlidingWindow = void 0;
function findMaxSlidingWindow(nums, w) {
    var window = [];
    var maxArray = [];
    if (nums.length == 0) {
        return maxArray;
    }
    if (w > nums.length) {
        w = nums.length;
    }
    for (var i = 0; i < w; i++) {
        while (window.length && nums[i] >= nums[window[window.length - 1]]) {
            window.pop();
        }
        window.push(i);
    }
    maxArray.push(nums[window[0]]);
    for (var i = w; i < nums.length; i++) {
        if (window.length && i >= window.length) {
            window.shift();
        }
        while (window.length && nums[i] >= nums[window[window.length - 1]]) {
            window.pop();
        }
        window.push(i);
        maxArray.push(nums[window[0]]);
    }
    return maxArray;
}
exports.findMaxSlidingWindow = findMaxSlidingWindow;
//# sourceMappingURL=findMaximumSlidingWindowV2.js.map