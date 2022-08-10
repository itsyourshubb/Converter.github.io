
function funchng() {
    opt = document.getElementById("choose").value;

    if (opt === "wght") {
        console.log(opt)
        str = ""
        str = `
                <select name="dropd" id="chooseagain" onchange="funchng2()">
                    <option value="">--Please choose an option--</option>
                    <option value="ktp" id="choose11" onclick="sclfun()">Kilogram To Pound (vice & versa)</option>
                    <option value="ktt" id="choose12" onclick="currfun()">Kilogram To Tonn (vice & versa)</option>
                    <option value="ttq" id="choose13" onselect="wghtfun()">Tonn To Quintle (vice & versa)</option>
                </select>`
        inp2.innerHTML = str;
    }
    else if (opt === "curr") {
        str = ""
        str = `
                <select name="dropd" id="chooseagain" onchange="funchng2()">
                    <option value="">--Please choose an option--</option>
                    <option value="rtd" id="choose21" onclick="sclfun()">Rupee To Dollar (vice & versa)</option>
                    <option value="rte" id="choose22" onclick="currfun()">Rupee To Euro (vice & versa)</option>
                    <option value="dte" id="choose23" onselect="wghtfun()">Dollar To Euro (vice & versa)</option>
                </select>
                `
        inp2.innerHTML = str;
    }
    else if (opt == "scl") {
        str = ""
        str = `
                <select name="dropd" id="chooseagain" onchange="funchng2()">
                    <option value="">--Please choose an option--</option>
                    <option value="itf" id="choose31" onclick="sclfun()">Inches To Foots (vice & versa)</option>
                    <option value="fty" id="choose32" onclick="currfun()">Foot To Yard (vice & versa)</option>
                    <option value="ktm" id="choose33" onselect="wghtfun()">Kilometer To Mile (vice & versa)</option>
                </select>`
        inp2.innerHTML = str;
    }
    else {
        str = ""
        str = `
                <select name="dropd" id="choose" onchange="funchng()">
                    <option value="">--Please choose an option--</option>
                </select>`;
        inp2.innerHTML = str;
    }
}
function funchng2() {
    ans = document.getElementById("chooseagain").value;
    if (ans == "ktp") {
        str1 = "";
        str1 = `
                <label for="from">Kilogram: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Pound: </label>
                <input type="number" id="to">
                <br><br>`
        inp.innerHTML = str1;
        con1.addEventListener("click", () => {
            from1 = document.getElementById("from").value;
            to1 = 2.205 * from1;
            document.getElementById("to").value = to1;
        })
        vv1.addEventListener("click", () => {
            str2 = "";
            str2 = `
                <label for="from">Pound: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Kilogram: </label>
                <input type="number" id="to">
                <br><br>`
            inp.innerHTML = str2;
            con1.addEventListener("click", () => {
                from1 = document.getElementById("from").value;
                to1 = from1 * 0.454;
                document.getElementById("to").value = to1;
            })
        })

    }
    else if (ans == "ktt") {
        str1 = "";
        str1 = `
                <label for="from">Kilogram: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Tonn: </label>
                <input type="number" id="to">
                <br><br>`
        inp.innerHTML = str1;
        con1.addEventListener("click", () => {
            from1 = document.getElementById("from").value;
            to1 = 0.001 * from1;
            document.getElementById("to").value = to1;
        })
        vv1.addEventListener("click", () => {
            str2 = "";
            str2 = `
                <label for="from">Tonn: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Kilogram: </label>
                <input type="number" id="to">
                <br><br>`
            inp.innerHTML = str2;
            con1.addEventListener("click", () => {
                from1 = document.getElementById("from").value;
                to1 = 1000 * from1;
                document.getElementById("to").value = to1;
            })
        })
    }
    else if (ans == "ttq") {
        str1 = "";
        str1 = `
                <label for="from">Tonn: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Quintle: </label>
                <input type="number" id="to">
                <br><br>`
        inp.innerHTML = str1;
        con1.addEventListener("click", () => {
            from1 = document.getElementById("from").value;
            to1 = 10 * from1;
            document.getElementById("to").value = to1;
        })
        vv1.addEventListener("click", () => {
            str2 = "";
            str2 = `
                <label for="from">Quintle: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Tonn: </label>
                <input type="number" id="to">
                <br><br>`
            inp.innerHTML = str2;
            con1.addEventListener("click", () => {
                from1 = document.getElementById("from").value;
                to1 = 0.1 * from1;
                document.getElementById("to").value = to1;
            })
        })
    }
    else if (ans == "rtd") {
        str1 = "";
        str1 = `
                <label for="from">Rupee: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Dollar: </label>
                <input type="number" id="to">
                <br><br>`
        inp.innerHTML = str1;
        con1.addEventListener("click", () => {
            from1 = document.getElementById("from").value;
            to1 = from1 * 0.0126;
            document.getElementById("to").value = to1;
        })

        vv1.addEventListener("click", () => {
            str2 = "";
            str2 = `
                <label for="from">Dollar: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con2">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Rupee: </label>
                <input type="number" id="to">
                <br><br>`
            inp.innerHTML = str2;
            con2.addEventListener("click", () => {
                from1 = document.getElementById("from").value;
                to1 = from1 * 80;
                document.getElementById("to").value = to1;
            })
        })
    }
    else if (ans == "rte") {
        str1 = "";
        str1 = `
                <label for="from">Rupee: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Euro: </label>
                <input type="number" id="to">
                <br><br>`
        inp.innerHTML = str1;
        con1.addEventListener("click", () => {
            from1 = document.getElementById("from").value;
            to1 = from1 * 0.012;
            document.getElementById("to").value = to1;
        })

        vv1.addEventListener("click", () => {
            str2 = "";
            str2 = `
                <label for="from">Euro: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Rupee: </label>
                <input type="number" id="to">
                <br><br>`
            inp.innerHTML = str2;
            con1.addEventListener("click", () => {
                from1 = document.getElementById("from").value;
                to1 = from1 * 81.13;
                document.getElementById("to").value = to1;
            })
        })
    }
    else if (ans == "dte") {
        str1 = "";
        str1 = `
                <label for="from">Dollar: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Euro: </label>
                <input type="number" id="to">
                <br><br>`
        inp.innerHTML = str1;
        con1.addEventListener("click", () => {
            from1 = document.getElementById("from").value;
            to1 = 0.98 * from1;
            document.getElementById("to").value = to1;
        })
        vv1.addEventListener("click", () => {
            str2 = "";
            str2 = `
                <label for="from">Euro: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Dollar: </label>
                <input type="number" id="to">
                <br><br>`
            inp.innerHTML = str2;
            con1.addEventListener("click", () => {
                from1 = document.getElementById("from").value;
                to1 = 1.02 * from1;
                document.getElementById("to").value = to1;
            })
        })
    }
    else if (ans == "itf") {
        str1 = "";
        str1 = `
                <label for="from">Inch: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Foot: </label>
                <input type="number" id="to">
                <br><br>`
        inp.innerHTML = str1;
        con1.addEventListener("click", () => {
            from1 = document.getElementById("from").value;
            to1 = from1 * 0.0833333;
            document.getElementById("to").value = to1;
        })
        vv1.addEventListener("click", () => {
            str2 = "";
            str2 = `
                <label for="from">Foot: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Inch: </label>
                <input type="number" id="to">
                <br><br>`
            inp.innerHTML = str2;
            con1.addEventListener("click", () => {
                from1 = document.getElementById("from").value;
                to1 = from1 * 12;
                document.getElementById("to").value = to1;
            })
        })
    }
    else if (ans == "fty") {
        str1 = "";
        str1 = `
                <label for="from">Foot: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Yard: </label>
                <input type="number" id="to">
                <br><br>`
        inp.innerHTML = str1;
        con1.addEventListener("click", () => {
            from1 = document.getElementById("from").value;
            to1 = from1 * 0.33;
            document.getElementById("to").value = to1;
        })
        vv1.addEventListener("click", () => {
            str2 = "";
            str2 = `
                <label for="from">Yard: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Foot: </label>
                <input type="number" id="to">
                <br><br>`
            inp.innerHTML = str2;
            con1.addEventListener("click", () => {
                from1 = document.getElementById("from").value;
                to1 = from1 * 3;
                document.getElementById("to").value = to1;
            })
        })
    }
    else if (ans == "ktm") {
        str1 = `
                <label for="from">Kilometer: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Mile: </label>
                <input type="number" id="to">
                <br><br>`
        inp.innerHTML = str1;
        con1.addEventListener("click", () => {
            from1 = document.getElementById("from").value;
            to1 = from1 * 0.62;
            document.getElementById("to").value = to1;
        })
        vv1.addEventListener("click", () => {
            str2 = "";
            str2 = `
                <label for="from">Mile: </label>
                <input type="number" id="from">
                <br><br>
                <button id="con1">Convert</button>
                <button id="vv1">Vice-Versa</button>
                <br><br>
                <label for="to">Kilometer: </label>
                <input type="number" id="to">
                <br><br>`
            inp.innerHTML = str2;
            con1.addEventListener("click", () => {
                from1 = document.getElementById("from").value;
                to1 = from1 * 1.61;
                document.getElementById("to").value = to1;
            })
        })
    }
    else {
        str1 = `
                `
        inp.innerHTML = str1;
    }
}

