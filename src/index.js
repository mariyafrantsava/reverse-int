module.exports = function reverse(n) {
    n = String(n).replace('-', '');
    let lastChar = n.length - 1;
    if (n[lastChar] === '0') {
        n = n.slice(0, lastChar);
    }
    n = n.split('').reverse().join('');
    return n;
}