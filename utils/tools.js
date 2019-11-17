const generateShortenCode = (len) => {
	if (!len) return "";
	const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", max = letters.length;
	let code = "";
	while (len--) code += letters[Math.floor(Math.random() * max)];
	return code;
};

module.exports = {
	generateShortenCode,
}