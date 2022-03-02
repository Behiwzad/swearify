const words = require("./data/words.json");

const findAndFilter = (
    sentense,
    placeholder,
    languages,
    allowed_words,
    myList
) => {
    try {
        let found = [];
        //find sweras according to slected languages
        for (let i = 0; i < languages.length; i++) {
            let language = languages[i];
            found = [
                ...found,
                ...words[language].filter((e) => sentense.toLowerCase().includes(e)),
            ];
            found = [
                ...found,
                ...myList.filter((e) => sentense.toLowerCase().includes(e)),
            ];
        }
        //sort founded words by length
        found.sort((a, b) => b.length - a.length);
        //crete a spoiler for each founded word with same length and return the result
        if (found.length !== 0) {
            for (let i = 0; i < found.length; i++) {
                if (!allowed_words.includes(found[i])) {
                    const spoilString = new Array(found[i].length)
                        .fill(placeholder)
                        .join("");
                    sentense = sentense.replaceAll(
                        new RegExp(found[i], "gi"),
                        spoilString
                    );
                }
            }
            return {
                found: true,
                selected_languages: languages,
                bad_words: found,
                filtered_sentense: sentense,
                allowed_words: allowed_words,
            };
        }
        //if there is no swear in the sentense return false
        return {
            found: false,
        };
    } catch (error) {
        console.log("error in findAndFilter", error);
    }
};

module.exports = {
    findAndFilter,
};