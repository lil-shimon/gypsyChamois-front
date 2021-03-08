module.exports = {
    //初期設定の[]のままだとすべてのファイルがクラス生成されてしまう。
    purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
