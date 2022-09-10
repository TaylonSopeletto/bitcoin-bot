const toReal = (value) => {
    return Number(value).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};

module.exports = {toReal}