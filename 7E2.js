var Datum = (function () {
    var exp = /^(\d{2})\/(\d{2})\/(\d{4})$/,
        search = [{date: '03/10/2016', description: 'Tag der Deutschen Einheit'},
        {date: '07/03/2016', description: 'Festa della Repubblica'}];
    Array.prototype.searchDatum = function (inputDate) {
        var i = 0;
        for (i = 0; i < this.length; i += 1) {
            if (this[i].date === inputDate) {
                return this[i];
            }
        }
    };
    return function (usDate) {
        var result = usDate.match(exp);
        result = result ? result[2] + '/' + result[1] + '/' + result[3] : null;
        var des = search.searchDatum(result);
        result = des ? result + '(' + des.description + ')' : result;
        return result;
    };
}());
console.log(Datum('10/03/2016'));
